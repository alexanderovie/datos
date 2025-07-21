import { DataforseoLabsSerpCompetitorsLiveItem, IDataforseoLabsSerpCompetitorsLiveItem } from "./DataforseoLabsSerpCompetitorsLiveItem";

export interface IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo   {
        
        /** search engine type */
        se_type?: string
        
        /** keywords specified in the request
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */
        seed_keywords?: string[]
        
        /** location code in a POST array
if there is no data, then the value is null */
        location_code?: number
        
        /** language code in a POST array
if there is no data, then the value is null */
        language_code?: string
        
        /** the total amount of results in our database relevant to your request */
        total_count?: number
        
        /** the number of results returned in the items array */
        items_count?: number
        
        /** contains detected SERP competitors and related data */
        items?: DataforseoLabsSerpCompetitorsLiveItem[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleSerpCompetitorsLiveResultInfo  implements IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo {
    
    /** search engine type */

    se_type?: string;
    
    /** keywords specified in the request
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */

    seed_keywords?: string[];
    
    /** location code in a POST array
if there is no data, then the value is null */

    location_code?: number;
    
    /** language code in a POST array
if there is no data, then the value is null */

    language_code?: string;
    
    /** the total amount of results in our database relevant to your request */

    total_count?: number;
    
    /** the number of results returned in the items array */

    items_count?: number;
    
    /** contains detected SERP competitors and related data */

    items?: DataforseoLabsSerpCompetitorsLiveItem[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleSerpCompetitorsLiveResultInfo) {

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
            this.seed_keywords = data["seed_keywords"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsSerpCompetitorsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleSerpCompetitorsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleSerpCompetitorsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["seed_keywords"] = this.seed_keywords;
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