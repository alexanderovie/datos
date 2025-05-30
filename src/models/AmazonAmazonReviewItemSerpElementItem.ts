import { ImagesElement, IImagesElement } from "./ImagesElement";
import { VideoElement, IVideoElement } from "./VideoElement";
import { UserProfileInfo, IUserProfileInfo } from "./UserProfileInfo";
import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { BaseAmazonSerpElementItem, IBaseAmazonSerpElementItem } from "./BaseAmazonSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAmazonAmazonReviewItemSerpElementItem  extends IBaseAmazonSerpElementItem    {
        
        /** indicates whether the review has the “Verified Purchase” mark */
        verified?: boolean | undefined
        
        /** subtitle of the review */
        subtitle?: string | undefined
        
        /** helpful votes count
number of users who clicked on the ‘Helpful” button under the review text */
        helpful_votes?: string | undefined
        
        /** images of the product submitted by the reviewer */
        images?: ImagesElement[] | undefined
        
        /** videos of the product submitted by the reviewer */
        videos?: VideoElement[] | undefined
        
        /** user profile of the reviewer */
        user_profile?: UserProfileInfo | undefined
        
        /** title of the review */
        title?: string | undefined
        
        /** URL to the reviewer’s profile */
        url?: string | undefined
        
        /** content of the review */
        review_text?: string | undefined
        
        /** date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        publication_date?: string | undefined
        
        /** the rating score submitted by the reviewer */
        rating?: BusinessDataRatingInfo | undefined

    [key: string]: any;

    }

export class AmazonAmazonReviewItemSerpElementItem  extends BaseAmazonSerpElementItem   implements IAmazonAmazonReviewItemSerpElementItem {
    
    /** indicates whether the review has the “Verified Purchase” mark */

    verified?: boolean | undefined;
    
    /** subtitle of the review */

    subtitle?: string | undefined;
    
    /** helpful votes count
number of users who clicked on the ‘Helpful” button under the review text */

    helpful_votes?: string | undefined;
    
    /** images of the product submitted by the reviewer */

    images?: ImagesElement[] | undefined;
    
    /** videos of the product submitted by the reviewer */

    videos?: VideoElement[] | undefined;
    
    /** user profile of the reviewer */

    user_profile?: UserProfileInfo | undefined;
    
    /** title of the review */

    title?: string | undefined;
    
    /** URL to the reviewer’s profile */

    url?: string | undefined;
    
    /** content of the review */

    review_text?: string | undefined;
    
    /** date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    publication_date?: string | undefined;
    
    /** the rating score submitted by the reviewer */

    rating?: BusinessDataRatingInfo | undefined;

    [key: string]: any;


    constructor(data?: IAmazonAmazonReviewItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.verified = data["verified"];
            this.subtitle = data["subtitle"];
            this.helpful_votes = data["helpful_votes"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(ImagesElement.fromJS(item));
                }
            }
            if (Array.isArray(data["videos"])) {
                this.videos = [];
                for (let item of data["videos"]) {
                    this.videos.push(VideoElement.fromJS(item));
                }
            }
            this.user_profile = data["user_profile"] ? UserProfileInfo.fromJS(data["user_profile"]) : <any>undefined;
            this.title = data["title"];
            this.url = data["url"];
            this.review_text = data["review_text"];
            this.publication_date = data["publication_date"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AmazonAmazonReviewItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonAmazonReviewItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["verified"] = this.verified;
        data["subtitle"] = this.subtitle;
        data["helpful_votes"] = this.helpful_votes;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["videos"] = null;
        if (Array.isArray(this.videos)) {
            data["videos"] = [];
            for (let item of this.videos) {
                if (item && typeof item.toJSON === "function") {
                    data["videos"].push(item?.toJSON());
                }
            }
        }
        data["user_profile"] = this.user_profile ? UserProfileInfo.fromJS(this.user_profile)?.toJSON() : <any>undefined;
        data["title"] = this.title;
        data["url"] = this.url;
        data["review_text"] = this.review_text;
        data["publication_date"] = this.publication_date;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}