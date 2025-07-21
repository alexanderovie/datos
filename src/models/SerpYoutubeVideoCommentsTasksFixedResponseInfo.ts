import { SerpYoutubeVideoCommentsTasksFixedTaskInfo, ISerpYoutubeVideoCommentsTasksFixedTaskInfo } from "./SerpYoutubeVideoCommentsTasksFixedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpYoutubeVideoCommentsTasksFixedResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpYoutubeVideoCommentsTasksFixedTaskInfo[]

    [key: string]: any;

    }

export class SerpYoutubeVideoCommentsTasksFixedResponseInfo  extends BaseResponseInfo   implements ISerpYoutubeVideoCommentsTasksFixedResponseInfo {
    
    /** array of tasks */

    tasks?: SerpYoutubeVideoCommentsTasksFixedTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpYoutubeVideoCommentsTasksFixedResponseInfo) {
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
                    this.tasks.push(SerpYoutubeVideoCommentsTasksFixedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYoutubeVideoCommentsTasksFixedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYoutubeVideoCommentsTasksFixedResponseInfo();
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