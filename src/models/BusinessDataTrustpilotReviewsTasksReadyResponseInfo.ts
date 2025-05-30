import { BusinessDataTrustpilotReviewsTasksReadyTaskInfo, IBusinessDataTrustpilotReviewsTasksReadyTaskInfo } from "./BusinessDataTrustpilotReviewsTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";
import { ApiException, throwException } from "./ApiException"

export interface IBusinessDataTrustpilotReviewsTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BusinessDataTrustpilotReviewsTasksReadyTaskInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataTrustpilotReviewsTasksReadyResponseInfo  extends BaseResponseInfo   implements IBusinessDataTrustpilotReviewsTasksReadyResponseInfo {
    
    /** array of tasks */

    tasks?: BusinessDataTrustpilotReviewsTasksReadyTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTrustpilotReviewsTasksReadyResponseInfo) {
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
                    this.tasks.push(BusinessDataTrustpilotReviewsTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTrustpilotReviewsTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTrustpilotReviewsTasksReadyResponseInfo();
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