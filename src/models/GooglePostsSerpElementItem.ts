import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGooglePostsSerpElementItem  extends IBaseSerpElementItem    {
        
        /** the identifier of the google_posts feature */
        posts_id?: string | undefined
        
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

export class GooglePostsSerpElementItem  extends BaseSerpElementItem   implements IGooglePostsSerpElementItem {
    
    /** the identifier of the google_posts feature */

    posts_id?: string | undefined;
    
    /** the additional feature of the review */

    feature?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IGooglePostsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.posts_id = data["posts_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GooglePostsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GooglePostsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["posts_id"] = this.posts_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}