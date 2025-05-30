import { AppMetricsInfo, IAppMetricsInfo } from "./AppMetricsInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppStoreMetricsBundleInfo   {
        
        /** ranking data from App Store organic search */
        app_store_search_organic?: AppMetricsInfo | undefined

    [key: string]: any;

    }

export class AppStoreMetricsBundleInfo  implements IAppStoreMetricsBundleInfo {
    
    /** ranking data from App Store organic search */

    app_store_search_organic?: AppMetricsInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppStoreMetricsBundleInfo) {

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
            this.app_store_search_organic = data["app_store_search_organic"] ? AppMetricsInfo.fromJS(data["app_store_search_organic"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppStoreMetricsBundleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppStoreMetricsBundleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_store_search_organic"] = this.app_store_search_organic ? AppMetricsInfo.fromJS(this.app_store_search_organic)?.toJSON() : <any>undefined;
        return data;
    }
}