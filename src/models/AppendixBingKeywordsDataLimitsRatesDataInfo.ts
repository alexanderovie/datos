import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixBingKeywordsDataLimitsRatesDataInfo   {
        
        keyword_performance?: AppendixInfo | undefined
        
        search_volume?: AppendixInfo | undefined
        
        keywords_for_site?: AppendixInfo | undefined
        
        keywords_for_keywords?: AppendixInfo | undefined
        
        audience_estimation?: AppendixInfo | undefined
        
        keyword_suggestions_for_url?: AppendixInfo | undefined

    [key: string]: any;

    }

export class AppendixBingKeywordsDataLimitsRatesDataInfo  implements IAppendixBingKeywordsDataLimitsRatesDataInfo {

    keyword_performance?: AppendixInfo | undefined;

    search_volume?: AppendixInfo | undefined;

    keywords_for_site?: AppendixInfo | undefined;

    keywords_for_keywords?: AppendixInfo | undefined;

    audience_estimation?: AppendixInfo | undefined;

    keyword_suggestions_for_url?: AppendixInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBingKeywordsDataLimitsRatesDataInfo) {

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
            this.keyword_performance = data["keyword_performance"] ? AppendixInfo.fromJS(data["keyword_performance"]) : <any>undefined;
            this.search_volume = data["search_volume"] ? AppendixInfo.fromJS(data["search_volume"]) : <any>undefined;
            this.keywords_for_site = data["keywords_for_site"] ? AppendixInfo.fromJS(data["keywords_for_site"]) : <any>undefined;
            this.keywords_for_keywords = data["keywords_for_keywords"] ? AppendixInfo.fromJS(data["keywords_for_keywords"]) : <any>undefined;
            this.audience_estimation = data["audience_estimation"] ? AppendixInfo.fromJS(data["audience_estimation"]) : <any>undefined;
            this.keyword_suggestions_for_url = data["keyword_suggestions_for_url"] ? AppendixInfo.fromJS(data["keyword_suggestions_for_url"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBingKeywordsDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBingKeywordsDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword_performance"] = this.keyword_performance ? AppendixInfo.fromJS(this.keyword_performance)?.toJSON() : <any>undefined;
        data["search_volume"] = this.search_volume ? AppendixInfo.fromJS(this.search_volume)?.toJSON() : <any>undefined;
        data["keywords_for_site"] = this.keywords_for_site ? AppendixInfo.fromJS(this.keywords_for_site)?.toJSON() : <any>undefined;
        data["keywords_for_keywords"] = this.keywords_for_keywords ? AppendixInfo.fromJS(this.keywords_for_keywords)?.toJSON() : <any>undefined;
        data["audience_estimation"] = this.audience_estimation ? AppendixInfo.fromJS(this.audience_estimation)?.toJSON() : <any>undefined;
        data["keyword_suggestions_for_url"] = this.keyword_suggestions_for_url ? AppendixInfo.fromJS(this.keyword_suggestions_for_url)?.toJSON() : <any>undefined;
        return data;
    }
}