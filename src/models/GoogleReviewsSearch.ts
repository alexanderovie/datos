import { RatingElement, IRatingElement } from "./RatingElement";
import { AiModeImagesElement, IAiModeImagesElement } from "./AiModeImagesElement";
import { ReviewHighlights, IReviewHighlights } from "./ReviewHighlights";

export interface IGoogleReviewsSearch   {
        
        /** type of element */
        type?: string
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank among all the listed reviews
absolute position among all reviews on the list */
        rank_absolute?: number
        
        /** the alignment of the review in SERP
can take the following values: right */
        position?: string
        
        /** the XPath of the review */
        xpath?: string
        
        /** the content of the review */
        review_text?: string
        
        /** original content of the review
the original content of the review, no auto-translate applied */
        original_review_text?: string
        
        /** the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed */
        time_ago?: string
        
        /** date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string
        
        /** the rating score submitted by the reviewer */
        rating?: RatingElement
        
        /** total number of reviews submitted by the reviewer */
        reviews_count?: number
        
        /** total number of photos submitted by the reviewer */
        photos_count?: number
        
        /** indicates whether the reviewer has a ‘local guide’ status */
        local_guide?: boolean
        
        /** profile name of the reviewer */
        profile_name?: string
        
        /** URL of the reviewer’s profile */
        profile_url?: string
        
        /** the URL of the review */
        review_url?: string
        
        /** URL of the reviewer’s profile image */
        profile_image_url?: string
        
        /** text of the owner’s response
the owner’s response to the review */
        owner_answer?: string
        
        /** original text of the owner’s response
the original response to the review, no auto-translate applied */
        original_owner_answer?: string
        
        /** publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review */
        owner_time_ago?: string
        
        /** date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        owner_timestamp?: string
        
        /** the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE */
        review_id?: string
        
        /** images submitted by the reviewer */
        images?: AiModeImagesElement[]
        
        /** review highlights
contains highlighted review criteria and assessments */
        review_highlights?: ReviewHighlights[]

    [key: string]: any;

    }

export class GoogleReviewsSearch  implements IGoogleReviewsSearch {
    
    /** type of element */

    type?: string;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank among all the listed reviews
absolute position among all reviews on the list */

    rank_absolute?: number;
    
    /** the alignment of the review in SERP
can take the following values: right */

    position?: string;
    
    /** the XPath of the review */

    xpath?: string;
    
    /** the content of the review */

    review_text?: string;
    
    /** original content of the review
the original content of the review, no auto-translate applied */

    original_review_text?: string;
    
    /** the time of publication
indicates the time (in the ‘time ago’ format) when the review was listed */

    time_ago?: string;
    
    /** date and time when a review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string;
    
    /** the rating score submitted by the reviewer */

    rating?: RatingElement;
    
    /** total number of reviews submitted by the reviewer */

    reviews_count?: number;
    
    /** total number of photos submitted by the reviewer */

    photos_count?: number;
    
    /** indicates whether the reviewer has a ‘local guide’ status */

    local_guide?: boolean;
    
    /** profile name of the reviewer */

    profile_name?: string;
    
    /** URL of the reviewer’s profile */

    profile_url?: string;
    
    /** the URL of the review */

    review_url?: string;
    
    /** URL of the reviewer’s profile image */

    profile_image_url?: string;
    
    /** text of the owner’s response
the owner’s response to the review */

    owner_answer?: string;
    
    /** original text of the owner’s response
the original response to the review, no auto-translate applied */

    original_owner_answer?: string;
    
    /** publication time
indicates the time (in the ‘time ago’ format) when the owner submitted the response to the review */

    owner_time_ago?: string;
    
    /** date and time of the owner’s reply to the review
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    owner_timestamp?: string;
    
    /** the unique identifier of a review on Google
example:
ChZDSUhNMG9nS0VJQ0FnSUMxbHFyMFlnEAE */

    review_id?: string;
    
    /** images submitted by the reviewer */

    images?: AiModeImagesElement[];
    
    /** review highlights
contains highlighted review criteria and assessments */

    review_highlights?: ReviewHighlights[];

    [key: string]: any;


    constructor(data?: IGoogleReviewsSearch) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.review_text = data["review_text"];
            this.original_review_text = data["original_review_text"];
            this.time_ago = data["time_ago"];
            this.timestamp = data["timestamp"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.reviews_count = data["reviews_count"];
            this.photos_count = data["photos_count"];
            this.local_guide = data["local_guide"];
            this.profile_name = data["profile_name"];
            this.profile_url = data["profile_url"];
            this.review_url = data["review_url"];
            this.profile_image_url = data["profile_image_url"];
            this.owner_answer = data["owner_answer"];
            this.original_owner_answer = data["original_owner_answer"];
            this.owner_time_ago = data["owner_time_ago"];
            this.owner_timestamp = data["owner_timestamp"];
            this.review_id = data["review_id"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElement.fromJS(item));
                }
            }
            if (Array.isArray(data["review_highlights"])) {
                this.review_highlights = [];
                for (let item of data["review_highlights"]) {
                    this.review_highlights.push(ReviewHighlights.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleReviewsSearch {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleReviewsSearch();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["review_text"] = this.review_text;
        data["original_review_text"] = this.original_review_text;
        data["time_ago"] = this.time_ago;
        data["timestamp"] = this.timestamp;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["reviews_count"] = this.reviews_count;
        data["photos_count"] = this.photos_count;
        data["local_guide"] = this.local_guide;
        data["profile_name"] = this.profile_name;
        data["profile_url"] = this.profile_url;
        data["review_url"] = this.review_url;
        data["profile_image_url"] = this.profile_image_url;
        data["owner_answer"] = this.owner_answer;
        data["original_owner_answer"] = this.original_owner_answer;
        data["owner_time_ago"] = this.owner_time_ago;
        data["owner_timestamp"] = this.owner_timestamp;
        data["review_id"] = this.review_id;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["review_highlights"] = null;
        if (Array.isArray(this.review_highlights)) {
            data["review_highlights"] = [];
            for (let item of this.review_highlights) {
                if (item && typeof item.toJSON === "function") {
                    data["review_highlights"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}