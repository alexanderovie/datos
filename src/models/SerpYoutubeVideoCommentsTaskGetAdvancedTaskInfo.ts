import { SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo, ISerpYoutubeVideoCommentsTaskGetAdvancedResultInfo } from "./SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo[]

    [key: string]: any;

    }

export class SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo) {
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
                    this.result.push(SerpYoutubeVideoCommentsTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoCommentsTaskGetAdvancedTaskInfo();
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