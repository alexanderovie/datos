import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleReviewsSerpElementItem  extends IBaseSerpElementItem    {
        
        /** the number of reviews */
        reviews_count?: number | undefined
        
        /** the element’s rating
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** the identifier of a place */
        place_id?: string | undefined
        
        /** the additional feature of the review */
        feature?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class GoogleReviewsSerpElementItem  extends BaseSerpElementItem   implements IGoogleReviewsSerpElementItem {
    
    /** the number of reviews */

    reviews_count?: number | undefined;
    
    /** the element’s rating
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** the identifier of a place */

    place_id?: string | undefined;
    
    /** the additional feature of the review */

    feature?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IGoogleReviewsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.place_id = data["place_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleReviewsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleReviewsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["place_id"] = this.place_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}