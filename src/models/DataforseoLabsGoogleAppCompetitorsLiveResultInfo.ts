import { DataforseoLabsleAppCompetitorsLiveItem, IDataforseoLabsleAppCompetitorsLiveItem } from "./DataforseoLabsleAppCompetitorsLiveItem";

export interface IDataforseoLabsGoogleAppCompetitorsLiveResultInfo   {
        
        /** search engine type */
        se_type?: string
        
        /** id of the app in a POST array */
        app_id?: string
        
        /** location code in a POST array */
        location_code?: number
        
        /** language code in a POST array */
        language_code?: string
        
        /** total amount of results in our database relevant to your request */
        total_count?: number
        
        /** the number of results returned in the items array */
        items_count?: number
        
        /** contains data related to the app_id and competitor applications */
        items?: DataforseoLabsleAppCompetitorsLiveItem[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleAppCompetitorsLiveResultInfo  implements IDataforseoLabsGoogleAppCompetitorsLiveResultInfo {
    
    /** search engine type */

    se_type?: string;
    
    /** id of the app in a POST array */

    app_id?: string;
    
    /** location code in a POST array */

    location_code?: number;
    
    /** language code in a POST array */

    language_code?: string;
    
    /** total amount of results in our database relevant to your request */

    total_count?: number;
    
    /** the number of results returned in the items array */

    items_count?: number;
    
    /** contains data related to the app_id and competitor applications */

    items?: DataforseoLabsleAppCompetitorsLiveItem[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleAppCompetitorsLiveResultInfo) {

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
            this.app_id = data["app_id"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsleAppCompetitorsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleAppCompetitorsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleAppCompetitorsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["app_id"] = this.app_id;
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