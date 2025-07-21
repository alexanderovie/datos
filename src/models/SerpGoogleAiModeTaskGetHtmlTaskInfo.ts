import { SerpGoogleAiModeTaskGetHtmlResultInfo, ISerpGoogleAiModeTaskGetHtmlResultInfo } from "./SerpGoogleAiModeTaskGetHtmlResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpGoogleAiModeTaskGetHtmlTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleAiModeTaskGetHtmlResultInfo[]

    [key: string]: any;

    }

export class SerpGoogleAiModeTaskGetHtmlTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleAiModeTaskGetHtmlTaskInfo {
    
    /** array of results */

    result?: SerpGoogleAiModeTaskGetHtmlResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleAiModeTaskGetHtmlTaskInfo) {
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
                    this.result.push(SerpGoogleAiModeTaskGetHtmlResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleAiModeTaskGetHtmlTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAiModeTaskGetHtmlTaskInfo();
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