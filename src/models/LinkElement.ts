export interface ILinkElement   {
        
        /** type of element */
        type?: string
        
        /** title of a given link element */
        title?: string
        
        /** text alongside the link title */
        snippet?: string
        
        /** description of the results element */
        description?: string
        
        /** URL */
        url?: string
        
        /** domain where a link points */
        domain?: string
        
        /** the XPath of the element */
        xpath?: string

    [key: string]: any;

    }

export class LinkElement  implements ILinkElement {
    
    /** type of element */

    type?: string;
    
    /** title of a given link element */

    title?: string;
    
    /** text alongside the link title */

    snippet?: string;
    
    /** description of the results element */

    description?: string;
    
    /** URL */

    url?: string;
    
    /** domain where a link points */

    domain?: string;
    
    /** the XPath of the element */

    xpath?: string;

    [key: string]: any;


    constructor(data?: ILinkElement) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.title = data["title"];
            this.snippet = data["snippet"];
            this.description = data["description"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): LinkElement {
        data = typeof data === 'object' ? data : {};


        let result = new LinkElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["snippet"] = this.snippet;
        data["description"] = this.description;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["xpath"] = this.xpath;
        return data;
    }
}