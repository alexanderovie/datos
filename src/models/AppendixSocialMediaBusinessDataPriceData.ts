import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";

export interface IAppendixSocialMediaBusinessDataPriceData   {
        
        facebook?: AppendixBingKeywordsDataPriceDataInfo
        
        pinterest?: AppendixBingKeywordsDataPriceDataInfo
        
        reddit?: AppendixBingKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixSocialMediaBusinessDataPriceData  implements IAppendixSocialMediaBusinessDataPriceData {

    facebook?: AppendixBingKeywordsDataPriceDataInfo;

    pinterest?: AppendixBingKeywordsDataPriceDataInfo;

    reddit?: AppendixBingKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixSocialMediaBusinessDataPriceData) {

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
            this.facebook = data["facebook"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["facebook"]) : <any>undefined;
            this.pinterest = data["pinterest"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["pinterest"]) : <any>undefined;
            this.reddit = data["reddit"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["reddit"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixSocialMediaBusinessDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixSocialMediaBusinessDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["facebook"] = this.facebook ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.facebook)?.toJSON() : <any>undefined;
        data["pinterest"] = this.pinterest ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.pinterest)?.toJSON() : <any>undefined;
        data["reddit"] = this.reddit ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.reddit)?.toJSON() : <any>undefined;
        return data;
    }
}