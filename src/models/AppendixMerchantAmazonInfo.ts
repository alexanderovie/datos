import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixMerchantAmazonInfo   {
        
        asin?: AppendixSerpDaysRatesDataInfo | undefined
        
        products?: AppendixSerpDaysRatesDataInfo | undefined
        
        sellers?: AppendixSerpDaysRatesDataInfo | undefined

    [key: string]: any;

    }

export class AppendixMerchantAmazonInfo  implements IAppendixMerchantAmazonInfo {

    asin?: AppendixSerpDaysRatesDataInfo | undefined;

    products?: AppendixSerpDaysRatesDataInfo | undefined;

    sellers?: AppendixSerpDaysRatesDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixMerchantAmazonInfo) {

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
            this.asin = data["asin"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["asin"]) : <any>undefined;
            this.products = data["products"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["products"]) : <any>undefined;
            this.sellers = data["sellers"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["sellers"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixMerchantAmazonInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixMerchantAmazonInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asin"] = this.asin ? AppendixSerpDaysRatesDataInfo.fromJS(this.asin)?.toJSON() : <any>undefined;
        data["products"] = this.products ? AppendixSerpDaysRatesDataInfo.fromJS(this.products)?.toJSON() : <any>undefined;
        data["sellers"] = this.sellers ? AppendixSerpDaysRatesDataInfo.fromJS(this.sellers)?.toJSON() : <any>undefined;
        return data;
    }
}