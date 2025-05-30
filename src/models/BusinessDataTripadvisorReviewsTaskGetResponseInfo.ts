import { BusinessDataTripadvisorReviewsTaskGetTaskInfo, IBusinessDataTripadvisorReviewsTaskGetTaskInfo } from "./BusinessDataTripadvisorReviewsTaskGetTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";
import { ApiException, throwException } from "./ApiException"

export interface IBusinessDataTripadvisorReviewsTaskGetResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BusinessDataTripadvisorReviewsTaskGetTaskInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorReviewsTaskGetResponseInfo  extends BaseResponseInfo   implements IBusinessDataTripadvisorReviewsTaskGetResponseInfo {
    
    /** array of tasks */

    tasks?: BusinessDataTripadvisorReviewsTaskGetTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorReviewsTaskGetResponseInfo) {
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
                    this.tasks.push(BusinessDataTripadvisorReviewsTaskGetTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorReviewsTaskGetResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorReviewsTaskGetResponseInfo();
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