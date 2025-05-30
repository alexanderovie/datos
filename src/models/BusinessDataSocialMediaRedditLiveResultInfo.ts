import { RedditReviews, IRedditReviews } from "./RedditReviews";
import { ApiException, throwException } from "./ApiException"

export interface IBusinessDataSocialMediaRedditLiveResultInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task */
        page_url?: string | undefined
        
        /** reddit reviews for the page_url */
        reddit_reviews?: RedditReviews[] | undefined

    [key: string]: any;

    }

export class BusinessDataSocialMediaRedditLiveResultInfo  implements IBusinessDataSocialMediaRedditLiveResultInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** URL of the page the data is provided for
corresponding URL you specified in the targets array when setting a task */

    page_url?: string | undefined;
    
    /** reddit reviews for the page_url */

    reddit_reviews?: RedditReviews[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataSocialMediaRedditLiveResultInfo) {

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
            this.page_url = data["page_url"];
            if (Array.isArray(data["reddit_reviews"])) {
                this.reddit_reviews = [];
                for (let item of data["reddit_reviews"]) {
                    this.reddit_reviews.push(RedditReviews.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataSocialMediaRedditLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataSocialMediaRedditLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["page_url"] = this.page_url;
        data["reddit_reviews"] = null;
        if (Array.isArray(this.reddit_reviews)) {
            data["reddit_reviews"] = [];
            for (let item of this.reddit_reviews) {
                if (item && typeof item.toJSON === "function") {
                    data["reddit_reviews"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}