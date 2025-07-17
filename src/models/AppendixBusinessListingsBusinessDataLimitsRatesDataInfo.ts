import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";


export interface IAppendixBusinessListingsBusinessDataLimitsRatesDataInfo   {
        
        search?: AppendixInfo | undefined
        
        categories_aggregation?: AppendixInfo | undefined
        
        categories?: number | undefined
        
        locations?: number | undefined

    [key: string]: any;

    }

export class AppendixBusinessListingsBusinessDataLimitsRatesDataInfo  implements IAppendixBusinessListingsBusinessDataLimitsRatesDataInfo {

    search?: AppendixInfo | undefined;

    categories_aggregation?: AppendixInfo | undefined;

    categories?: number | undefined;

    locations?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBusinessListingsBusinessDataLimitsRatesDataInfo) {

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
            this.search = data["search"] ? AppendixInfo.fromJS(data["search"]) : <any>undefined;
            this.categories_aggregation = data["categories_aggregation"] ? AppendixInfo.fromJS(data["categories_aggregation"]) : <any>undefined;
            this.categories = data["categories"];
            this.locations = data["locations"];
        }
    }

    static fromJS(data: any): AppendixBusinessListingsBusinessDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBusinessListingsBusinessDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search"] = this.search ? AppendixInfo.fromJS(this.search)?.toJSON() : <any>undefined;
        data["categories_aggregation"] = this.categories_aggregation ? AppendixInfo.fromJS(this.categories_aggregation)?.toJSON() : <any>undefined;
        data["categories"] = this.categories;
        data["locations"] = this.locations;
        return data;
    }
}