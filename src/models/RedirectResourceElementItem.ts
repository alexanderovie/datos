import { FetchTiming, IFetchTiming } from "./FetchTiming";
import { BaseOnPageResourceItemInfo, IBaseOnPageResourceItemInfo } from "./BaseOnPageResourceItemInfo";
import { OnPageResourceIssueInfo, IOnPageResourceIssueInfo } from "./OnPageResourceIssueInfo";
import { CacheControl, ICacheControl } from "./CacheControl";
import { LastModified, ILastModified } from "./LastModified";
import { ApiException, throwException } from "./ApiException"

export interface IRedirectResourceElementItem  extends IBaseOnPageResourceItemInfo    {
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates whether a page is a single resource */
        is_resource?: boolean | undefined

    [key: string]: any;

    }

export class RedirectResourceElementItem  extends BaseOnPageResourceItemInfo   implements IRedirectResourceElementItem {
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates whether a page is a single resource */

    is_resource?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IRedirectResourceElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.fetch_timing = data["fetch_timing"] ? FetchTiming.fromJS(data["fetch_timing"]) : <any>undefined;
            this.is_resource = data["is_resource"];
        }
    }

    static fromJS(data: any): RedirectResourceElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RedirectResourceElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["is_resource"] = this.is_resource;
        return data;
    }
}