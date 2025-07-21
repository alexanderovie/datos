import { DataforseoTrendsSubregionInterestsElementItem, IDataforseoTrendsSubregionInterestsElementItem } from "./BaseKeywordDataDataforseoTrendsItem";

export interface IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo   {
        
        /** keywords in a POST array */
        keywords?: string[]
        
        /** type of element */
        type?: string
        
        /** location code in a POST array
if there is no data, then the value is null */
        location_code?: number
        
        /** language code in a POST array
if there is no data, then the value is null */
        language_code?: string
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string
        
        /** the number of results returned in the items array */
        items_count?: number
        
        /** keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region */
        items?: DataforseoTrendsSubregionInterestsElementItem[]

    [key: string]: any;

    }

export class KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo  implements IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo {
    
    /** keywords in a POST array */

    keywords?: string[];
    
    /** type of element */

    type?: string;
    
    /** location code in a POST array
if there is no data, then the value is null */

    location_code?: number;
    
    /** language code in a POST array
if there is no data, then the value is null */

    language_code?: string;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string;
    
    /** the number of results returned in the items array */

    items_count?: number;
    
    /** keyword popularity values per location
values in this array represent percentages relative to the maximum value within each region */

    items?: DataforseoTrendsSubregionInterestsElementItem[];

    [key: string]: any;


    constructor(data?: IKeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo) {

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
            this.keywords = data["keywords"];
            this.type = data["type"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.datetime = data["datetime"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoTrendsSubregionInterestsElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataDataforseoTrendsSubregionInterestsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["type"] = this.type;
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
        return data;
    }
}