import { AppendixMerchantGoogleInfo, IAppendixMerchantGoogleInfo } from "./AppendixMerchantGoogleInfo";
import { AppendixMerchantAmazonInfo, IAppendixMerchantAmazonInfo } from "./AppendixMerchantAmazonInfo";
import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixMerchantLimitsRatesDataInfo   {
        
        google?: AppendixMerchantGoogleInfo | undefined
        
        amazon?: AppendixMerchantAmazonInfo | undefined
        
        locations?: number | undefined
        
        languages?: number | undefined
        
        errors?: number | undefined
        
        reviews?: AppendixSerpDaysRatesDataInfo | undefined
        
        tasks_ready?: number | undefined

    [key: string]: any;

    }

export class AppendixMerchantLimitsRatesDataInfo  implements IAppendixMerchantLimitsRatesDataInfo {

    google?: AppendixMerchantGoogleInfo | undefined;

    amazon?: AppendixMerchantAmazonInfo | undefined;

    locations?: number | undefined;

    languages?: number | undefined;

    errors?: number | undefined;

    reviews?: AppendixSerpDaysRatesDataInfo | undefined;

    tasks_ready?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixMerchantLimitsRatesDataInfo) {

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
            this.google = data["google"] ? AppendixMerchantGoogleInfo.fromJS(data["google"]) : <any>undefined;
            this.amazon = data["amazon"] ? AppendixMerchantAmazonInfo.fromJS(data["amazon"]) : <any>undefined;
            this.locations = data["locations"];
            this.languages = data["languages"];
            this.errors = data["errors"];
            this.reviews = data["reviews"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["reviews"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"];
        }
    }

    static fromJS(data: any): AppendixMerchantLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixMerchantLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["google"] = this.google ? AppendixMerchantGoogleInfo.fromJS(this.google)?.toJSON() : <any>undefined;
        data["amazon"] = this.amazon ? AppendixMerchantAmazonInfo.fromJS(this.amazon)?.toJSON() : <any>undefined;
        data["locations"] = this.locations;
        data["languages"] = this.languages;
        data["errors"] = this.errors;
        data["reviews"] = this.reviews ? AppendixSerpDaysRatesDataInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready;
        return data;
    }
}