import { BaseYoutubeSerpElementItem, IBaseYoutubeSerpElementItem } from "./BaseYoutubeSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IYoutubeCommentSerpElementItem  extends IBaseYoutubeSerpElementItem    {
        
        /** name of the author of the comment */
        author_name?: string | undefined
        
        /** the URL of the page where the author’s channel logo is hosted */
        author_thumbnail?: string | undefined
        
        /** URL of the author’s channel */
        author_url?: string | undefined
        
        /** text of the comment */
        text?: string | undefined
        
        /** displayed publication date */
        publication_date?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** number of likes on the comment */
        likes_count?: number | undefined
        
        /** number of replies on the comment */
        reply_count?: number | undefined

    [key: string]: any;

    }

export class YoutubeCommentSerpElementItem  extends BaseYoutubeSerpElementItem   implements IYoutubeCommentSerpElementItem {
    
    /** name of the author of the comment */

    author_name?: string | undefined;
    
    /** the URL of the page where the author’s channel logo is hosted */

    author_thumbnail?: string | undefined;
    
    /** URL of the author’s channel */

    author_url?: string | undefined;
    
    /** text of the comment */

    text?: string | undefined;
    
    /** displayed publication date */

    publication_date?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** number of likes on the comment */

    likes_count?: number | undefined;
    
    /** number of replies on the comment */

    reply_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IYoutubeCommentSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.author_name = data["author_name"];
            this.author_thumbnail = data["author_thumbnail"];
            this.author_url = data["author_url"];
            this.text = data["text"];
            this.publication_date = data["publication_date"];
            this.timestamp = data["timestamp"];
            this.likes_count = data["likes_count"];
            this.reply_count = data["reply_count"];
        }
    }

    static fromJS(data: any): YoutubeCommentSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new YoutubeCommentSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["author_name"] = this.author_name;
        data["author_thumbnail"] = this.author_thumbnail;
        data["author_url"] = this.author_url;
        data["text"] = this.text;
        data["publication_date"] = this.publication_date;
        data["timestamp"] = this.timestamp;
        data["likes_count"] = this.likes_count;
        data["reply_count"] = this.reply_count;
        return data;
    }
}