import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleHotelsDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */
        hotel_identifier?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined

    [key: string]: any;

    }

export class GoogleHotelsDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IGoogleHotelsDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** unique hotel identifier
unique hotel identifier assigned by Google;
example: 'CgoIjaeSlI6CnNpVEAE' */

    hotel_identifier?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleHotelsDataforseoLabsSerpElementItem) {
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
            this.hotel_identifier = data["hotel_identifier"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): GoogleHotelsDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleHotelsDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["hotel_identifier"] = this.hotel_identifier;
        data["url"] = this.url;
        return data;
    }
}