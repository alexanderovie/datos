import { QueriesListDataItemInfo, IQueriesListDataItemInfo } from "./QueriesListDataItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface IQueriesListDataInfo   {
        
        /** the most popular related topics
represents the list of the most popular related topics */
        top?: QueriesListDataItemInfo[] | undefined
        
        /** emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period */
        rising?: QueriesListDataItemInfo[] | undefined

    [key: string]: any;

    }

export class QueriesListDataInfo  implements IQueriesListDataInfo {
    
    /** the most popular related topics
represents the list of the most popular related topics */

    top?: QueriesListDataItemInfo[] | undefined;
    
    /** emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period */

    rising?: QueriesListDataItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IQueriesListDataInfo) {

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
            if (Array.isArray(data["top"])) {
                this.top = [];
                for (let item of data["top"]) {
                    this.top.push(QueriesListDataItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["rising"])) {
                this.rising = [];
                for (let item of data["rising"]) {
                    this.rising.push(QueriesListDataItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): QueriesListDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new QueriesListDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["top"] = null;
        if (Array.isArray(this.top)) {
            data["top"] = [];
            for (let item of this.top) {
                if (item && typeof item.toJSON === "function") {
                    data["top"].push(item?.toJSON());
                }
            }
        }
        data["rising"] = null;
        if (Array.isArray(this.rising)) {
            data["rising"] = [];
            for (let item of this.rising) {
                if (item && typeof item.toJSON === "function") {
                    data["rising"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}