import { KeywordsDataBingKeywordsForKeywordsLiveTaskInfo, IKeywordsDataBingKeywordsForKeywordsLiveTaskInfo } from "./KeywordsDataBingKeywordsForKeywordsLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataBingKeywordsForKeywordsLiveTaskInfo[]

    [key: string]: any;

    }

export class KeywordsDataBingKeywordsForKeywordsLiveResponseInfo  extends BaseResponseInfo   implements IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo {
    
    /** array of tasks */

    tasks?: KeywordsDataBingKeywordsForKeywordsLiveTaskInfo[];

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordsForKeywordsLiveResponseInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["tasks"])) {
                this.tasks = [];
                for (let item of data["tasks"]) {
                    this.tasks.push(KeywordsDataBingKeywordsForKeywordsLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordsForKeywordsLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordsForKeywordsLiveResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["tasks"] = null;
        if (Array.isArray(this.tasks)) {
            data["tasks"] = [];
            for (let item of this.tasks) {
                if (item && typeof item.toJSON === "function") {
                    data["tasks"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}