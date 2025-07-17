import { KeywordDataInfo, IKeywordDataInfo } from "./KeywordDataInfo";


export interface IDataforseoLabsRelatedKeywordsLiveItem   {
        
        /** search engine type
possible values: google */
        se_type?: string | undefined
        
        /** keyword data for the returned keyword */
        keyword_data?: KeywordDataInfo | undefined
        
        /** keyword search depth */
        depth?: number | undefined
        
        /** list of related keywords
represents the list of search queries which are related to the keyword returned in the array above */
        related_keywords?: string[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsRelatedKeywordsLiveItem  implements IDataforseoLabsRelatedKeywordsLiveItem {
    
    /** search engine type
possible values: google */

    se_type?: string | undefined;
    
    /** keyword data for the returned keyword */

    keyword_data?: KeywordDataInfo | undefined;
    
    /** keyword search depth */

    depth?: number | undefined;
    
    /** list of related keywords
represents the list of search queries which are related to the keyword returned in the array above */

    related_keywords?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsRelatedKeywordsLiveItem) {

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
            this.depth = data["depth"];
            this.related_keywords = data["related_keywords"];
        }
    }

    static fromJS(data: any): DataforseoLabsRelatedKeywordsLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsRelatedKeywordsLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword_data"] = this.keyword_data ? KeywordDataInfo.fromJS(this.keyword_data)?.toJSON() : <any>undefined;
        data["depth"] = this.depth;
        data["related_keywords"] = this.related_keywords;
        return data;
    }
}