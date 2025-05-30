import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IThirdPartyReviewsSerpElementItem  extends IBaseSerpElementItem    {
        
        /** the number of reviews */
        reviews_count?: number | undefined
        
        /** title of the row */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** the element’s rating
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class ThirdPartyReviewsSerpElementItem  extends BaseSerpElementItem   implements IThirdPartyReviewsSerpElementItem {
    
    /** the number of reviews */

    reviews_count?: number | undefined;
    
    /** title of the row */

    title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** the element’s rating
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IThirdPartyReviewsSerpElementItem) {
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
            this.title = data["title"];
            this.url = data["url"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ThirdPartyReviewsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ThirdPartyReviewsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["reviews_count"] = this.reviews_count;
        data["title"] = this.title;
        data["url"] = this.url;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}