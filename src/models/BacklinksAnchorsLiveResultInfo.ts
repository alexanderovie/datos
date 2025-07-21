import { BacklinksAnchorsLiveItem, IBacklinksAnchorsLiveItem } from "./BacklinksAnchorsLiveItem";

export interface IBacklinksAnchorsLiveResultInfo   {
        
        /** target in the post array */
        target?: string
        
        /** total number of relevant items in the database */
        total_count?: number
        
        /** number of items in the results array */
        items_count?: number
        
        /** items array */
        items?: BacklinksAnchorsLiveItem[]

    [key: string]: any;

    }

export class BacklinksAnchorsLiveResultInfo  implements IBacklinksAnchorsLiveResultInfo {
    
    /** target in the post array */

    target?: string;
    
    /** total number of relevant items in the database */

    total_count?: number;
    
    /** number of items in the results array */

    items_count?: number;
    
    /** items array */

    items?: BacklinksAnchorsLiveItem[];

    [key: string]: any;


    constructor(data?: IBacklinksAnchorsLiveResultInfo) {

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
            this.target = data["target"];
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BacklinksAnchorsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksAnchorsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksAnchorsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
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