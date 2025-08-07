export interface IAppendixJobsSerpLimitsRatesDataInfo   {
        
        task_post?: number | undefined

    [key: string]: any;

    }

export class AppendixJobsSerpLimitsRatesDataInfo  implements IAppendixJobsSerpLimitsRatesDataInfo {

    task_post?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixJobsSerpLimitsRatesDataInfo) {

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
            this.task_post = data["task_post"];
        }
    }

    static fromJS(data: any): AppendixJobsSerpLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixJobsSerpLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["task_post"] = this.task_post;
        return data;
    }
}