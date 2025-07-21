import { BulkMetricsInfo, IBulkMetricsInfo } from "./BulkMetricsInfo";

export interface IDataforseoLabsBingBulkTrafficEstimationLiveItem   {
        
        /** search engine type */
        se_type?: string
        
        /** target domain in a POST array */
        target?: string
        
        /** traffic data relevant to the specified domain */
        metrics?: { [key: string]: BulkMetricsInfo; }

    [key: string]: any;

    }

export class DataforseoLabsBingBulkTrafficEstimationLiveItem  implements IDataforseoLabsBingBulkTrafficEstimationLiveItem {
    
    /** search engine type */

    se_type?: string;
    
    /** target domain in a POST array */

    target?: string;
    
    /** traffic data relevant to the specified domain */

    metrics?: { [key: string]: BulkMetricsInfo; };

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingBulkTrafficEstimationLiveItem) {

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
            this.metrics = data["metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsBingBulkTrafficEstimationLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingBulkTrafficEstimationLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["target"] = this.target;
        data["metrics"] = this.metrics;
        return data;
    }
}