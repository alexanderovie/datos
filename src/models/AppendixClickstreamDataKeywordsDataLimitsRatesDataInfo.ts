import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";

export interface IAppendixClickstreamDataKeywordsDataLimitsRatesDataInfo   {
        
        dataforseo_search_volume?: AppendixInfo
        
        locations_and_languages?: number
        
        bulk_search_volume?: AppendixInfo
        
        global_search_volume?: AppendixInfo

    [key: string]: any;

    }

export class AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo  implements IAppendixClickstreamDataKeywordsDataLimitsRatesDataInfo {

    dataforseo_search_volume?: AppendixInfo;

    locations_and_languages?: number;

    bulk_search_volume?: AppendixInfo;

    global_search_volume?: AppendixInfo;

    [key: string]: any;


    constructor(data?: IAppendixClickstreamDataKeywordsDataLimitsRatesDataInfo) {

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
            this.dataforseo_search_volume = data["dataforseo_search_volume"] ? AppendixInfo.fromJS(data["dataforseo_search_volume"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"];
            this.bulk_search_volume = data["bulk_search_volume"] ? AppendixInfo.fromJS(data["bulk_search_volume"]) : <any>undefined;
            this.global_search_volume = data["global_search_volume"] ? AppendixInfo.fromJS(data["global_search_volume"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixClickstreamDataKeywordsDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["dataforseo_search_volume"] = this.dataforseo_search_volume ? AppendixInfo.fromJS(this.dataforseo_search_volume)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages;
        data["bulk_search_volume"] = this.bulk_search_volume ? AppendixInfo.fromJS(this.bulk_search_volume)?.toJSON() : <any>undefined;
        data["global_search_volume"] = this.global_search_volume ? AppendixInfo.fromJS(this.global_search_volume)?.toJSON() : <any>undefined;
        return data;
    }
}