import { DataforseoLabsGoogleDomainWhoisOverviewLiveItem, IDataforseoLabsGoogleDomainWhoisOverviewLiveItem } from "./DataforseoLabsGoogleDomainWhoisOverviewLiveItem";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** total amount of results in our database relevant to your request */
        total_count?: number | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains ranking and traffic data */
        items?: DataforseoLabsGoogleDomainWhoisOverviewLiveItem[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo  implements IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** total amount of results in our database relevant to your request */

    total_count?: number | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** contains ranking and traffic data */

    items?: DataforseoLabsGoogleDomainWhoisOverviewLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo) {

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
            this.total_count = data["total_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(DataforseoLabsGoogleDomainWhoisOverviewLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleDomainWhoisOverviewLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
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