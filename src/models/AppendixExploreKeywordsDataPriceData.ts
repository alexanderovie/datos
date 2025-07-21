import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";

export interface IAppendixExploreKeywordsDataPriceData   {
        
        live?: AppendixTaskKeywordsDataPriceDataInfo
        
        task_get?: AppendixTaskKeywordsDataPriceDataInfo
        
        task_post?: AppendixTaskKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixExploreKeywordsDataPriceData  implements IAppendixExploreKeywordsDataPriceData {

    live?: AppendixTaskKeywordsDataPriceDataInfo;

    task_get?: AppendixTaskKeywordsDataPriceDataInfo;

    task_post?: AppendixTaskKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixExploreKeywordsDataPriceData) {

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
            this.task_get = data["task_get"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_get"]) : <any>undefined;
            this.task_post = data["task_post"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_post"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixExploreKeywordsDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixExploreKeywordsDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["live"] = this.live ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.live)?.toJSON() : <any>undefined;
        data["task_get"] = this.task_get ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["task_post"] = this.task_post ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_post)?.toJSON() : <any>undefined;
        return data;
    }
}