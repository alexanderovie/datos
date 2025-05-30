import { LinkElement, ILinkElement } from "./LinkElement";
import { BaseBusinessDataSerpElementItem, IBaseBusinessDataSerpElementItem } from "./BaseBusinessDataSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleBusinessPostBusinessDataSerpElementItem  extends IBaseBusinessDataSerpElementItem    {
        
        /** the alignment of the element in SERP
can take the following values: right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** author of the post */
        author?: string | undefined
        
        /** additional content of a post */
        snippet?: string | undefined
        
        /** main content of a post */
        post_text?: string | undefined
        
        /** url of a post */
        url?: string | undefined
        
        /** url of an image included in the post */
        images_url?: string | undefined
        
        /** date when a post was published
in the following format:
'mm/dd/yyyy hh:mm:ss' */
        post_date?: string | undefined
        
        /** time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** links included in the post */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class GoogleBusinessPostBusinessDataSerpElementItem  extends BaseBusinessDataSerpElementItem   implements IGoogleBusinessPostBusinessDataSerpElementItem {
    
    /** the alignment of the element in SERP
can take the following values: right */

    position?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;
    
    /** author of the post */

    author?: string | undefined;
    
    /** additional content of a post */

    snippet?: string | undefined;
    
    /** main content of a post */

    post_text?: string | undefined;
    
    /** url of a post */

    url?: string | undefined;
    
    /** url of an image included in the post */

    images_url?: string | undefined;
    
    /** date when a post was published
in the following format:
'mm/dd/yyyy hh:mm:ss' */

    post_date?: string | undefined;
    
    /** time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** links included in the post */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleBusinessPostBusinessDataSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.author = data["author"];
            this.snippet = data["snippet"];
            this.post_text = data["post_text"];
            this.url = data["url"];
            this.images_url = data["images_url"];
            this.post_date = data["post_date"];
            this.timestamp = data["timestamp"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleBusinessPostBusinessDataSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleBusinessPostBusinessDataSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["author"] = this.author;
        data["snippet"] = this.snippet;
        data["post_text"] = this.post_text;
        data["url"] = this.url;
        data["images_url"] = this.images_url;
        data["post_date"] = this.post_date;
        data["timestamp"] = this.timestamp;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}