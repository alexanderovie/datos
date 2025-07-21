export interface ITopDomainInfo   {
        
        domain?: string
        
        count?: number

    [key: string]: any;

    }

export class TopDomainInfo  implements ITopDomainInfo {

    domain?: string;

    count?: number;

    [key: string]: any;


    constructor(data?: ITopDomainInfo) {

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

    static fromJS(data: any): TopDomainInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TopDomainInfo();
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