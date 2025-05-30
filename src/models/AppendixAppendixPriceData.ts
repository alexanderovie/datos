import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixAppendixPriceData   {
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        user_data?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAppendixPriceData  implements IAppendixAppendixPriceData {

    errors?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    user_data?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAppendixPriceData) {

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
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.user_data = data["user_data"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["user_data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAppendixPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAppendixPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["user_data"] = this.user_data ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.user_data)?.toJSON() : <any>undefined;
        return data;
    }
}