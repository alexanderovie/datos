import { AppendixDataInfo, IAppendixDataInfo } from "./AppendixDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixLimitsMoneyData   {
        
        day?: AppendixDataInfo | undefined
        
        minute?: AppendixDataInfo | undefined

    [key: string]: any;

    }

export class AppendixLimitsMoneyData  implements IAppendixLimitsMoneyData {

    day?: AppendixDataInfo | undefined;

    minute?: AppendixDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixLimitsMoneyData) {

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
            this.day = data["day"] ? AppendixDataInfo.fromJS(data["day"]) : <any>undefined;
            this.minute = data["minute"] ? AppendixDataInfo.fromJS(data["minute"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixLimitsMoneyData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixLimitsMoneyData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["day"] = this.day ? AppendixDataInfo.fromJS(this.day)?.toJSON() : <any>undefined;
        data["minute"] = this.minute ? AppendixDataInfo.fromJS(this.minute)?.toJSON() : <any>undefined;
        return data;
    }
}