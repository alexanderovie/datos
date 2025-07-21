export interface IDiscussionsAndForumsElement   {
        
        /** type of element */
        type?: string
        
        /** title of a given link element */
        title?: string
        
        /** URL */
        url?: string
        
        /** website domain */
        domain?: string
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string
        
        /** description */
        description?: string
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string
        
        /** number of posts from the discussion on the related source */
        posts_count?: number

    [key: string]: any;

    }

export class DiscussionsAndForumsElement  implements IDiscussionsAndForumsElement {
    
    /** type of element */

    type?: string;
    
    /** title of a given link element */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** website domain */

    domain?: string;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string;
    
    /** description */

    description?: string;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string;
    
    /** number of posts from the discussion on the related source */

    posts_count?: number;

    [key: string]: any;


    constructor(data?: IDiscussionsAndForumsElement) {

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
            this.title = data["title"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.source = data["source"];
            this.description = data["description"];
            this.timestamp = data["timestamp"];
            this.posts_count = data["posts_count"];
        }
    }

    static fromJS(data: any): DiscussionsAndForumsElement {
        data = typeof data === 'object' ? data : {};


        let result = new DiscussionsAndForumsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["source"] = this.source;
        data["description"] = this.description;
        data["timestamp"] = this.timestamp;
        data["posts_count"] = this.posts_count;
        return data;
    }
}