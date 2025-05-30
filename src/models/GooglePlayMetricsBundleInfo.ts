import { AppMetricsInfo, IAppMetricsInfo } from "./AppMetricsInfo";
import { ApiException, throwException } from "./ApiException"

export interface IGooglePlayMetricsBundleInfo   {
        
        /** ranking data from Google Play organic search */
        google_play_search_organic?: AppMetricsInfo | undefined

    [key: string]: any;

    }

export class GooglePlayMetricsBundleInfo  implements IGooglePlayMetricsBundleInfo {
    
    /** ranking data from Google Play organic search */

    google_play_search_organic?: AppMetricsInfo | undefined;

    [key: string]: any;


    constructor(data?: IGooglePlayMetricsBundleInfo) {

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
            this.google_play_search_organic = data["google_play_search_organic"] ? AppMetricsInfo.fromJS(data["google_play_search_organic"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GooglePlayMetricsBundleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new GooglePlayMetricsBundleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["google_play_search_organic"] = this.google_play_search_organic ? AppMetricsInfo.fromJS(this.google_play_search_organic)?.toJSON() : <any>undefined;
        return data;
    }
}