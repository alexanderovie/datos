import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ILocalPackSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the row */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** domain in the URL */
        domain?: string | undefined
        
        /** phone number */
        phone?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** indicates whether the element is an ad */
        is_paid?: boolean | undefined
        
        /** the element’s rating
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** google-defined client id */
        cid?: string | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class LocalPackSerpElementItem  extends BaseSerpElementItem   implements ILocalPackSerpElementItem {
    
    /** title of the row */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** domain in the URL */

    domain?: string | undefined;
    
    /** phone number */

    phone?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** indicates whether the element is an ad */

    is_paid?: boolean | undefined;
    
    /** the element’s rating
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: ILocalPackSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.description = data["description"];
            this.domain = data["domain"];
            this.phone = data["phone"];
            this.url = data["url"];
            this.is_paid = data["is_paid"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.cid = data["cid"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): LocalPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new LocalPackSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["description"] = this.description;
        data["domain"] = this.domain;
        data["phone"] = this.phone;
        data["url"] = this.url;
        data["is_paid"] = this.is_paid;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["cid"] = this.cid;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}