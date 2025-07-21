import { AppDataGoogleAppInfoTaskGetAdvancedResultInfo, IAppDataGoogleAppInfoTaskGetAdvancedResultInfo } from "./AppDataGoogleAppInfoTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: AppDataGoogleAppInfoTaskGetAdvancedResultInfo[]

    [key: string]: any;

    }

export class AppDataGoogleAppInfoTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: AppDataGoogleAppInfoTaskGetAdvancedResultInfo[];

    [key: string]: any;


    constructor(data?: IAppDataGoogleAppInfoTaskGetAdvancedTaskInfo) {
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
                    this.result.push(AppDataGoogleAppInfoTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataGoogleAppInfoTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataGoogleAppInfoTaskGetAdvancedTaskInfo();
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