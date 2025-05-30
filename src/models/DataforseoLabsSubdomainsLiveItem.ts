import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoLabsSubdomainsLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** returned subdomain */
        subdomain?: string | undefined
        
        /** ranking data relevant to subdomain */
        metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsSubdomainsLiveItem  implements IDataforseoLabsSubdomainsLiveItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** returned subdomain */

    subdomain?: string | undefined;
    
    /** ranking data relevant to subdomain */

    metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsSubdomainsLiveItem) {

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
            this.subdomain = data["subdomain"];
            this.metrics = data["metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsSubdomainsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsSubdomainsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["subdomain"] = this.subdomain;
        data["metrics"] = this.metrics;
        return data;
    }
}