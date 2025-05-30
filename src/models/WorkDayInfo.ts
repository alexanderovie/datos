import { WorkTimeInfo, IWorkTimeInfo } from "./WorkTimeInfo";
import { ApiException, throwException } from "./ApiException"

export interface IWorkDayInfo   {
        
        /** opening time */
        open?: WorkTimeInfo | undefined
        
        /** closing time */
        close?: WorkTimeInfo | undefined

    [key: string]: any;

    }

export class WorkDayInfo  implements IWorkDayInfo {
    
    /** opening time */

    open?: WorkTimeInfo | undefined;
    
    /** closing time */

    close?: WorkTimeInfo | undefined;

    [key: string]: any;


    constructor(data?: IWorkDayInfo) {

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
            this.open = data["open"] ? WorkTimeInfo.fromJS(data["open"]) : <any>undefined;
            this.close = data["close"] ? WorkTimeInfo.fromJS(data["close"]) : <any>undefined;
        }
    }

    static fromJS(data: any): WorkDayInfo {
        data = typeof data === 'object' ? data : {};


        let result = new WorkDayInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["open"] = this.open ? WorkTimeInfo.fromJS(this.open)?.toJSON() : <any>undefined;
        data["close"] = this.close ? WorkTimeInfo.fromJS(this.close)?.toJSON() : <any>undefined;
        return data;
    }
}