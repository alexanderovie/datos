import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";
import { GooglePlayRankedSerpElementInfo, IGooglePlayRankedSerpElementInfo } from "./GooglePlayRankedSerpElementInfo";

export interface IDataforseoLabsGoogleKeywordsForAppLiveItem   {
        
        /** search engine type */
        se_type?: string
        
        /** keyword data for the returned keyword */
        keyword_data?: KeywordDataInfo
        
        /** contains data on the domain’s SERP element found for the returned keyword */
        ranked_serp_element?: GooglePlayRankedSerpElementInfo

    [key: string]: any;

    }

export class DataforseoLabsGoogleKeywordsForAppLiveItem  implements IDataforseoLabsGoogleKeywordsForAppLiveItem {
    
    /** search engine type */

    se_type?: string;
    
    /** keyword data for the returned keyword */

    keyword_data?: KeywordDataInfo;
    
    /** contains data on the domain’s SERP element found for the returned keyword */

    ranked_serp_element?: GooglePlayRankedSerpElementInfo;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleKeywordsForAppLiveItem) {

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
            this.se_type = data["se_type"];
            this.keyword_data = data["keyword_data"] ? KeywordDataInfo.fromJS(data["keyword_data"]) : <any>undefined;
            this.ranked_serp_element = data["ranked_serp_element"] ? GooglePlayRankedSerpElementInfo.fromJS(data["ranked_serp_element"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleKeywordsForAppLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleKeywordsForAppLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword_data"] = this.keyword_data ? KeywordDataInfo.fromJS(this.keyword_data)?.toJSON() : <any>undefined;
        data["ranked_serp_element"] = this.ranked_serp_element ? GooglePlayRankedSerpElementInfo.fromJS(this.ranked_serp_element)?.toJSON() : <any>undefined;
        return data;
    }
}