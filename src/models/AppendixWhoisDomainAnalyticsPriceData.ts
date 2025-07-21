import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";

export interface IAppendixWhoisDomainAnalyticsPriceData   {
        
        overview?: AppendixBingKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixWhoisDomainAnalyticsPriceData  implements IAppendixWhoisDomainAnalyticsPriceData {

    overview?: AppendixBingKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixWhoisDomainAnalyticsPriceData) {

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
            this.overview = data["overview"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["overview"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixWhoisDomainAnalyticsPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixWhoisDomainAnalyticsPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["overview"] = this.overview ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.overview)?.toJSON() : <any>undefined;
        return data;
    }
}