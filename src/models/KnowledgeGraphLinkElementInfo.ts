export interface IKnowledgeGraphLinkElementInfo   {
        
        /** type of element */
        type?: string
        
        /** title of the result in SERP */
        title?: string
        
        /** relevant URL */
        url?: string
        
        /** website domain */
        domain?: string
        
        /** text alongside the link title */
        snippet?: string
        
        /** the XPath of the element */
        xpath?: string

    [key: string]: any;

    }

export class KnowledgeGraphLinkElementInfo  implements IKnowledgeGraphLinkElementInfo {
    
    /** type of element */

    type?: string;
    
    /** title of the result in SERP */

    title?: string;
    
    /** relevant URL */

    url?: string;
    
    /** website domain */

    domain?: string;
    
    /** text alongside the link title */

    snippet?: string;
    
    /** the XPath of the element */

    xpath?: string;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphLinkElementInfo) {

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
            this.url = data["url"];
            this.domain = data["domain"];
            this.snippet = data["snippet"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): KnowledgeGraphLinkElementInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphLinkElementInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["snippet"] = this.snippet;
        data["xpath"] = this.xpath;
        return data;
    }
}