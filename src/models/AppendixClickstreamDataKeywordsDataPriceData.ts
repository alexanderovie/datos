import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixClickstreamDataKeywordsDataPriceData   {
        
        bulk_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        dataforseo_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        global_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixClickstreamDataKeywordsDataPriceData  implements IAppendixClickstreamDataKeywordsDataPriceData {

    bulk_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    dataforseo_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    global_search_volume?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    locations_and_languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixClickstreamDataKeywordsDataPriceData) {

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
            this.bulk_search_volume = data["bulk_search_volume"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["bulk_search_volume"]) : <any>undefined;
            this.dataforseo_search_volume = data["dataforseo_search_volume"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["dataforseo_search_volume"]) : <any>undefined;
            this.global_search_volume = data["global_search_volume"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["global_search_volume"]) : <any>undefined;
            this.locations_and_languages = data["locations_and_languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations_and_languages"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixClickstreamDataKeywordsDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixClickstreamDataKeywordsDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["bulk_search_volume"] = this.bulk_search_volume ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.bulk_search_volume)?.toJSON() : <any>undefined;
        data["dataforseo_search_volume"] = this.dataforseo_search_volume ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.dataforseo_search_volume)?.toJSON() : <any>undefined;
        data["global_search_volume"] = this.global_search_volume ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.global_search_volume)?.toJSON() : <any>undefined;
        data["locations_and_languages"] = this.locations_and_languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations_and_languages)?.toJSON() : <any>undefined;
        return data;
    }
}