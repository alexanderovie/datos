import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { BusinessDataUserProfileInfo, IBusinessDataUserProfileInfo } from "./BusinessDataUserProfileInfo";
import { ReviewResponseItemInfo, IReviewResponseItemInfo } from "./ReviewResponseItemInfo";
import { BaseBusinessDataSerpElementItem, IBaseBusinessDataSerpElementItem } from "./BaseBusinessDataSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ITrustpilotReviewSearchBusinessDataSerpElementItem  extends IBaseBusinessDataSerpElementItem    {
        
        /** the alignment of the review in SERP
can take the following values: right */
        position?: string | undefined
        
        /** the URL of the review */
        url?: string | undefined
        
        /** the rating score submitted by the reviewer */
        rating?: BusinessDataRatingInfo | undefined
        
        /** indicates whether the review has the “Verified” mark */
        verified?: boolean | undefined
        
        /** the language of the review */
        language?: string | undefined
        
        /** date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** the title of the review */
        title?: string | undefined
        
        /** the content of the review */
        review_text?: string | undefined
        
        /** images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null */
        review_images?: string[] | undefined
        
        /** user profile of the reviewer */
        user_profile?: BusinessDataUserProfileInfo | undefined
        
        /** owner’s response to the submitted review */
        responses?: ReviewResponseItemInfo[] | undefined

    [key: string]: any;

    }

export class TrustpilotReviewSearchBusinessDataSerpElementItem  extends BaseBusinessDataSerpElementItem   implements ITrustpilotReviewSearchBusinessDataSerpElementItem {
    
    /** the alignment of the review in SERP
can take the following values: right */

    position?: string | undefined;
    
    /** the URL of the review */

    url?: string | undefined;
    
    /** the rating score submitted by the reviewer */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** indicates whether the review has the “Verified” mark */

    verified?: boolean | undefined;
    
    /** the language of the review */

    language?: string | undefined;
    
    /** date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** the title of the review */

    title?: string | undefined;
    
    /** the content of the review */

    review_text?: string | undefined;
    
    /** images submitted by the reviewer
displays URLs to the images provided by the author of the review;
please note that Trustpilot doesn’t allow adding images to reviews, so the review_images parameter will always equal null */

    review_images?: string[] | undefined;
    
    /** user profile of the reviewer */

    user_profile?: BusinessDataUserProfileInfo | undefined;
    
    /** owner’s response to the submitted review */

    responses?: ReviewResponseItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ITrustpilotReviewSearchBusinessDataSerpElementItem) {
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
            this.url = data["url"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.verified = data["verified"];
            this.language = data["language"];
            this.timestamp = data["timestamp"];
            this.title = data["title"];
            this.review_text = data["review_text"];
            this.review_images = data["review_images"];
            this.user_profile = data["user_profile"] ? BusinessDataUserProfileInfo.fromJS(data["user_profile"]) : <any>undefined;
            if (Array.isArray(data["responses"])) {
                this.responses = [];
                for (let item of data["responses"]) {
                    this.responses.push(ReviewResponseItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TrustpilotReviewSearchBusinessDataSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new TrustpilotReviewSearchBusinessDataSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["url"] = this.url;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["verified"] = this.verified;
        data["language"] = this.language;
        data["timestamp"] = this.timestamp;
        data["title"] = this.title;
        data["review_text"] = this.review_text;
        data["review_images"] = this.review_images;
        data["user_profile"] = this.user_profile ? BusinessDataUserProfileInfo.fromJS(this.user_profile)?.toJSON() : <any>undefined;
        data["responses"] = null;
        if (Array.isArray(this.responses)) {
            data["responses"] = [];
            for (let item of this.responses) {
                if (item && typeof item.toJSON === "function") {
                    data["responses"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}