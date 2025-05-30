import { ApiException, throwException } from "./ApiException"

export interface IDomainAnalyticsWhoisAvailableFiltersResultInfo   {
        
        overview?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class DomainAnalyticsWhoisAvailableFiltersResultInfo  implements IDomainAnalyticsWhoisAvailableFiltersResultInfo {

    overview?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsWhoisAvailableFiltersResultInfo) {

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
            this.overview = data["overview"];
        }
    }

    static fromJS(data: any): DomainAnalyticsWhoisAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsWhoisAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["overview"] = this.overview;
        return data;
    }
}