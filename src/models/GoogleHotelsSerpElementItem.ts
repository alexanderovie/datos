import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleHotelsSerpElementItem  extends IBaseSerpElementItem    {
        
        /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */
        hotel_identifier?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class GoogleHotelsSerpElementItem  extends BaseSerpElementItem   implements IGoogleHotelsSerpElementItem {
    
    /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */

    hotel_identifier?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IGoogleHotelsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.hotel_identifier = data["hotel_identifier"];
            this.url = data["url"];
            this.cid = data["cid"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleHotelsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleHotelsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["hotel_identifier"] = this.hotel_identifier;
        data["url"] = this.url;
        data["cid"] = this.cid;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}