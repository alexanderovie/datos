import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";
import { RankedSerpElement, IRankedSerpElement } from "./RankedSerpElement";

export interface IDataforseoLabsRankedKeywordsLiveItem   {
        
        /** search engine type */
        se_type?: string
        
        /** keyword data for the returned keyword */
        keyword_data?: KeywordDataInfo
        
        /** contains data on the domain’s SERP element found for the returned keyword */
        ranked_serp_element?: RankedSerpElement

    [key: string]: any;

    }

export class DataforseoLabsRankedKeywordsLiveItem  implements IDataforseoLabsRankedKeywordsLiveItem {
    
    /** search engine type */

    se_type?: string;
    
    /** keyword data for the returned keyword */

    keyword_data?: KeywordDataInfo;
    
    /** contains data on the domain’s SERP element found for the returned keyword */

    ranked_serp_element?: RankedSerpElement;

    [key: string]: any;


    constructor(data?: IDataforseoLabsRankedKeywordsLiveItem) {

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
            this.ranked_serp_element = data["ranked_serp_element"] ? RankedSerpElement.fromJS(data["ranked_serp_element"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoLabsRankedKeywordsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsRankedKeywordsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword_data"] = this.keyword_data ? KeywordDataInfo.fromJS(this.keyword_data)?.toJSON() : <any>undefined;
        data["ranked_serp_element"] = this.ranked_serp_element ? RankedSerpElement.fromJS(this.ranked_serp_element)?.toJSON() : <any>undefined;
        return data;
    }
}