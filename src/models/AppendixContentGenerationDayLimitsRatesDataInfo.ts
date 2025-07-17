export interface IAppendixContentGenerationDayLimitsRatesDataInfo   {
        
        live?: number | undefined
        
        languages?: number | undefined

    [key: string]: any;

    }

export class AppendixContentGenerationDayLimitsRatesDataInfo  implements IAppendixContentGenerationDayLimitsRatesDataInfo {

    live?: number | undefined;

    languages?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixContentGenerationDayLimitsRatesDataInfo) {

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
            this.live = data["live"];
            this.languages = data["languages"];
        }
    }

    static fromJS(data: any): AppendixContentGenerationDayLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixContentGenerationDayLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["live"] = this.live;
        data["languages"] = this.languages;
        return data;
    }
}