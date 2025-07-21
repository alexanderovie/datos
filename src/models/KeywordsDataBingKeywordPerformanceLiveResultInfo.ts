import { KeywordKpi, IKeywordKpi } from "./KeywordKpi";

export interface IKeywordsDataBingKeywordPerformanceLiveResultInfo   {
        
        /** keyword in a POST array */
        keyword?: string
        
        /** location code in a POST array
if there is no data, then the value is null */
        location_code?: number
        
        /** language code in a POST array
if there is no data, then the value is null */
        language_code?: string
        
        /** indicates the year for which the data is provided for
example:
2020 */
        year?: number
        
        /** indicates the month for which the data is provided for
example:
10 */
        month?: number
        
        /** object containing keyword metrics
if there is no data, then the value is null */
        keyword_kpi?: KeywordKpi

    [key: string]: any;

    }

export class KeywordsDataBingKeywordPerformanceLiveResultInfo  implements IKeywordsDataBingKeywordPerformanceLiveResultInfo {
    
    /** keyword in a POST array */

    keyword?: string;
    
    /** location code in a POST array
if there is no data, then the value is null */

    location_code?: number;
    
    /** language code in a POST array
if there is no data, then the value is null */

    language_code?: string;
    
    /** indicates the year for which the data is provided for
example:
2020 */

    year?: number;
    
    /** indicates the month for which the data is provided for
example:
10 */

    month?: number;
    
    /** object containing keyword metrics
if there is no data, then the value is null */

    keyword_kpi?: KeywordKpi;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordPerformanceLiveResultInfo) {

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
            this.keyword = data["keyword"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.year = data["year"];
            this.month = data["month"];
            this.keyword_kpi = data["keyword_kpi"] ? KeywordKpi.fromJS(data["keyword_kpi"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordPerformanceLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordPerformanceLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["year"] = this.year;
        data["month"] = this.month;
        data["keyword_kpi"] = this.keyword_kpi ? KeywordKpi.fromJS(this.keyword_kpi)?.toJSON() : <any>undefined;
        return data;
    }
}