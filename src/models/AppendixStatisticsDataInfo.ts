import { AppendixStatisticsRatesDataInfo, IAppendixStatisticsRatesDataInfo } from "./AppendixStatisticsRatesDataInfo";

export interface IAppendixStatisticsDataInfo   {
        
        day?: AppendixStatisticsRatesDataInfo
        
        minute?: AppendixStatisticsRatesDataInfo

    [key: string]: any;

    }

export class AppendixStatisticsDataInfo  implements IAppendixStatisticsDataInfo {

    day?: AppendixStatisticsRatesDataInfo;

    minute?: AppendixStatisticsRatesDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixStatisticsDataInfo) {

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
            this.day = data["day"] ? AppendixStatisticsRatesDataInfo.fromJS(data["day"]) : <any>undefined;
            this.minute = data["minute"] ? AppendixStatisticsRatesDataInfo.fromJS(data["minute"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixStatisticsDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixStatisticsDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["day"] = this.day ? AppendixStatisticsRatesDataInfo.fromJS(this.day)?.toJSON() : <any>undefined;
        data["minute"] = this.minute ? AppendixStatisticsRatesDataInfo.fromJS(this.minute)?.toJSON() : <any>undefined;
        return data;
    }
}