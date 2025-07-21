export interface IAppendixAppendixDataInfo   {
        
        user_data?: number
        
        errors?: number
        
        status?: number
        
        test?: number

    [key: string]: any;

    }

export class AppendixAppendixDataInfo  implements IAppendixAppendixDataInfo {

    user_data?: number;

    errors?: number;

    status?: number;

    test?: number;

    [key: string]: any;


    constructor(data?: IAppendixAppendixDataInfo) {

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
            this.status = data["status"];
            this.test = data["test"];
        }
    }

    static fromJS(data: any): AppendixAppendixDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixAppendixDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["user_data"] = this.user_data;
        data["errors"] = this.errors;
        data["status"] = this.status;
        data["test"] = this.test;
        return data;
    }
}