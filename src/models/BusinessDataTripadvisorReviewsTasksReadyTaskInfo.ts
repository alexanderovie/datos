import { BusinessDataTripadvisorReviewsTasksReadyResultInfo, IBusinessDataTripadvisorReviewsTasksReadyResultInfo } from "./BusinessDataTripadvisorReviewsTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IBusinessDataTripadvisorReviewsTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BusinessDataTripadvisorReviewsTasksReadyResultInfo[]

    [key: string]: any;

    }

export class BusinessDataTripadvisorReviewsTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataTripadvisorReviewsTasksReadyTaskInfo {
    
    /** array of results */

    result?: BusinessDataTripadvisorReviewsTasksReadyResultInfo[];

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorReviewsTasksReadyTaskInfo) {
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
                    this.result.push(BusinessDataTripadvisorReviewsTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorReviewsTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorReviewsTasksReadyTaskInfo();
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