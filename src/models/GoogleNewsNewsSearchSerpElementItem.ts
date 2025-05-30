import { BaseGoogleNewsSerpElementItem, IBaseGoogleNewsSerpElementItem } from "./BaseGoogleNewsSerpElementItem";
import { Rectangle, IRectangle } from "./Rectangle";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleNewsNewsSearchSerpElementItem  extends IBaseGoogleNewsSerpElementItem    {
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** snippet of the result in SERP */
        snippet?: string | undefined
        
        /** indicates the time the result was published */
        time_published?: string | undefined
        
        /** date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class GoogleNewsNewsSearchSerpElementItem  extends BaseGoogleNewsSerpElementItem   implements IGoogleNewsNewsSearchSerpElementItem {
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** search URL with refinement parameters */

    url?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** snippet of the result in SERP */

    snippet?: string | undefined;
    
    /** indicates the time the result was published */

    time_published?: string | undefined;
    
    /** date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleNewsNewsSearchSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.domain = data["domain"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.snippet = data["snippet"];
            this.time_published = data["time_published"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): GoogleNewsNewsSearchSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleNewsNewsSearchSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["snippet"] = this.snippet;
        data["time_published"] = this.time_published;
        data["timestamp"] = this.timestamp;
        return data;
    }
}