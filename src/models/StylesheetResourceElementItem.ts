import { ResourceMetaInfo, IResourceMetaInfo } from "./ResourceMetaInfo";
import { FetchTiming, IFetchTiming } from "./FetchTiming";
import { BaseOnPageResourceItemInfo, IBaseOnPageResourceItemInfo } from "./BaseOnPageResourceItemInfo";
import { OnPageResourceIssueInfo, IOnPageResourceIssueInfo } from "./OnPageResourceIssueInfo";
import { CacheControl, ICacheControl } from "./CacheControl";
import { LastModified, ILastModified } from "./LastModified";
import { ApiException, throwException } from "./ApiException"

export interface IStylesheetResourceElementItem  extends IBaseOnPageResourceItemInfo    {
        
        /** page properties
the value depends on the resource_type */
        meta?: ResourceMetaInfo | undefined
        
        /** time range within which a result was fetched */
        fetch_timing?: FetchTiming | undefined
        
        /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */
        accept_type?: string | undefined

    [key: string]: any;

    }

export class StylesheetResourceElementItem  extends BaseOnPageResourceItemInfo   implements IStylesheetResourceElementItem {
    
    /** page properties
the value depends on the resource_type */

    meta?: ResourceMetaInfo | undefined;
    
    /** time range within which a result was fetched */

    fetch_timing?: FetchTiming | undefined;
    
    /** indicates the expected type of resource
for example, if 'resource_type': 'broken', accept_type will indicate the type of the broken resource
possible values:
any, none, image, sitemap, robots, script, stylesheet, redirect, html, text, other, font */

    accept_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IStylesheetResourceElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.meta = data["meta"] ? ResourceMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.fetch_timing = data["fetch_timing"] ? FetchTiming.fromJS(data["fetch_timing"]) : <any>undefined;
            this.accept_type = data["accept_type"];
        }
    }

    static fromJS(data: any): StylesheetResourceElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new StylesheetResourceElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["meta"] = this.meta ? ResourceMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["fetch_timing"] = this.fetch_timing ? FetchTiming.fromJS(this.fetch_timing)?.toJSON() : <any>undefined;
        data["accept_type"] = this.accept_type;
        return data;
    }
}