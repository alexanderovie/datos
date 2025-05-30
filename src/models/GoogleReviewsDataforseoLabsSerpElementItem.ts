import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleReviewsDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** the number of reviews */
        reviews_count?: number | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** the identifier of a place */
        place_id?: string | undefined
        
        /** the additional feature of the review */
        feature?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined

    [key: string]: any;

    }

export class GoogleReviewsDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IGoogleReviewsDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** the number of reviews */

    reviews_count?: number | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** the identifier of a place */

    place_id?: string | undefined;
    
    /** the additional feature of the review */

    feature?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleReviewsDataforseoLabsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.se_type = data["se_type"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.place_id = data["place_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): GoogleReviewsDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleReviewsDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["place_id"] = this.place_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        return data;
    }
}