import { KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo, IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo } from "./KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo[]

    [key: string]: any;

    }

export class KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo {
    
    /** array of results */

    result?: KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo[];

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["result"])) {
                this.result = [];
                for (let item of data["result"]) {
                    this.result.push(KeywordsDataBingKeywordPerformanceLocationsAndLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordPerformanceLocationsAndLanguagesTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = null;
        if (Array.isArray(this.result)) {
            data["result"] = [];
            for (let item of this.result) {
                if (item && typeof item.toJSON === "function") {
                    data["result"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}