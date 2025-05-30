import { BaseGoogleMapsSerpElementItem, IBaseGoogleMapsSerpElementItem } from "./BaseGoogleMapsSerpElementItem";
import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleMapsMapsPaidItemSerpElementItem  extends IBaseGoogleMapsSerpElementItem    {

    [key: string]: any;

    }

export class GoogleMapsMapsPaidItemSerpElementItem  extends BaseGoogleMapsSerpElementItem   implements IGoogleMapsMapsPaidItemSerpElementItem {

    [key: string]: any;


    constructor(data?: IGoogleMapsMapsPaidItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
        }
    }

    static fromJS(data: any): GoogleMapsMapsPaidItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleMapsMapsPaidItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        return data;
    }
}