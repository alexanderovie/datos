import { AppendixPriceDataInfo, IAppendixPriceDataInfo } from "./AppendixPriceDataInfo";
import { AppendixProductGoogleMerchantPriceDataInfo, IAppendixProductGoogleMerchantPriceDataInfo } from "./AppendixProductGoogleMerchantPriceDataInfo";
import { AppendixSellersGoogleMerchantPriceData, IAppendixSellersGoogleMerchantPriceData } from "./AppendixSellersGoogleMerchantPriceData";


export interface IAppendixGoogleMerchantPriceData   {
        
        product_info?: AppendixPriceDataInfo | undefined
        
        product_spec?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        products?: AppendixProductGoogleMerchantPriceDataInfo | undefined
        
        sellers?: AppendixSellersGoogleMerchantPriceData | undefined

    [key: string]: any;

    }

export class AppendixGoogleMerchantPriceData  implements IAppendixGoogleMerchantPriceData {

    product_info?: AppendixPriceDataInfo | undefined;

    product_spec?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    products?: AppendixProductGoogleMerchantPriceDataInfo | undefined;

    sellers?: AppendixSellersGoogleMerchantPriceData | undefined;

    [key: string]: any;


    constructor(data?: IAppendixGoogleMerchantPriceData) {

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
            this.product_info = data["product_info"] ? AppendixPriceDataInfo.fromJS(data["product_info"]) : <any>undefined;
            this.product_spec = data["product_spec"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["product_spec"]) : <any>undefined;
            this.products = data["products"] ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(data["products"]) : <any>undefined;
            this.sellers = data["sellers"] ? AppendixSellersGoogleMerchantPriceData.fromJS(data["sellers"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixGoogleMerchantPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixGoogleMerchantPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["product_info"] = this.product_info ? AppendixPriceDataInfo.fromJS(this.product_info)?.toJSON() : <any>undefined;
        data["product_spec"] = this.product_spec ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.product_spec)?.toJSON() : <any>undefined;
        data["products"] = this.products ? AppendixProductGoogleMerchantPriceDataInfo.fromJS(this.products)?.toJSON() : <any>undefined;
        data["sellers"] = this.sellers ? AppendixSellersGoogleMerchantPriceData.fromJS(this.sellers)?.toJSON() : <any>undefined;
        return data;
    }
}