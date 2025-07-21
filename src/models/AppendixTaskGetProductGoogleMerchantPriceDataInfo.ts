import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";

export interface IAppendixTaskGetProductGoogleMerchantPriceDataInfo   {
        
        advanced?: AppendixTaskKeywordsDataPriceDataInfo
        
        html?: AppendixTaskKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixTaskGetProductGoogleMerchantPriceDataInfo  implements IAppendixTaskGetProductGoogleMerchantPriceDataInfo {

    advanced?: AppendixTaskKeywordsDataPriceDataInfo;

    html?: AppendixTaskKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixTaskGetProductGoogleMerchantPriceDataInfo) {

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
            this.advanced = data["advanced"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["advanced"]) : <any>undefined;
            this.html = data["html"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["html"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixTaskGetProductGoogleMerchantPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixTaskGetProductGoogleMerchantPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["advanced"] = this.advanced ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.advanced)?.toJSON() : <any>undefined;
        data["html"] = this.html ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.html)?.toJSON() : <any>undefined;
        return data;
    }
}