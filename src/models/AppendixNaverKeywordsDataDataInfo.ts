import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";

export interface IAppendixNaverKeywordsDataDataInfo   {
        
        keywords_for_category?: AppendixInfo
        
        search_volume?: AppendixInfo

    [key: string]: any;

    }

export class AppendixNaverKeywordsDataDataInfo  implements IAppendixNaverKeywordsDataDataInfo {

    keywords_for_category?: AppendixInfo;

    search_volume?: AppendixInfo;

    [key: string]: any;


    constructor(data?: IAppendixNaverKeywordsDataDataInfo) {

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
            this.keywords_for_category = data["keywords_for_category"] ? AppendixInfo.fromJS(data["keywords_for_category"]) : <any>undefined;
            this.search_volume = data["search_volume"] ? AppendixInfo.fromJS(data["search_volume"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixNaverKeywordsDataDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixNaverKeywordsDataDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords_for_category"] = this.keywords_for_category ? AppendixInfo.fromJS(this.keywords_for_category)?.toJSON() : <any>undefined;
        data["search_volume"] = this.search_volume ? AppendixInfo.fromJS(this.search_volume)?.toJSON() : <any>undefined;
        return data;
    }
}