import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixGoogleAdsKeywordsDataPriceData   {
        
        ad_traffic_by_keywords?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        keywords_for_keywords?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        keywords_for_site?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        status?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixGoogleAdsKeywordsDataPriceData  implements IAppendixGoogleAdsKeywordsDataPriceData {

    ad_traffic_by_keywords?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    keywords_for_keywords?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    keywords_for_site?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    status?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixGoogleAdsKeywordsDataPriceData) {

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
            this.ad_traffic_by_keywords = data["ad_traffic_by_keywords"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["ad_traffic_by_keywords"]) : <any>undefined;
            this.keywords_for_keywords = data["keywords_for_keywords"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["keywords_for_keywords"]) : <any>undefined;
            this.keywords_for_site = data["keywords_for_site"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["keywords_for_site"]) : <any>undefined;
            this.search_volume = data["search_volume"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["search_volume"]) : <any>undefined;
            this.status = data["status"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["status"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixGoogleAdsKeywordsDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixGoogleAdsKeywordsDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["ad_traffic_by_keywords"] = this.ad_traffic_by_keywords ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.ad_traffic_by_keywords)?.toJSON() : <any>undefined;
        data["keywords_for_keywords"] = this.keywords_for_keywords ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.keywords_for_keywords)?.toJSON() : <any>undefined;
        data["keywords_for_site"] = this.keywords_for_site ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.keywords_for_site)?.toJSON() : <any>undefined;
        data["search_volume"] = this.search_volume ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.search_volume)?.toJSON() : <any>undefined;
        data["status"] = this.status ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.status)?.toJSON() : <any>undefined;
        return data;
    }
}