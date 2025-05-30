import { OnPageResourceIssueInfo, IOnPageResourceIssueInfo } from "./OnPageResourceIssueInfo";
import { CacheControl, ICacheControl } from "./CacheControl";
import { LastModified, ILastModified } from "./LastModified";
import { ApiException, throwException } from "./ApiException"

export interface IBaseOnPageResourceItemInfo   {
        
        /** type of the returned resource */
        resource_type?: string | undefined
        
        /** status code of the page */
        status_code?: number | undefined
        
        /** location header
indicates the URL to redirect a page to */
        location?: string | undefined
        
        /** page URL */
        url?: string | undefined
        
        /** resource errors and warnings */
        resource_errors?: OnPageResourceIssueInfo | undefined
        
        /** resource size
indicates the size of a given page measured in bytes */
        size?: number | undefined
        
        /** page size after encoding
indicates the size of the encoded page measured in bytes */
        encoded_size?: number | undefined
        
        /** compressed page size
indicates the compressed size of a given page */
        total_transfer_size?: number | undefined
        
        /** date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        fetch_time?: string | undefined
        
        /** instructions for caching */
        cache_control?: CacheControl | undefined
        
        /** website checks
on-page check-ups related to the page */
        checks?: { [key: string]: boolean; } | undefined
        
        /** type of encoding */
        content_encoding?: string | undefined
        
        /** types of media used to display a page */
        media_type?: string | undefined
        
        /** server version */
        server?: string | undefined
        
        /** contains data on changes related to the resource
if there is no data, the value will be null */
        last_modified?: LastModified | undefined

    [key: string]: any;

    }

export class BaseOnPageResourceItemInfo  implements IBaseOnPageResourceItemInfo {
    
    /** type of the returned resource */

    resource_type?: string | undefined;
    
    /** status code of the page */

    status_code?: number | undefined;
    
    /** location header
indicates the URL to redirect a page to */

    location?: string | undefined;
    
    /** page URL */

    url?: string | undefined;
    
    /** resource errors and warnings */

    resource_errors?: OnPageResourceIssueInfo | undefined;
    
    /** resource size
indicates the size of a given page measured in bytes */

    size?: number | undefined;
    
    /** page size after encoding
indicates the size of the encoded page measured in bytes */

    encoded_size?: number | undefined;
    
    /** compressed page size
indicates the compressed size of a given page */

    total_transfer_size?: number | undefined;
    
    /** date and time when a resource was fetched
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    fetch_time?: string | undefined;
    
    /** instructions for caching */

    cache_control?: CacheControl | undefined;
    
    /** website checks
on-page check-ups related to the page */

    checks?: { [key: string]: boolean; } | undefined;
    
    /** type of encoding */

    content_encoding?: string | undefined;
    
    /** types of media used to display a page */

    media_type?: string | undefined;
    
    /** server version */

    server?: string | undefined;
    
    /** contains data on changes related to the resource
if there is no data, the value will be null */

    last_modified?: LastModified | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseOnPageResourceItemInfo) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.resource_type = data["resource_type"];
            this.status_code = data["status_code"];
            this.location = data["location"];
            this.url = data["url"];
            this.resource_errors = data["resource_errors"] ? OnPageResourceIssueInfo.fromJS(data["resource_errors"]) : <any>undefined;
            this.size = data["size"];
            this.encoded_size = data["encoded_size"];
            this.total_transfer_size = data["total_transfer_size"];
            this.fetch_time = data["fetch_time"];
            this.cache_control = data["cache_control"] ? CacheControl.fromJS(data["cache_control"]) : <any>undefined;
            this.checks = data["checks"];
            this.content_encoding = data["content_encoding"];
            this.media_type = data["media_type"];
            this.server = data["server"];
            this.last_modified = data["last_modified"] ? LastModified.fromJS(data["last_modified"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseOnPageResourceItemInfo {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "html") {

            const { HtmlResourceElementItem } = require('./HtmlResourceElementItem');
            let result = new HtmlResourceElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "broken") {

            const { BrokenResourceElementItem } = require('./BrokenResourceElementItem');
            let result = new BrokenResourceElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "redirect") {

            const { RedirectResourceElementItem } = require('./RedirectResourceElementItem');
            let result = new RedirectResourceElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "script") {

            const { ScriptResourceElementItem } = require('./ScriptResourceElementItem');
            let result = new ScriptResourceElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "image") {

            const { ImageResourceElementItem } = require('./ImageResourceElementItem');
            let result = new ImageResourceElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "stylesheet") {

            const { StylesheetResourceElementItem } = require('./StylesheetResourceElementItem');
            let result = new StylesheetResourceElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseOnPageResourceItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["resource_type"] = this.resource_type;
        data["status_code"] = this.status_code;
        data["location"] = this.location;
        data["url"] = this.url;
        data["resource_errors"] = this.resource_errors ? OnPageResourceIssueInfo.fromJS(this.resource_errors)?.toJSON() : <any>undefined;
        data["size"] = this.size;
        data["encoded_size"] = this.encoded_size;
        data["total_transfer_size"] = this.total_transfer_size;
        data["fetch_time"] = this.fetch_time;
        data["cache_control"] = this.cache_control ? CacheControl.fromJS(this.cache_control)?.toJSON() : <any>undefined;
        data["checks"] = this.checks;
        data["content_encoding"] = this.content_encoding;
        data["media_type"] = this.media_type;
        data["server"] = this.server;
        data["last_modified"] = this.last_modified ? LastModified.fromJS(this.last_modified)?.toJSON() : <any>undefined;
        return data;
    }
}