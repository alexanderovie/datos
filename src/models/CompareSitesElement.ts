export interface ICompareSitesElement   {
        
        /** type of element */
        type?: string
        
        /** title of a given link element */
        title?: string
        
        /** URL */
        url?: string
        
        /** website domain */
        domain?: string
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string

    [key: string]: any;

    }

export class CompareSitesElement  implements ICompareSitesElement {
    
    /** type of element */

    type?: string;
    
    /** title of a given link element */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** website domain */

    domain?: string;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string;

    [key: string]: any;


    constructor(data?: ICompareSitesElement) {

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
            this.image_url = data["image_url"];
            this.source = data["source"];
        }
    }

    static fromJS(data: any): CompareSitesElement {
        data = typeof data === 'object' ? data : {};


        let result = new CompareSitesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["image_url"] = this.image_url;
        data["source"] = this.source;
        return data;
    }
}