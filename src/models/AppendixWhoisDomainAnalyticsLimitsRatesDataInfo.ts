import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixWhoisDomainAnalyticsLimitsRatesDataInfo   {
        
        overview?: AppendixInfo | undefined

    [key: string]: any;

    }

export class AppendixWhoisDomainAnalyticsLimitsRatesDataInfo  implements IAppendixWhoisDomainAnalyticsLimitsRatesDataInfo {

    overview?: AppendixInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixWhoisDomainAnalyticsLimitsRatesDataInfo) {

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
            this.overview = data["overview"] ? AppendixInfo.fromJS(data["overview"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixWhoisDomainAnalyticsLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixWhoisDomainAnalyticsLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["overview"] = this.overview ? AppendixInfo.fromJS(this.overview)?.toJSON() : <any>undefined;
        return data;
    }
}