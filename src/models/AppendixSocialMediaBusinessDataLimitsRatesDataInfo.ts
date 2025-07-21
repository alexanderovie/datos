import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";

export interface IAppendixSocialMediaBusinessDataLimitsRatesDataInfo   {
        
        facebook?: AppendixInfo
        
        pinterest?: AppendixInfo
        
        reddit?: AppendixInfo

    [key: string]: any;

    }

export class AppendixSocialMediaBusinessDataLimitsRatesDataInfo  implements IAppendixSocialMediaBusinessDataLimitsRatesDataInfo {

    facebook?: AppendixInfo;

    pinterest?: AppendixInfo;

    reddit?: AppendixInfo;

    [key: string]: any;


    constructor(data?: IAppendixSocialMediaBusinessDataLimitsRatesDataInfo) {

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
            this.facebook = data["facebook"] ? AppendixInfo.fromJS(data["facebook"]) : <any>undefined;
            this.pinterest = data["pinterest"] ? AppendixInfo.fromJS(data["pinterest"]) : <any>undefined;
            this.reddit = data["reddit"] ? AppendixInfo.fromJS(data["reddit"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixSocialMediaBusinessDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixSocialMediaBusinessDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["facebook"] = this.facebook ? AppendixInfo.fromJS(this.facebook)?.toJSON() : <any>undefined;
        data["pinterest"] = this.pinterest ? AppendixInfo.fromJS(this.pinterest)?.toJSON() : <any>undefined;
        data["reddit"] = this.reddit ? AppendixInfo.fromJS(this.reddit)?.toJSON() : <any>undefined;
        return data;
    }
}