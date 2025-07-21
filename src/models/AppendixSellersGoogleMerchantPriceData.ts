import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixTaskGetProductGoogleMerchantPriceDataInfo, IAppendixTaskGetProductGoogleMerchantPriceDataInfo } from "./AppendixTaskGetProductGoogleMerchantPriceDataInfo";

export interface IAppendixSellersGoogleMerchantPriceData   {
        
        ad_url?: AppendixTaskKeywordsDataPriceDataInfo
        
        task_get?: AppendixTaskGetProductGoogleMerchantPriceDataInfo
        
        task_post?: AppendixTaskKeywordsDataPriceDataInfo
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixSellersGoogleMerchantPriceData  implements IAppendixSellersGoogleMerchantPriceData {

    ad_url?: AppendixTaskKeywordsDataPriceDataInfo;

    task_get?: AppendixTaskGetProductGoogleMerchantPriceDataInfo;

    task_post?: AppendixTaskKeywordsDataPriceDataInfo;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixSellersGoogleMerchantPriceData) {

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
            this.ad_url = data["ad_url"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["ad_url"]) : <any>undefined;
            this.task_get = data["task_get"] ? AppendixTaskGetProductGoogleMerchantPriceDataInfo.fromJS(data["task_get"]) : <any>undefined;
            this.task_post = data["task_post"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_post"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixSellersGoogleMerchantPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixSellersGoogleMerchantPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["ad_url"] = this.ad_url ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.ad_url)?.toJSON() : <any>undefined;
        data["task_get"] = this.task_get ? AppendixTaskGetProductGoogleMerchantPriceDataInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["task_post"] = this.task_post ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_post)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}