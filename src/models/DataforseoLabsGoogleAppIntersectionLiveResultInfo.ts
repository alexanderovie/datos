import { DataforseoLabsGoogleAppIntersectionLiveItem, IDataforseoLabsGoogleAppIntersectionLiveItem } from "./DataforseoLabsGoogleAppIntersectionLiveItem";

export interface IDataforseoLabsGoogleAppIntersectionLiveResultInfo   {
        
        /** search engine type */
        se_type?: string
        
        /** ids of the apps in a POST array */
        app_ids?: { [key: string]: string; }
        
        /** location code in a POST array */
        location_code?: number
        
        /** language code in a POST array */
        language_code?: string
        
        /** total amount of results in our database relevant to your request */
        total_count?: number
        
        /** the number of results returned in the items array */
        items_count?: number
        
        /** contains data related to the ranking keywords for the app specified in the app_id field */
        items?: DataforseoLabsGoogleAppIntersectionLiveItem[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleAppIntersectionLiveResultInfo  implements IDataforseoLabsGoogleAppIntersectionLiveResultInfo {
    
    /** search engine type */

    se_type?: string;
    
    /** ids of the apps in a POST array */

    app_ids?: { [key: string]: string; };
    
    /** location code in a POST array */

    location_code?: number;
    
    /** language code in a POST array */

    language_code?: string;
    
    /** total amount of results in our database relevant to your request */

    total_count?: number;
    
    /** the number of results returned in the items array */

    items_count?: number;
    
    /** contains data related to the ranking keywords for the app specified in the app_id field */

    items?: DataforseoLabsGoogleAppIntersectionLiveItem[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleAppIntersectionLiveResultInfo) {

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
            this.se_type = data["se_type"];
            this.app_ids = data["app_ids"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGoogleAppIntersectionLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleAppIntersectionLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleAppIntersectionLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["app_ids"] = this.app_ids;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}