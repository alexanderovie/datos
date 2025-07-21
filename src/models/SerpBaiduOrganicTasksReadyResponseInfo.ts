import { SerpBaiduOrganicTasksReadyTaskInfo, ISerpBaiduOrganicTasksReadyTaskInfo } from "./SerpBaiduOrganicTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpBaiduOrganicTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpBaiduOrganicTasksReadyTaskInfo[]

    [key: string]: any;

    }

export class SerpBaiduOrganicTasksReadyResponseInfo  extends BaseResponseInfo   implements ISerpBaiduOrganicTasksReadyResponseInfo {
    
    /** array of tasks */

    tasks?: SerpBaiduOrganicTasksReadyTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpBaiduOrganicTasksReadyResponseInfo) {
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
                    this.tasks.push(SerpBaiduOrganicTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBaiduOrganicTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBaiduOrganicTasksReadyResponseInfo();
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