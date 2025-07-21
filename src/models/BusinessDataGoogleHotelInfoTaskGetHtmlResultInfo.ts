import { SerpHtmlItemInfo, ISerpHtmlItemInfo } from "./SerpHtmlItemInfo";

export interface IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo   {
        
        /** identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE */
        keyword?: string
        
        /** location code in a POST array */
        location_code?: number
        
        /** language code in a POST array */
        language_code?: string
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string
        
        /** the number of results returned in the items array */
        items_count?: number
        
        /** HTML pages */
        items?: SerpHtmlItemInfo[]
        
        type?: string
        
        se_domain?: string

    [key: string]: any;

    }

export class BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo  implements IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo {
    
    /** identifier received in a POST array
this field will contain the hotel_identifier parameter specified when setting a task;
example:
CgoI-KWyzenM_MV3EAE */

    keyword?: string;
    
    /** location code in a POST array */

    location_code?: number;
    
    /** language code in a POST array */

    language_code?: string;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string;
    
    /** the number of results returned in the items array */

    items_count?: number;
    
    /** HTML pages */

    items?: SerpHtmlItemInfo[];

    type?: string;

    se_domain?: string;

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleHotelInfoTaskGetHtmlResultInfo) {

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
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.datetime = data["datetime"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(SerpHtmlItemInfo.fromJS(item));
                }
            }
            this.type = data["type"];
            this.se_domain = data["se_domain"];
        }
    }

    static fromJS(data: any): BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleHotelInfoTaskGetHtmlResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["datetime"] = this.datetime;
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
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        return data;
    }
}