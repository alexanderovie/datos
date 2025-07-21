import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";

export interface IAppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo   {
        
        explore?: AppendixInfo
        
        subregion_interests?: AppendixInfo
        
        demography?: AppendixInfo
        
        merged_data?: AppendixInfo

    [key: string]: any;

    }

export class AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo  implements IAppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo {

    explore?: AppendixInfo;

    subregion_interests?: AppendixInfo;

    demography?: AppendixInfo;

    merged_data?: AppendixInfo;

    [key: string]: any;


    constructor(data?: IAppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo) {

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
            this.explore = data["explore"] ? AppendixInfo.fromJS(data["explore"]) : <any>undefined;
            this.subregion_interests = data["subregion_interests"] ? AppendixInfo.fromJS(data["subregion_interests"]) : <any>undefined;
            this.demography = data["demography"] ? AppendixInfo.fromJS(data["demography"]) : <any>undefined;
            this.merged_data = data["merged_data"] ? AppendixInfo.fromJS(data["merged_data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixDataforseoTrendsKeywordsDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["explore"] = this.explore ? AppendixInfo.fromJS(this.explore)?.toJSON() : <any>undefined;
        data["subregion_interests"] = this.subregion_interests ? AppendixInfo.fromJS(this.subregion_interests)?.toJSON() : <any>undefined;
        data["demography"] = this.demography ? AppendixInfo.fromJS(this.demography)?.toJSON() : <any>undefined;
        data["merged_data"] = this.merged_data ? AppendixInfo.fromJS(this.merged_data)?.toJSON() : <any>undefined;
        return data;
    }
}