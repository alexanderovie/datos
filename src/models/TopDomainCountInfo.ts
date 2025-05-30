import { ApiException, throwException } from "./ApiException"

export interface ITopDomainCountInfo   {
        
        domain?: string | undefined
        
        count?: number | undefined

    [key: string]: any;

    }

export class TopDomainCountInfo  implements ITopDomainCountInfo {

    domain?: string | undefined;

    count?: number | undefined;

    [key: string]: any;


    constructor(data?: ITopDomainCountInfo) {

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
            this.domain = data["domain"];
            this.count = data["count"];
        }
    }

    static fromJS(data: any): TopDomainCountInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TopDomainCountInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["domain"] = this.domain;
        data["count"] = this.count;
        return data;
    }
}