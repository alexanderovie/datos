import { ApiException, throwException } from "./ApiException"

export interface IOnPageContentParsingRequestInfo   {
        
        /** URL of the content to parse
required field
URL of the page to parse
example:
https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api */
        url?: string | undefined
        
        /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
'07131248-1535-0216-1000-17384017ad04' */
        id?: string | undefined

    [key: string]: any;

    }

export class OnPageContentParsingRequestInfo  implements IOnPageContentParsingRequestInfo {
    
    /** URL of the content to parse
required field
URL of the page to parse
example:
https://dataforseo.com/blog/a-versatile-alternative-to-google-trends-exploring-the-power-of-dataforseo-trends-api */

    url?: string | undefined;
    
    /** ID of the task
required field
you can get this ID in the response of the Task POST endpoint
note: the enable_content_parsing parameter in the POST request must be set to true
example:
'07131248-1535-0216-1000-17384017ad04' */

    id?: string | undefined;

    [key: string]: any;


    constructor(data?: IOnPageContentParsingRequestInfo) {

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
            this.url = data["url"];
            this.id = data["id"];
        }
    }

    static fromJS(data: any): OnPageContentParsingRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageContentParsingRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["url"] = this.url;
        data["id"] = this.id;
        return data;
    }
}