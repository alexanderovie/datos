import { ApiException, throwException } from "./ApiException"

export interface IAppendixFunctionTypeInfo   {
        
        regular?: number | undefined
        
        advanced?: number | undefined
        
        html?: number | undefined

    [key: string]: any;

    }

export class AppendixFunctionTypeInfo  implements IAppendixFunctionTypeInfo {

    regular?: number | undefined;

    advanced?: number | undefined;

    html?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixFunctionTypeInfo) {

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
            this.regular = data["regular"];
            this.advanced = data["advanced"];
            this.html = data["html"];
        }
    }

    static fromJS(data: any): AppendixFunctionTypeInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixFunctionTypeInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["regular"] = this.regular;
        data["advanced"] = this.advanced;
        data["html"] = this.html;
        return data;
    }
}