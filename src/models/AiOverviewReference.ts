import { ApiException, throwException } from "./ApiException"

export interface IAiOverviewReference   {
        
        /** type of element */
        type?: string | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** website domain */
        domain?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** row content */
        text?: string | undefined

    [key: string]: any;

    }

export class AiOverviewReference  implements IAiOverviewReference {
    
    /** type of element */

    type?: string | undefined;
    
    /** reference source name or title */

    source?: string | undefined;
    
    /** website domain */

    domain?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** row content */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IAiOverviewReference) {

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
            this.source = data["source"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.title = data["title"];
            this.text = data["text"];
        }
    }

    static fromJS(data: any): AiOverviewReference {
        data = typeof data === 'object' ? data : {};


        let result = new AiOverviewReference();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["source"] = this.source;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["title"] = this.title;
        data["text"] = this.text;
        return data;
    }
}