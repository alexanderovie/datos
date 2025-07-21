import { AppendixGoogleBusinessDataPriceDataInfo, IAppendixGoogleBusinessDataPriceDataInfo } from "./AppendixGoogleBusinessDataPriceDataInfo";

export interface IAppendixTrBusinessDataPriceDataInfo   {
        
        reviews?: AppendixGoogleBusinessDataPriceDataInfo
        
        search?: AppendixGoogleBusinessDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixTrBusinessDataPriceDataInfo  implements IAppendixTrBusinessDataPriceDataInfo {

    reviews?: AppendixGoogleBusinessDataPriceDataInfo;

    search?: AppendixGoogleBusinessDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixTrBusinessDataPriceDataInfo) {

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
            this.reviews = data["reviews"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["reviews"]) : <any>undefined;
            this.search = data["search"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["search"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixTrBusinessDataPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixTrBusinessDataPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["reviews"] = this.reviews ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        data["search"] = this.search ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        return data;
    }
}