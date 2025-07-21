export interface IAiAiOverviewReferenceInfo   {
        
        /** type of element */
        type?: string
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string
        
        /** reference source name or title */
        source?: string
        
        /** domain in SERP */
        domain?: string
        
        /** image source URL */
        url?: string
        
        /** title of the element */
        title?: string
        
        /** text of the component */
        text?: string

    [key: string]: any;

    }

export class AiAiOverviewReferenceInfo  implements IAiAiOverviewReferenceInfo {
    
    /** type of element */

    type?: string;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string;
    
    /** reference source name or title */

    source?: string;
    
    /** domain in SERP */

    domain?: string;
    
    /** image source URL */

    url?: string;
    
    /** title of the element */

    title?: string;
    
    /** text of the component */

    text?: string;

    [key: string]: any;


    constructor(data?: IAiAiOverviewReferenceInfo) {

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
            this.position = data["position"];
            this.source = data["source"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.title = data["title"];
            this.text = data["text"];
        }
    }

    static fromJS(data: any): AiAiOverviewReferenceInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiAiOverviewReferenceInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["source"] = this.source;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["title"] = this.title;
        data["text"] = this.text;
        return data;
    }
}