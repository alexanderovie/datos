import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixDataforseoTrendsKeywordsDataPriceData   {
        
        demography?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        explore?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        merged_data?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        subregion_interests?: AppendixBingKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixDataforseoTrendsKeywordsDataPriceData  implements IAppendixDataforseoTrendsKeywordsDataPriceData {

    demography?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    explore?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    merged_data?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    subregion_interests?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixDataforseoTrendsKeywordsDataPriceData) {

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
            this.demography = data["demography"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["demography"]) : <any>undefined;
            this.explore = data["explore"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["explore"]) : <any>undefined;
            this.merged_data = data["merged_data"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["merged_data"]) : <any>undefined;
            this.subregion_interests = data["subregion_interests"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["subregion_interests"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixDataforseoTrendsKeywordsDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixDataforseoTrendsKeywordsDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["demography"] = this.demography ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.demography)?.toJSON() : <any>undefined;
        data["explore"] = this.explore ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.explore)?.toJSON() : <any>undefined;
        data["merged_data"] = this.merged_data ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.merged_data)?.toJSON() : <any>undefined;
        data["subregion_interests"] = this.subregion_interests ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.subregion_interests)?.toJSON() : <any>undefined;
        return data;
    }
}