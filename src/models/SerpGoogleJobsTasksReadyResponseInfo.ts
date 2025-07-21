import { SerpGoogleJobsTasksReadyTaskInfo, ISerpGoogleJobsTasksReadyTaskInfo } from "./SerpGoogleJobsTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpGoogleJobsTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpGoogleJobsTasksReadyTaskInfo[]

    [key: string]: any;

    }

export class SerpGoogleJobsTasksReadyResponseInfo  extends BaseResponseInfo   implements ISerpGoogleJobsTasksReadyResponseInfo {
    
    /** array of tasks */

    tasks?: SerpGoogleJobsTasksReadyTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleJobsTasksReadyResponseInfo) {
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
                    this.tasks.push(SerpGoogleJobsTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleJobsTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleJobsTasksReadyResponseInfo();
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