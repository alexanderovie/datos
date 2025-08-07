import { AppendixPriorityTasksReadyKeywordsDataPriceDataInfo, IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo } from "./AppendixPriorityTasksReadyKeywordsDataPriceDataInfo";


export interface IAppendixTaskKeywordsDataPriceDataInfo   {
        
        priority_low?: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo[] | undefined
        
        priority_normal?: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo[] | undefined
        
        priority_high?: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo[] | undefined

    [key: string]: any;

    }

export class AppendixTaskKeywordsDataPriceDataInfo  implements IAppendixTaskKeywordsDataPriceDataInfo {

    priority_low?: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo[] | undefined;

    priority_normal?: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo[] | undefined;

    priority_high?: AppendixPriorityTasksReadyKeywordsDataPriceDataInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAppendixTaskKeywordsDataPriceDataInfo) {

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
            if (Array.isArray(data["priority_low"])) {
                this.priority_low = [];
                for (let item of data["priority_low"]) {
                    this.priority_low.push(AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["priority_normal"])) {
                this.priority_normal = [];
                for (let item of data["priority_normal"]) {
                    this.priority_normal.push(AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["priority_high"])) {
                this.priority_high = [];
                for (let item of data["priority_high"]) {
                    this.priority_high.push(AppendixPriorityTasksReadyKeywordsDataPriceDataInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppendixTaskKeywordsDataPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixTaskKeywordsDataPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["priority_low"] = null;
        if (Array.isArray(this.priority_low)) {
            data["priority_low"] = [];
            for (let item of this.priority_low) {
                if (item && typeof item.toJSON === "function") {
                    data["priority_low"].push(item?.toJSON());
                }
            }
        }
        data["priority_normal"] = null;
        if (Array.isArray(this.priority_normal)) {
            data["priority_normal"] = [];
            for (let item of this.priority_normal) {
                if (item && typeof item.toJSON === "function") {
                    data["priority_normal"].push(item?.toJSON());
                }
            }
        }
        data["priority_high"] = null;
        if (Array.isArray(this.priority_high)) {
            data["priority_high"] = [];
            for (let item of this.priority_high) {
                if (item && typeof item.toJSON === "function") {
                    data["priority_high"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}