import { KeywordsDataBingAudienceEstimationTaskGetResultInfo, IKeywordsDataBingAudienceEstimationTaskGetResultInfo } from "./KeywordsDataBingAudienceEstimationTaskGetResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IKeywordsDataBingAudienceEstimationTaskGetTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataBingAudienceEstimationTaskGetResultInfo[]

    [key: string]: any;

    }

export class KeywordsDataBingAudienceEstimationTaskGetTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataBingAudienceEstimationTaskGetTaskInfo {
    
    /** array of results */

    result?: KeywordsDataBingAudienceEstimationTaskGetResultInfo[];

    [key: string]: any;


    constructor(data?: IKeywordsDataBingAudienceEstimationTaskGetTaskInfo) {
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
                    this.result.push(KeywordsDataBingAudienceEstimationTaskGetResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingAudienceEstimationTaskGetTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingAudienceEstimationTaskGetTaskInfo();
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