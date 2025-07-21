import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";

export interface IAppendixContentGenerationPriceDataInfo   {
        
        live?: AppendixTaskKeywordsDataPriceDataInfo
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixContentGenerationPriceDataInfo  implements IAppendixContentGenerationPriceDataInfo {

    live?: AppendixTaskKeywordsDataPriceDataInfo;

    languages?: AppendixTaskKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixContentGenerationPriceDataInfo) {

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
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixContentGenerationPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixContentGenerationPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["live"] = this.live ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.live)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        return data;
    }
}