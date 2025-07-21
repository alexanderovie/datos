import { KeywordsDataGoogleTrendsCategoriesResultInfo, IKeywordsDataGoogleTrendsCategoriesResultInfo } from "./KeywordsDataGoogleTrendsCategoriesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IKeywordsDataGoogleTrendsCategoriesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataGoogleTrendsCategoriesResultInfo[]

    [key: string]: any;

    }

export class KeywordsDataGoogleTrendsCategoriesTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataGoogleTrendsCategoriesTaskInfo {
    
    /** array of results */

    result?: KeywordsDataGoogleTrendsCategoriesResultInfo[];

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleTrendsCategoriesTaskInfo) {
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
                    this.result.push(KeywordsDataGoogleTrendsCategoriesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleTrendsCategoriesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleTrendsCategoriesTaskInfo();
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