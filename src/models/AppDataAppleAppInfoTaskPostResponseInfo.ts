import { AppDataAppleAppInfoTaskPostTaskInfo, IAppDataAppleAppInfoTaskPostTaskInfo } from "./AppDataAppleAppInfoTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IAppDataAppleAppInfoTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: AppDataAppleAppInfoTaskPostTaskInfo[]

    [key: string]: any;

    }

export class AppDataAppleAppInfoTaskPostResponseInfo  extends BaseResponseInfo   implements IAppDataAppleAppInfoTaskPostResponseInfo {
    
    /** array of tasks */

    tasks?: AppDataAppleAppInfoTaskPostTaskInfo[];

    [key: string]: any;


    constructor(data?: IAppDataAppleAppInfoTaskPostResponseInfo) {
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
                    this.tasks.push(AppDataAppleAppInfoTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppleAppInfoTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppleAppInfoTaskPostResponseInfo();
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