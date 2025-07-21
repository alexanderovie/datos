import { BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo, IBusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo } from "./BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo[]

    [key: string]: any;

    }

export class BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo {
    
    /** array of results */

    result?: BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo[];

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo) {
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
                    this.result.push(BusinessDataGoogleMyBusinessUpdatesTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleMyBusinessUpdatesTasksReadyTaskInfo();
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