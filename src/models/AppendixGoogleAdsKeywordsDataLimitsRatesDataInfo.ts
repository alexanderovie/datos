import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";

export interface IAppendixGoogleAdsKeywordsDataLimitsRatesDataInfo   {
        
        status?: number
        
        search_volume?: AppendixInfo
        
        keywords_for_keywords?: AppendixInfo
        
        keywords_for_site?: AppendixInfo
        
        ad_traffic_by_keywords?: AppendixInfo

    [key: string]: any;

    }

export class AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo  implements IAppendixGoogleAdsKeywordsDataLimitsRatesDataInfo {

    status?: number;

    search_volume?: AppendixInfo;

    keywords_for_keywords?: AppendixInfo;

    keywords_for_site?: AppendixInfo;

    ad_traffic_by_keywords?: AppendixInfo;

    [key: string]: any;


    constructor(data?: IAppendixGoogleAdsKeywordsDataLimitsRatesDataInfo) {

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
            this.status = data["status"];
            this.search_volume = data["search_volume"] ? AppendixInfo.fromJS(data["search_volume"]) : <any>undefined;
            this.keywords_for_keywords = data["keywords_for_keywords"] ? AppendixInfo.fromJS(data["keywords_for_keywords"]) : <any>undefined;
            this.keywords_for_site = data["keywords_for_site"] ? AppendixInfo.fromJS(data["keywords_for_site"]) : <any>undefined;
            this.ad_traffic_by_keywords = data["ad_traffic_by_keywords"] ? AppendixInfo.fromJS(data["ad_traffic_by_keywords"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixGoogleAdsKeywordsDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["status"] = this.status;
        data["search_volume"] = this.search_volume ? AppendixInfo.fromJS(this.search_volume)?.toJSON() : <any>undefined;
        data["keywords_for_keywords"] = this.keywords_for_keywords ? AppendixInfo.fromJS(this.keywords_for_keywords)?.toJSON() : <any>undefined;
        data["keywords_for_site"] = this.keywords_for_site ? AppendixInfo.fromJS(this.keywords_for_site)?.toJSON() : <any>undefined;
        data["ad_traffic_by_keywords"] = this.ad_traffic_by_keywords ? AppendixInfo.fromJS(this.ad_traffic_by_keywords)?.toJSON() : <any>undefined;
        return data;
    }
}