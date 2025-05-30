import { ApiException, throwException } from "./ApiException"

export interface ISerpYoutubeVideoSubtitlesTasksFixedResultInfo   {
        
        /** task identifier of the completed task
unique task identifier in our system in the UUID format */
        id?: string | undefined
        
        /** search engine specified when setting the task */
        se?: string | undefined
        
        /** type of search engine
can take the following values: video_subtitles */
        se_type?: string | undefined
        
        /** date when the task was fixed (in the UTC format) */
        date_fixed?: string | undefined
        
        /** user-defined task identifier */
        tag?: string | undefined
        
        /** URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null */
        endpoint_regular?: string | undefined
        
        /** URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null */
        endpoint_advanced?: string | undefined
        
        /** URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null */
        endpoint_html?: string | undefined

    [key: string]: any;

    }

export class SerpYoutubeVideoSubtitlesTasksFixedResultInfo  implements ISerpYoutubeVideoSubtitlesTasksFixedResultInfo {
    
    /** task identifier of the completed task
unique task identifier in our system in the UUID format */

    id?: string | undefined;
    
    /** search engine specified when setting the task */

    se?: string | undefined;
    
    /** type of search engine
can take the following values: video_subtitles */

    se_type?: string | undefined;
    
    /** date when the task was fixed (in the UTC format) */

    date_fixed?: string | undefined;
    
    /** user-defined task identifier */

    tag?: string | undefined;
    
    /** URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null */

    endpoint_regular?: string | undefined;
    
    /** URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null */

    endpoint_advanced?: string | undefined;
    
    /** URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null */

    endpoint_html?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoSubtitlesTasksFixedResultInfo) {

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
            this.id = data["id"];
            this.se = data["se"];
            this.se_type = data["se_type"];
            this.date_fixed = data["date_fixed"];
            this.tag = data["tag"];
            this.endpoint_regular = data["endpoint_regular"];
            this.endpoint_advanced = data["endpoint_advanced"];
            this.endpoint_html = data["endpoint_html"];
        }
    }

    static fromJS(data: any): SerpYoutubeVideoSubtitlesTasksFixedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoSubtitlesTasksFixedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["se"] = this.se;
        data["se_type"] = this.se_type;
        data["date_fixed"] = this.date_fixed;
        data["tag"] = this.tag;
        data["endpoint_regular"] = this.endpoint_regular;
        data["endpoint_advanced"] = this.endpoint_advanced;
        data["endpoint_html"] = this.endpoint_html;
        return data;
    }
}