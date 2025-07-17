import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixTaskGetPriceDataInfo   {
        
        advanced?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixTaskGetPriceDataInfo  implements IAppendixTaskGetPriceDataInfo {

    advanced?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixTaskGetPriceDataInfo) {

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
            this.advanced = data["advanced"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["advanced"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixTaskGetPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixTaskGetPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["advanced"] = this.advanced ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.advanced)?.toJSON() : <any>undefined;
        return data;
    }
}