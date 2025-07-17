import { TopicListDataItemInfo, ITopicListDataItemInfo } from "./TopicListDataItemInfo";


export interface ITrendsTopicListDataInfo   {
        
        /** the most popular related topics
represents the list of the most popular related topics */
        top?: TopicListDataItemInfo[] | undefined
        
        /** emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period */
        rising?: TopicListDataItemInfo[] | undefined

    [key: string]: any;

    }

export class TrendsTopicListDataInfo  implements ITrendsTopicListDataInfo {
    
    /** the most popular related topics
represents the list of the most popular related topics */

    top?: TopicListDataItemInfo[] | undefined;
    
    /** emerging related topics
represents the list of related topics with the biggest increase in search frequency since the last time period */

    rising?: TopicListDataItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ITrendsTopicListDataInfo) {

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
                    this.top.push(TopicListDataItemInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["rising"])) {
                this.rising = [];
                for (let item of data["rising"]) {
                    this.rising.push(TopicListDataItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): TrendsTopicListDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TrendsTopicListDataInfo();
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