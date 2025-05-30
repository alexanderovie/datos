import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";
import { AppendixSellersGoogleMerchantLimitsRatesDataInfo, IAppendixSellersGoogleMerchantLimitsRatesDataInfo } from "./AppendixSellersGoogleMerchantLimitsRatesDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixMerchantGoogleInfo   {
        
        products?: AppendixSerpDaysRatesDataInfo | undefined
        
        sellers?: AppendixSellersGoogleMerchantLimitsRatesDataInfo | undefined
        
        product_spec?: AppendixSerpDaysRatesDataInfo | undefined
        
        product_info?: AppendixSerpDaysRatesDataInfo | undefined

    [key: string]: any;

    }

export class AppendixMerchantGoogleInfo  implements IAppendixMerchantGoogleInfo {

    products?: AppendixSerpDaysRatesDataInfo | undefined;

    sellers?: AppendixSellersGoogleMerchantLimitsRatesDataInfo | undefined;

    product_spec?: AppendixSerpDaysRatesDataInfo | undefined;

    product_info?: AppendixSerpDaysRatesDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixMerchantGoogleInfo) {

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
            this.products = data["products"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["products"]) : <any>undefined;
            this.sellers = data["sellers"] ? AppendixSellersGoogleMerchantLimitsRatesDataInfo.fromJS(data["sellers"]) : <any>undefined;
            this.product_spec = data["product_spec"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["product_spec"]) : <any>undefined;
            this.product_info = data["product_info"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["product_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixMerchantGoogleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixMerchantGoogleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["products"] = this.products ? AppendixSerpDaysRatesDataInfo.fromJS(this.products)?.toJSON() : <any>undefined;
        data["sellers"] = this.sellers ? AppendixSellersGoogleMerchantLimitsRatesDataInfo.fromJS(this.sellers)?.toJSON() : <any>undefined;
        data["product_spec"] = this.product_spec ? AppendixSerpDaysRatesDataInfo.fromJS(this.product_spec)?.toJSON() : <any>undefined;
        data["product_info"] = this.product_info ? AppendixSerpDaysRatesDataInfo.fromJS(this.product_info)?.toJSON() : <any>undefined;
        return data;
    }
}