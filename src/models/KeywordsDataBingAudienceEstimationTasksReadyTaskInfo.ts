import { KeywordsDataBingAudienceEstimationTasksReadyResultInfo, IKeywordsDataBingAudienceEstimationTasksReadyResultInfo } from "./KeywordsDataBingAudienceEstimationTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IKeywordsDataBingAudienceEstimationTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataBingAudienceEstimationTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingAudienceEstimationTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataBingAudienceEstimationTasksReadyTaskInfo {
    
    /** array of results */

    result?: KeywordsDataBingAudienceEstimationTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingAudienceEstimationTasksReadyTaskInfo) {
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
                    this.result.push(KeywordsDataBingAudienceEstimationTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingAudienceEstimationTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingAudienceEstimationTasksReadyTaskInfo();
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