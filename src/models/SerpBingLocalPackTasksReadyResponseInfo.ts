import { SerpBingLocalPackTasksReadyTaskInfo, ISerpBingLocalPackTasksReadyTaskInfo } from "./SerpBingLocalPackTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpBingLocalPackTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpBingLocalPackTasksReadyTaskInfo[]

    [key: string]: any;

    }

export class SerpBingLocalPackTasksReadyResponseInfo  extends BaseResponseInfo   implements ISerpBingLocalPackTasksReadyResponseInfo {
    
    /** array of tasks */

    tasks?: SerpBingLocalPackTasksReadyTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpBingLocalPackTasksReadyResponseInfo) {
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
                    this.tasks.push(SerpBingLocalPackTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBingLocalPackTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingLocalPackTasksReadyResponseInfo();
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