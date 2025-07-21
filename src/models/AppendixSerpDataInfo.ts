import { AppendixFunctionTypeInfo, IAppendixFunctionTypeInfo } from "./AppendixFunctionTypeInfo";
import { AppendixJobsSerpLimitsRatesDataInfo, IAppendixJobsSerpLimitsRatesDataInfo } from "./AppendixJobsSerpLimitsRatesDataInfo";

export interface IAppendixSerpDataInfo   {
        
        task_post?: number
        
        task_get?: AppendixFunctionTypeInfo
        
        tasks_ready?: number
        
        locations?: number
        
        languages?: number
        
        live?: AppendixFunctionTypeInfo
        
        errors?: number
        
        tasks_fixed?: number
        
        jobs?: AppendixJobsSerpLimitsRatesDataInfo
        
        screenshot?: number
        
        tasks_ready_queue?: number

    [key: string]: any;

    }

export class AppendixSerpDataInfo  implements IAppendixSerpDataInfo {

    task_post?: number;

    task_get?: AppendixFunctionTypeInfo;

    tasks_ready?: number;

    locations?: number;

    languages?: number;

    live?: AppendixFunctionTypeInfo;

    errors?: number;

    tasks_fixed?: number;

    jobs?: AppendixJobsSerpLimitsRatesDataInfo;

    screenshot?: number;

    tasks_ready_queue?: number;

    [key: string]: any;


    constructor(data?: IAppendixSerpDataInfo) {

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
            this.task_post = data["task_post"];
            this.task_get = data["task_get"] ? AppendixFunctionTypeInfo.fromJS(data["task_get"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"];
            this.locations = data["locations"];
            this.languages = data["languages"];
            this.live = data["live"] ? AppendixFunctionTypeInfo.fromJS(data["live"]) : <any>undefined;
            this.errors = data["errors"];
            this.tasks_fixed = data["tasks_fixed"];
            this.jobs = data["jobs"] ? AppendixJobsSerpLimitsRatesDataInfo.fromJS(data["jobs"]) : <any>undefined;
            this.screenshot = data["screenshot"];
            this.tasks_ready_queue = data["tasks_ready_queue"];
        }
    }

    static fromJS(data: any): AppendixSerpDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixSerpDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_post"] = this.task_post;
        data["task_get"] = this.task_get ? AppendixFunctionTypeInfo.fromJS(this.task_get)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready;
        data["locations"] = this.locations;
        data["languages"] = this.languages;
        data["live"] = this.live ? AppendixFunctionTypeInfo.fromJS(this.live)?.toJSON() : <any>undefined;
        data["errors"] = this.errors;
        data["tasks_fixed"] = this.tasks_fixed;
        data["jobs"] = this.jobs ? AppendixJobsSerpLimitsRatesDataInfo.fromJS(this.jobs)?.toJSON() : <any>undefined;
        data["screenshot"] = this.screenshot;
        data["tasks_ready_queue"] = this.tasks_ready_queue;
        return data;
    }
}