import { KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo, IKeywordsDataBingKeywordsForSiteTasksReadyTaskInfo } from "./KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo[]

    [key: string]: any;

    }

export class KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo  extends BaseResponseInfo   implements IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo {
    
    /** array of tasks */

    tasks?: KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo[];

    [key: string]: any;


    constructor(data?: IKeywordsDataBingKeywordsForSiteTasksReadyResponseInfo) {
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
                    this.tasks.push(KeywordsDataBingKeywordsForSiteTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingKeywordsForSiteTasksReadyResponseInfo();
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