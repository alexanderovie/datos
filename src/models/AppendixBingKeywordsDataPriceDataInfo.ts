import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixBingKeywordsDataPriceDataInfo   {
        
        live?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixBingKeywordsDataPriceDataInfo  implements IAppendixBingKeywordsDataPriceDataInfo {

    live?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBingKeywordsDataPriceDataInfo) {

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
            this.live = data["live"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["live"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBingKeywordsDataPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBingKeywordsDataPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["live"] = this.live ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.live)?.toJSON() : <any>undefined;
        return data;
    }
}