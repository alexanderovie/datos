import { MerchantAmazonReviewsTasksReadyTaskInfo, IMerchantAmazonReviewsTasksReadyTaskInfo } from "./MerchantAmazonReviewsTasksReadyTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IMerchantAmazonReviewsTasksReadyResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: MerchantAmazonReviewsTasksReadyTaskInfo[]

    [key: string]: any;

    }

export class MerchantAmazonReviewsTasksReadyResponseInfo  extends BaseResponseInfo   implements IMerchantAmazonReviewsTasksReadyResponseInfo {
    
    /** array of tasks */

    tasks?: MerchantAmazonReviewsTasksReadyTaskInfo[];

    [key: string]: any;


    constructor(data?: IMerchantAmazonReviewsTasksReadyResponseInfo) {
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
                    this.tasks.push(MerchantAmazonReviewsTasksReadyTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonReviewsTasksReadyResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonReviewsTasksReadyResponseInfo();
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