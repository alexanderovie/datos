import { ApiException, throwException } from "./ApiException"

export interface IMonthlySearches   {
        
        /** year */
        year?: number | undefined
        
        /** month */
        month?: number | undefined
        
        /** monthly average search volume rate */
        search_volume?: number | undefined

    [key: string]: any;

    }

export class MonthlySearches  implements IMonthlySearches {
    
    /** year */

    year?: number | undefined;
    
    /** month */

    month?: number | undefined;
    
    /** monthly average search volume rate */

    search_volume?: number | undefined;

    [key: string]: any;


    constructor(data?: IMonthlySearches) {

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
            this.year = data["year"];
            this.month = data["month"];
            this.search_volume = data["search_volume"];
        }
    }

    static fromJS(data: any): MonthlySearches {
        data = typeof data === 'object' ? data : {};


        let result = new MonthlySearches();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["year"] = this.year;
        data["month"] = this.month;
        data["search_volume"] = this.search_volume;
        return data;
    }
}