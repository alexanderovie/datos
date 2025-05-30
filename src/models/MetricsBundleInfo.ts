import { OrganicMetricsInfo, IOrganicMetricsInfo } from "./OrganicMetricsInfo";
import { PaidMetricsInfo, IPaidMetricsInfo } from "./PaidMetricsInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMetricsBundleInfo   {
        
        /** ranking and traffic data from organic search */
        organic?: OrganicMetricsInfo | undefined
        
        /** ranking and traffic data from paid search */
        paid?: PaidMetricsInfo | undefined

    [key: string]: any;

    }

export class MetricsBundleInfo  implements IMetricsBundleInfo {
    
    /** ranking and traffic data from organic search */

    organic?: OrganicMetricsInfo | undefined;
    
    /** ranking and traffic data from paid search */

    paid?: PaidMetricsInfo | undefined;

    [key: string]: any;


    constructor(data?: IMetricsBundleInfo) {

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
            this.organic = data["organic"] ? OrganicMetricsInfo.fromJS(data["organic"]) : <any>undefined;
            this.paid = data["paid"] ? PaidMetricsInfo.fromJS(data["paid"]) : <any>undefined;
        }
    }

    static fromJS(data: any): MetricsBundleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MetricsBundleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["organic"] = this.organic ? OrganicMetricsInfo.fromJS(this.organic)?.toJSON() : <any>undefined;
        data["paid"] = this.paid ? PaidMetricsInfo.fromJS(this.paid)?.toJSON() : <any>undefined;
        return data;
    }
}