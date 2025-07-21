import { BusinessDataBusinessListingsSearchLiveItem, IBusinessDataBusinessListingsSearchLiveItem } from "./BusinessDataBusinessListingsSearchLiveItem";

export interface IBusinessDataBusinessListingsSearchLiveResultInfo   {
        
        /** total number of results in our database relevant to your request */
        total_count?: number
        
        /** item types
the number of items in the items array */
        count?: number
        
        /** offset in the results array of returned businesses */
        offset?: number
        
        /** token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task */
        offset_token?: string
        
        /** encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing */
        items?: BusinessDataBusinessListingsSearchLiveItem[]

    [key: string]: any;

    }

export class BusinessDataBusinessListingsSearchLiveResultInfo  implements IBusinessDataBusinessListingsSearchLiveResultInfo {
    
    /** total number of results in our database relevant to your request */

    total_count?: number;
    
    /** item types
the number of items in the items array */

    count?: number;
    
    /** offset in the results array of returned businesses */

    offset?: number;
    
    /** token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task */

    offset_token?: string;
    
    /** encountered item types
types of search engine results encountered in the items array;
possible item types: business_listing */

    items?: BusinessDataBusinessListingsSearchLiveItem[];

    [key: string]: any;


    constructor(data?: IBusinessDataBusinessListingsSearchLiveResultInfo) {

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
            this.total_count = data["total_count"];
            this.count = data["count"];
            this.offset = data["offset"];
            this.offset_token = data["offset_token"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BusinessDataBusinessListingsSearchLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataBusinessListingsSearchLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataBusinessListingsSearchLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["total_count"] = this.total_count;
        data["count"] = this.count;
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