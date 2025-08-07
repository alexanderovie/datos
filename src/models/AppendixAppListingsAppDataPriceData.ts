import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";


export interface IAppendixAppListingsAppDataPriceData   {
        
        categories_aggregation?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        search?: AppendixBingKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixAppListingsAppDataPriceData  implements IAppendixAppListingsAppDataPriceData {

    categories_aggregation?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    search?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAppListingsAppDataPriceData) {

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
            this.categories_aggregation = data["categories_aggregation"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["categories_aggregation"]) : <any>undefined;
            this.search = data["search"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["search"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixAppListingsAppDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAppListingsAppDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["categories_aggregation"] = this.categories_aggregation ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.categories_aggregation)?.toJSON() : <any>undefined;
        data["search"] = this.search ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        return data;
    }
}