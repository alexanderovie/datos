import { PageContentInfo, IPageContentInfo } from "./PageContentInfo";
import { ApiException, throwException } from "./ApiException"

export interface IOnPageContentParsingItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** date and time when the content was fethced
example:
'2022-11-01 10:02:52 +00:00' */
        fetch_time?: string | undefined
        
        /** status code of the page */
        status_code?: number | undefined
        
        /** parsed content of the page */
        page_content?: PageContentInfo | undefined

    [key: string]: any;

    }

export class OnPageContentParsingItem  implements IOnPageContentParsingItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** date and time when the content was fethced
example:
'2022-11-01 10:02:52 +00:00' */

    fetch_time?: string | undefined;
    
    /** status code of the page */

    status_code?: number | undefined;
    
    /** parsed content of the page */

    page_content?: PageContentInfo | undefined;

    [key: string]: any;


    constructor(data?: IOnPageContentParsingItem) {

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
            this.fetch_time = data["fetch_time"];
            this.status_code = data["status_code"];
            this.page_content = data["page_content"] ? PageContentInfo.fromJS(data["page_content"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OnPageContentParsingItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageContentParsingItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["fetch_time"] = this.fetch_time;
        data["status_code"] = this.status_code;
        data["page_content"] = this.page_content ? PageContentInfo.fromJS(this.page_content)?.toJSON() : <any>undefined;
        return data;
    }
}