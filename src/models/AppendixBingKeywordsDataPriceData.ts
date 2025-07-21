import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";

export interface IAppendixBingKeywordsDataPriceData   {
        
        audience_estimation?: AppendixBingKeywordsDataPriceDataInfo
        
        keyword_performance?: AppendixBingKeywordsDataPriceDataInfo
        
        keywords_for_keywords?: AppendixBingKeywordsDataPriceDataInfo
        
        keywords_for_site?: AppendixBingKeywordsDataPriceDataInfo
        
        keyword_suggestions_for_url?: AppendixBingKeywordsDataPriceDataInfo
        
        search_volume?: AppendixBingKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixBingKeywordsDataPriceData  implements IAppendixBingKeywordsDataPriceData {

    audience_estimation?: AppendixBingKeywordsDataPriceDataInfo;

    keyword_performance?: AppendixBingKeywordsDataPriceDataInfo;

    keywords_for_keywords?: AppendixBingKeywordsDataPriceDataInfo;

    keywords_for_site?: AppendixBingKeywordsDataPriceDataInfo;

    keyword_suggestions_for_url?: AppendixBingKeywordsDataPriceDataInfo;

    search_volume?: AppendixBingKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixBingKeywordsDataPriceData) {

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
            this.audience_estimation = data["audience_estimation"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["audience_estimation"]) : <any>undefined;
            this.keyword_performance = data["keyword_performance"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["keyword_performance"]) : <any>undefined;
            this.keywords_for_keywords = data["keywords_for_keywords"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["keywords_for_keywords"]) : <any>undefined;
            this.keywords_for_site = data["keywords_for_site"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["keywords_for_site"]) : <any>undefined;
            this.keyword_suggestions_for_url = data["keyword_suggestions_for_url"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["keyword_suggestions_for_url"]) : <any>undefined;
            this.search_volume = data["search_volume"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["search_volume"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBingKeywordsDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBingKeywordsDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["audience_estimation"] = this.audience_estimation ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.audience_estimation)?.toJSON() : <any>undefined;
        data["keyword_performance"] = this.keyword_performance ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.keyword_performance)?.toJSON() : <any>undefined;
        data["keywords_for_keywords"] = this.keywords_for_keywords ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.keywords_for_keywords)?.toJSON() : <any>undefined;
        data["keywords_for_site"] = this.keywords_for_site ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.keywords_for_site)?.toJSON() : <any>undefined;
        data["keyword_suggestions_for_url"] = this.keyword_suggestions_for_url ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.keyword_suggestions_for_url)?.toJSON() : <any>undefined;
        data["search_volume"] = this.search_volume ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.search_volume)?.toJSON() : <any>undefined;
        return data;
    }
}