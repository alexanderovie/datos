import { SerpGoogleAiModeTasksFixedResultInfo, ISerpGoogleAiModeTasksFixedResultInfo } from "./SerpGoogleAiModeTasksFixedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpGoogleAiModeTasksFixedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleAiModeTasksFixedResultInfo[]

    [key: string]: any;

    }

export class SerpGoogleAiModeTasksFixedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleAiModeTasksFixedTaskInfo {
    
    /** array of results */

    result?: SerpGoogleAiModeTasksFixedResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleAiModeTasksFixedTaskInfo) {
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
                    this.result.push(SerpGoogleAiModeTasksFixedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleAiModeTasksFixedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAiModeTasksFixedTaskInfo();
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