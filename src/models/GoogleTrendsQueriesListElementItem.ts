import { QueriesListDataInfo, IQueriesListDataInfo } from "./QueriesListDataInfo";
import { BaseGoogleTrendsItem, IBaseGoogleTrendsItem } from "./BaseGoogleTrendsItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleTrendsQueriesListElementItem  extends IBaseGoogleTrendsItem    {
        
        /** Google Trends data from the corresponding item */
        data?: QueriesListDataInfo | undefined

    [key: string]: any;

    }

export class GoogleTrendsQueriesListElementItem  extends BaseGoogleTrendsItem   implements IGoogleTrendsQueriesListElementItem {
    
    /** Google Trends data from the corresponding item */

    data?: QueriesListDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsQueriesListElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.data = data["data"] ? QueriesListDataInfo.fromJS(data["data"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleTrendsQueriesListElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsQueriesListElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = this.data ? QueriesListDataInfo.fromJS(this.data)?.toJSON() : <any>undefined;
        return data;
    }
}