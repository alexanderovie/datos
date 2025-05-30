import { AppendixFunctionTypeInfo, IAppendixFunctionTypeInfo } from "./AppendixFunctionTypeInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixSellersGoogleMerchantLimitsRatesDataInfo   {
        
        task_post?: number | undefined
        
        tasks_ready?: number | undefined
        
        task_get?: AppendixFunctionTypeInfo | undefined
        
        ad_url?: number | undefined

    [key: string]: any;

    }

export class AppendixSellersGoogleMerchantLimitsRatesDataInfo  implements IAppendixSellersGoogleMerchantLimitsRatesDataInfo {

    task_post?: number | undefined;

    tasks_ready?: number | undefined;

    task_get?: AppendixFunctionTypeInfo | undefined;

    ad_url?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixSellersGoogleMerchantLimitsRatesDataInfo) {

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
            this.task_post = data["task_post"];
            this.tasks_ready = data["tasks_ready"];
            this.task_get = data["task_get"] ? AppendixFunctionTypeInfo.fromJS(data["task_get"]) : <any>undefined;
            this.ad_url = data["ad_url"];
        }
    }

    static fromJS(data: any): AppendixSellersGoogleMerchantLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixSellersGoogleMerchantLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_post"] = this.task_post;
        data["tasks_ready"] = this.tasks_ready;
        data["task_get"] = this.task_get ? AppendixFunctionTypeInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["ad_url"] = this.ad_url;
        return data;
    }
}