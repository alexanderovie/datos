import { AppendixProductGoogleMerchantPriceDataInfo, IAppendixProductGoogleMerchantPriceDataInfo } from "./AppendixProductGoogleMerchantPriceDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixAmazonMerchantPriceData   {
        
        asin?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        products?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        sellers?: AppendixProductGoogleMerchantPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAmazonMerchantPriceData  implements IAppendixAmazonMerchantPriceData {

    asin?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    products?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    sellers?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAmazonMerchantPriceData) {

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
            this.asin = data["asin"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["asin"]) : <any>undefined;
            this.products = data["products"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["products"]) : <any>undefined;
            this.sellers = data["sellers"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["sellers"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAmazonMerchantPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAmazonMerchantPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asin"] = this.asin ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.asin)?.toJSON() : <any>undefined;
        data["products"] = this.products ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.products)?.toJSON() : <any>undefined;
        data["sellers"] = this.sellers ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.sellers)?.toJSON() : <any>undefined;
        return data;
    }
}