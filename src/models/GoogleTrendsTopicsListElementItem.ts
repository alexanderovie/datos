import { TrendsTopicListDataInfo, ITrendsTopicListDataInfo } from "./TrendsTopicListDataInfo";
import { BaseGoogleTrendsItem, IBaseGoogleTrendsItem } from "./BaseGoogleTrendsItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleTrendsTopicsListElementItem  extends IBaseGoogleTrendsItem    {
        
        /** Google Trends data from the corresponding item */
        data?: TrendsTopicListDataInfo | undefined

    [key: string]: any;

    }

export class GoogleTrendsTopicsListElementItem  extends BaseGoogleTrendsItem   implements IGoogleTrendsTopicsListElementItem {
    
    /** Google Trends data from the corresponding item */

    data?: TrendsTopicListDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsTopicsListElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.data = data["data"] ? TrendsTopicListDataInfo.fromJS(data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleTrendsTopicsListElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsTopicsListElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = this.data ? TrendsTopicListDataInfo.fromJS(this.data)?.toJSON() : <any>undefined;
        return data;
    }
}