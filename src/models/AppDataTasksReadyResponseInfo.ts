import { AppDataTasksReadyTaskInfo, IAppDataTasksReadyTaskInfo } from "./AppDataTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IAppDataTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: AppDataTasksReadyTaskInfo[]

    [key: string]: any;

    }

export class AppDataTasksReadyResponseInfo  extends BaseResponseInfo   implements IAppDataTasksReadyResponseInfo {
    
    /** array of tasks */

    tasks?: AppDataTasksReadyTaskInfo[];

    [key: string]: any;


    constructor(data?: IAppDataTasksReadyResponseInfo) {
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
                    this.tasks.push(AppDataTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataTasksReadyResponseInfo();
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