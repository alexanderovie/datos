export interface IAppendixAppendixDaysRatesDataInfo   {
        
        user_data?: number | undefined
        
        errors?: number | undefined

    [key: string]: any;

    }

export class AppendixAppendixDaysRatesDataInfo  implements IAppendixAppendixDaysRatesDataInfo {

    user_data?: number | undefined;

    errors?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixAppendixDaysRatesDataInfo) {

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
            this.user_data = data["user_data"];
            this.errors = data["errors"];
        }
    }

    static fromJS(data: any): AppendixAppendixDaysRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAppendixDaysRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["user_data"] = this.user_data;
        data["errors"] = this.errors;
        return data;
    }
}