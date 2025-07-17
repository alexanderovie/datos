import { MerchantAmazonReviewsTasksReadyResultInfo, IMerchantAmazonReviewsTasksReadyResultInfo } from "./MerchantAmazonReviewsTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IMerchantAmazonReviewsTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: MerchantAmazonReviewsTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonReviewsTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IMerchantAmazonReviewsTasksReadyTaskInfo {
    
    /** array of results */

    result?: MerchantAmazonReviewsTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonReviewsTasksReadyTaskInfo) {
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
                    this.result.push(MerchantAmazonReviewsTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonReviewsTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonReviewsTasksReadyTaskInfo();
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