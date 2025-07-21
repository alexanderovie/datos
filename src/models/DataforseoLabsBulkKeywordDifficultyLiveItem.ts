export interface IDataforseoLabsBulkKeywordDifficultyLiveItem   {
        
        /** search engine type */
        se_type?: string
        
        /** keyword in a POST array */
        keyword?: string
        
        /** difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide */
        keyword_difficulty?: number

    [key: string]: any;

    }

export class DataforseoLabsBulkKeywordDifficultyLiveItem  implements IDataforseoLabsBulkKeywordDifficultyLiveItem {
    
    /** search engine type */

    se_type?: string;
    
    /** keyword in a POST array */

    keyword?: string;
    
    /** difficulty of ranking in the first top-10 organic results for a keyword
indicates the chance of getting in top-10 organic results for a keyword on a logarithmic scale from 0 to 100;
calculated by analysing, among other parameters, link profiles of the first 10 pages in SERP;
learn more about the metric in this help center guide */

    keyword_difficulty?: number;

    [key: string]: any;


    constructor(data?: IDataforseoLabsBulkKeywordDifficultyLiveItem) {

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
            this.keyword = data["keyword"];
            this.keyword_difficulty = data["keyword_difficulty"];
        }
    }

    static fromJS(data: any): DataforseoLabsBulkKeywordDifficultyLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBulkKeywordDifficultyLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["keyword"] = this.keyword;
        data["keyword_difficulty"] = this.keyword_difficulty;
        return data;
    }
}