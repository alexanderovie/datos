import { FetchTiming, IFetchTiming } from "./FetchTiming";
import { PageMetaInfo, IPageMetaInfo } from "./PageMetaInfo";
import { BaseOnPageResourceItemInfo, IBaseOnPageResourceItemInfo } from "./BaseOnPageResourceItemInfo";
import { OnPageResourceIssueInfo, IOnPageResourceIssueInfo } from "./OnPageResourceIssueInfo";
import { CacheControl, ICacheControl } from "./CacheControl";
import { LastModified, ILastModified } from "./LastModified";
import { ApiException, throwException } from "./ApiException"

export interface IBrokenResourceElementItem  extends IBaseOnPageResourceItemInfo    {
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates whether a page is a single resource */
        is_resource?: boolean | undefined
        
        /** resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task */
        meta?: PageMetaInfo | undefined
        
        /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */
        accept_type?: string | undefined

    [key: string]: any;

    }

export class BrokenResourceElementItem  extends BaseOnPageResourceItemInfo   implements IBrokenResourceElementItem {
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates whether a page is a single resource */

    is_resource?: boolean | undefined;
    
    /** resource properties
the value depends on the resource_type
note that if you do not indicate a url when setting a task, resource’s meta is returned based on the data from the page where our crawler first saw the resource;
to obtain resource’s meta from a particular url, specify that URL when setting a task */

    meta?: PageMetaInfo | undefined;
    
    /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */

    accept_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IBrokenResourceElementItem) {
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
            this.meta = data["meta"] ? PageMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.accept_type = data["accept_type"];
        }
    }

    static fromJS(data: any): BrokenResourceElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new BrokenResourceElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["is_resource"] = this.is_resource;
        data["meta"] = this.meta ? PageMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["accept_type"] = this.accept_type;
        return data;
    }
}