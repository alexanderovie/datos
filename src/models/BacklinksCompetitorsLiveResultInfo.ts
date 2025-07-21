import { BacklinksCompetitorsLiveItem, IBacklinksCompetitorsLiveItem } from "./BacklinksCompetitorsLiveItem";

export interface IBacklinksCompetitorsLiveResultInfo   {
        
        /** total number of relevant items in the database */
        total_count?: number
        
        /** number of items in the items array */
        items_count?: number
        
        /** items array */
        items?: BacklinksCompetitorsLiveItem[]

    [key: string]: any;

    }

export class BacklinksCompetitorsLiveResultInfo  implements IBacklinksCompetitorsLiveResultInfo {
    
    /** total number of relevant items in the database */

    total_count?: number;
    
    /** number of items in the items array */

    items_count?: number;
    
    /** items array */

    items?: BacklinksCompetitorsLiveItem[];

    [key: string]: any;


    constructor(data?: IBacklinksCompetitorsLiveResultInfo) {

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
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BacklinksCompetitorsLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksCompetitorsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksCompetitorsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
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