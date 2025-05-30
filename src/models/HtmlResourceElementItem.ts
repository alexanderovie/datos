import { PageMetaInfo, IPageMetaInfo } from "./PageMetaInfo";
import { PageTiming, IPageTiming } from "./PageTiming";
import { BaseOnPageResourceItemInfo, IBaseOnPageResourceItemInfo } from "./BaseOnPageResourceItemInfo";
import { OnPageResourceIssueInfo, IOnPageResourceIssueInfo } from "./OnPageResourceIssueInfo";
import { CacheControl, ICacheControl } from "./CacheControl";
import { LastModified, ILastModified } from "./LastModified";
import { ApiException, throwException } from "./ApiException"

export interface IHtmlResourceElementItem  extends IBaseOnPageResourceItemInfo    {
        
        /** page properties
the value depends on the resource_type */
        meta?: PageMetaInfo | undefined
        
        /** object of page load metrics */
        page_timing?: PageTiming | undefined
        
        /** shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article */
        onpage_score?: number | undefined
        
        /** total DOM size of a page */
        total_dom_size?: number | undefined
        
        /** the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;
you can also filter the results by this value specifying filters in the following way:
['custom_js_response.url', 'like', 'pixel'] */
        custom_js_response?: any | undefined
        
        /** error when executing a custom js
if the error occurred when executing the script you specified in the custom_js field, the error message would be displayed here */
        custom_js_client_exception?: string | undefined
        
        /** indicates whether a page contains broken resources */
        broken_resources?: boolean | undefined
        
        /** indicates whether a page contains broken links */
        broken_links?: boolean | undefined
        
        /** indicates whether a page has duplicate title tags */
        duplicate_title?: boolean | undefined
        
        /** indicates whether a page has a duplicate description */
        duplicate_description?: boolean | undefined
        
        /** indicates whether a page has duplicate content */
        duplicate_content?: boolean | undefined
        
        /** number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page */
        click_depth?: number | undefined
        
        /** indicates whether a page is a single resource */
        is_resource?: boolean | undefined
        
        /** page URL length in characters */
        url_length?: number | undefined
        
        /** relative URL length in characters */
        relative_url_length?: number | undefined

    [key: string]: any;

    }

export class HtmlResourceElementItem  extends BaseOnPageResourceItemInfo   implements IHtmlResourceElementItem {
    
    /** page properties
the value depends on the resource_type */

    meta?: PageMetaInfo | undefined;
    
    /** object of page load metrics */

    page_timing?: PageTiming | undefined;
    
    /** shows how page is optimized on a 100-point scale
this field shows how page is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means the page does not have any critical on-page issues and important warnings;
learn more about how the metric is calculated in this help center article */

    onpage_score?: number | undefined;
    
    /** total DOM size of a page */

    total_dom_size?: number | undefined;
    
    /** the result of executing a specified JS script
note that you should specify a custom_js field when setting a task to receive this data and the field type and its value will totally depend on the script you specified;
you can also filter the results by this value specifying filters in the following way:
['custom_js_response.url', 'like', 'pixel'] */

    custom_js_response?: any | undefined;
    
    /** error when executing a custom js
if the error occurred when executing the script you specified in the custom_js field, the error message would be displayed here */

    custom_js_client_exception?: string | undefined;
    
    /** indicates whether a page contains broken resources */

    broken_resources?: boolean | undefined;
    
    /** indicates whether a page contains broken links */

    broken_links?: boolean | undefined;
    
    /** indicates whether a page has duplicate title tags */

    duplicate_title?: boolean | undefined;
    
    /** indicates whether a page has a duplicate description */

    duplicate_description?: boolean | undefined;
    
    /** indicates whether a page has duplicate content */

    duplicate_content?: boolean | undefined;
    
    /** number of clicks it takes to get to the page
indicates the number of clicks from the homepage needed before landing at the target page */

    click_depth?: number | undefined;
    
    /** indicates whether a page is a single resource */

    is_resource?: boolean | undefined;
    
    /** page URL length in characters */

    url_length?: number | undefined;
    
    /** relative URL length in characters */

    relative_url_length?: number | undefined;

    [key: string]: any;


    constructor(data?: IHtmlResourceElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.meta = data["meta"] ? PageMetaInfo.fromJS(data["meta"]) : <any>undefined;
            this.page_timing = data["page_timing"] ? PageTiming.fromJS(data["page_timing"]) : <any>undefined;
            this.onpage_score = data["onpage_score"];
            this.total_dom_size = data["total_dom_size"];
            this.custom_js_response = data["custom_js_response"];
            this.custom_js_client_exception = data["custom_js_client_exception"];
            this.broken_resources = data["broken_resources"];
            this.broken_links = data["broken_links"];
            this.duplicate_title = data["duplicate_title"];
            this.duplicate_description = data["duplicate_description"];
            this.duplicate_content = data["duplicate_content"];
            this.click_depth = data["click_depth"];
            this.is_resource = data["is_resource"];
            this.url_length = data["url_length"];
            this.relative_url_length = data["relative_url_length"];
        }
    }

    static fromJS(data: any): HtmlResourceElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new HtmlResourceElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["meta"] = this.meta ? PageMetaInfo.fromJS(this.meta)?.toJSON() : <any>undefined;
        data["page_timing"] = this.page_timing ? PageTiming.fromJS(this.page_timing)?.toJSON() : <any>undefined;
        data["onpage_score"] = this.onpage_score;
        data["total_dom_size"] = this.total_dom_size;
        data["custom_js_response"] = this.custom_js_response;
        data["custom_js_client_exception"] = this.custom_js_client_exception;
        data["broken_resources"] = this.broken_resources;
        data["broken_links"] = this.broken_links;
        data["duplicate_title"] = this.duplicate_title;
        data["duplicate_description"] = this.duplicate_description;
        data["duplicate_content"] = this.duplicate_content;
        data["click_depth"] = this.click_depth;
        data["is_resource"] = this.is_resource;
        data["url_length"] = this.url_length;
        data["relative_url_length"] = this.relative_url_length;
        return data;
    }
}