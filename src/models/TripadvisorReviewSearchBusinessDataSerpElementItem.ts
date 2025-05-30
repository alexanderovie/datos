import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ImageUrlInfo, IImageUrlInfo } from "./ImageUrlInfo";
import { BusinessDataUserProfileInfo, IBusinessDataUserProfileInfo } from "./BusinessDataUserProfileInfo";
import { ReviewResponseItemInfo, IReviewResponseItemInfo } from "./ReviewResponseItemInfo";
import { BaseBusinessDataSerpElementItem, IBaseBusinessDataSerpElementItem } from "./BaseBusinessDataSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ITripadvisorReviewSearchBusinessDataSerpElementItem  extends IBaseBusinessDataSerpElementItem    {
        
        /** the alignment of the review in SERP
can take the following values: right */
        position?: string | undefined
        
        /** URL of the review */
        url?: string | undefined
        
        /** the rating score submitted by the reviewer */
        rating?: BusinessDataRatingInfo | undefined
        
        /** date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        date_of_visit?: string | undefined
        
        /** date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** title of the review */
        title?: string | undefined
        
        /** content of the review */
        review_text?: string | undefined
        
        /** contains URLs of the images used in the review */
        review_images?: ImageUrlInfo[] | undefined
        
        /** information from the reviewer’s profile */
        user_profile?: BusinessDataUserProfileInfo | undefined
        
        /** contains information about the owner’s response */
        responses?: ReviewResponseItemInfo[] | undefined
        
        /** review highlights
contains highlighted review criteria and assessments */
        review_highlights?: any | undefined

    [key: string]: any;

    }

export class TripadvisorReviewSearchBusinessDataSerpElementItem  extends BaseBusinessDataSerpElementItem   implements ITripadvisorReviewSearchBusinessDataSerpElementItem {
    
    /** the alignment of the review in SERP
can take the following values: right */

    position?: string | undefined;
    
    /** URL of the review */

    url?: string | undefined;
    
    /** the rating score submitted by the reviewer */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** date of the reviewer’s visit to the local establishment
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    date_of_visit?: string | undefined;
    
    /** date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** title of the review */

    title?: string | undefined;
    
    /** content of the review */

    review_text?: string | undefined;
    
    /** contains URLs of the images used in the review */

    review_images?: ImageUrlInfo[] | undefined;
    
    /** information from the reviewer’s profile */

    user_profile?: BusinessDataUserProfileInfo | undefined;
    
    /** contains information about the owner’s response */

    responses?: ReviewResponseItemInfo[] | undefined;
    
    /** review highlights
contains highlighted review criteria and assessments */

    review_highlights?: any | undefined;

    [key: string]: any;


    constructor(data?: ITripadvisorReviewSearchBusinessDataSerpElementItem) {
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
            this.date_of_visit = data["date_of_visit"];
            this.timestamp = data["timestamp"];
            this.title = data["title"];
            this.review_text = data["review_text"];
            if (Array.isArray(data["review_images"])) {
                this.review_images = [];
                for (let item of data["review_images"]) {
                    this.review_images.push(ImageUrlInfo.fromJS(item));
                }
            }
            this.user_profile = data["user_profile"] ? BusinessDataUserProfileInfo.fromJS(data["user_profile"]) : <any>undefined;
            if (Array.isArray(data["responses"])) {
                this.responses = [];
                for (let item of data["responses"]) {
                    this.responses.push(ReviewResponseItemInfo.fromJS(item));
                }
            }
            this.review_highlights = data["review_highlights"];
        }
    }

    static fromJS(data: any): TripadvisorReviewSearchBusinessDataSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new TripadvisorReviewSearchBusinessDataSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["url"] = this.url;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["date_of_visit"] = this.date_of_visit;
        data["timestamp"] = this.timestamp;
        data["title"] = this.title;
        data["review_text"] = this.review_text;
        data["review_images"] = null;
        if (Array.isArray(this.review_images)) {
            data["review_images"] = [];
            for (let item of this.review_images) {
                if (item && typeof item.toJSON === "function") {
                    data["review_images"].push(item?.toJSON());
                }
            }
        }
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
        data["review_highlights"] = this.review_highlights;
        return data;
    }
}