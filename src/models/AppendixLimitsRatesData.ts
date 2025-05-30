import { AppendixDayLimitsRatesData, IAppendixDayLimitsRatesData } from "./AppendixDayLimitsRatesData";
import { AppendixDataInfo, IAppendixDataInfo } from "./AppendixDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixLimitsRatesData   {
        
        day?: AppendixDayLimitsRatesData | undefined
        
        minute?: AppendixDataInfo | undefined

    [key: string]: any;

    }

export class AppendixLimitsRatesData  implements IAppendixLimitsRatesData {

    day?: AppendixDayLimitsRatesData | undefined;

    minute?: AppendixDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixLimitsRatesData) {

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
            this.day = data["day"] ? AppendixDayLimitsRatesData.fromJS(data["day"]) : <any>undefined;
            this.minute = data["minute"] ? AppendixDataInfo.fromJS(data["minute"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixLimitsRatesData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixLimitsRatesData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["day"] = this.day ? AppendixDayLimitsRatesData.fromJS(this.day)?.toJSON() : <any>undefined;
        data["minute"] = this.minute ? AppendixDataInfo.fromJS(this.minute)?.toJSON() : <any>undefined;
        return data;
    }
}