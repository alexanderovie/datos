import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";


export interface IAppendixAKeywordsDataPriceDataInfo   {
        
        task_get?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAKeywordsDataPriceDataInfo  implements IAppendixAKeywordsDataPriceDataInfo {

    task_get?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    task_post?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAKeywordsDataPriceDataInfo) {

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
            this.task_get = data["task_get"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_get"]) : <any>undefined;
            this.task_post = data["task_post"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_post"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAKeywordsDataPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAKeywordsDataPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_get"] = this.task_get ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["task_post"] = this.task_post ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_post)?.toJSON() : <any>undefined;
        return data;
    }
}