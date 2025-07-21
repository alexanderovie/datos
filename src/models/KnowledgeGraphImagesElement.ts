export interface IKnowledgeGraphImagesElement   {
        
        /** type of element */
        type?: string
        
        /** relevant URL in SERP */
        url?: string
        
        /** domain in SERP of the ad element */
        domain?: string
        
        /** alt tag of the image */
        alt?: string
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string
        
        /** the XPath of the element */
        xpath?: string

    [key: string]: any;

    }

export class KnowledgeGraphImagesElement  implements IKnowledgeGraphImagesElement {
    
    /** type of element */

    type?: string;
    
    /** relevant URL in SERP */

    url?: string;
    
    /** domain in SERP of the ad element */

    domain?: string;
    
    /** alt tag of the image */

    alt?: string;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string;
    
    /** the XPath of the element */

    xpath?: string;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphImagesElement) {

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
            this.url = data["url"];
            this.domain = data["domain"];
            this.alt = data["alt"];
            this.image_url = data["image_url"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): KnowledgeGraphImagesElement {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphImagesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["alt"] = this.alt;
        data["image_url"] = this.image_url;
        data["xpath"] = this.xpath;
        return data;
    }
}