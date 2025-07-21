import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";

export interface IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo   {
        
        /** search engine type */
        se_type?: string
        
        /** target domain in a POST array */
        target?: string
        
        /** location code in a POST array */
        location_code?: number
        
        /** language code in a POST array */
        language_code?: string
        
        /** total number of results in our database relevant to your request */
        total_count?: number
        
        /** the number of results returned in the items array */
        items_count?: number
        
        /** current offset value */
        offset?: number
        
        /** offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task */
        offset_token?: string
        
        /** contains keyword ideas and related data */
        items?: KeywordDataInfo[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordsForSiteLiveResultInfo  implements IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo {
    
    /** search engine type */

    se_type?: string;
    
    /** target domain in a POST array */

    target?: string;
    
    /** location code in a POST array */

    location_code?: number;
    
    /** language code in a POST array */

    language_code?: string;
    
    /** total number of results in our database relevant to your request */

    total_count?: number;
    
    /** the number of results returned in the items array */

    items_count?: number;
    
    /** current offset value */

    offset?: number;
    
    /** offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task */

    offset_token?: string;
    
    /** contains keyword ideas and related data */

    items?: KeywordDataInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo) {

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
            this.target = data["target"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KeywordDataInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleKeywordsForSiteLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordsForSiteLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["target"] = this.target;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["total_count"] = this.total_count;
        data["items_count"] = this.items_count;
        data["offset"] = this.offset;
        data["offset_token"] = this.offset_token;
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