import { AppDataAppleAppListTaskGetAdvancedTaskInfo, IAppDataAppleAppListTaskGetAdvancedTaskInfo } from "./AppDataAppleAppListTaskGetAdvancedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IAppDataAppleAppListTaskGetAdvancedResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: AppDataAppleAppListTaskGetAdvancedTaskInfo[]

    [key: string]: any;

    }

export class AppDataAppleAppListTaskGetAdvancedResponseInfo  extends BaseResponseInfo   implements IAppDataAppleAppListTaskGetAdvancedResponseInfo {
    
    /** array of tasks */

    tasks?: AppDataAppleAppListTaskGetAdvancedTaskInfo[];

    [key: string]: any;


    constructor(data?: IAppDataAppleAppListTaskGetAdvancedResponseInfo) {
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
                    this.tasks.push(AppDataAppleAppListTaskGetAdvancedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppleAppListTaskGetAdvancedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppListTaskGetAdvancedResponseInfo();
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