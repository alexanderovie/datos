import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";

export interface IAppendixBusinessListingsBusinessDataPriceData   {
        
        categories?: AppendixTaskKeywordsDataPriceDataInfo
        
        categories_aggregation?: AppendixBingKeywordsDataPriceDataInfo
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo
        
        search?: AppendixBingKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixBusinessListingsBusinessDataPriceData  implements IAppendixBusinessListingsBusinessDataPriceData {

    categories?: AppendixTaskKeywordsDataPriceDataInfo;

    categories_aggregation?: AppendixBingKeywordsDataPriceDataInfo;

    locations?: AppendixTaskKeywordsDataPriceDataInfo;

    search?: AppendixBingKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixBusinessListingsBusinessDataPriceData) {

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
            this.categories = data["categories"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["categories"]) : <any>undefined;
            this.categories_aggregation = data["categories_aggregation"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["categories_aggregation"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.search = data["search"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["search"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBusinessListingsBusinessDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBusinessListingsBusinessDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["categories"] = this.categories ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.categories)?.toJSON() : <any>undefined;
        data["categories_aggregation"] = this.categories_aggregation ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.categories_aggregation)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["search"] = this.search ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        return data;
    }
}