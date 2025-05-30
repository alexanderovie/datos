import { MerchantAmazonReviewsTaskPostTaskInfo, IMerchantAmazonReviewsTaskPostTaskInfo } from "./MerchantAmazonReviewsTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMerchantAmazonReviewsTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: MerchantAmazonReviewsTaskPostTaskInfo[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonReviewsTaskPostResponseInfo  extends BaseResponseInfo   implements IMerchantAmazonReviewsTaskPostResponseInfo {
    
    /** array of tasks */

    tasks?: MerchantAmazonReviewsTaskPostTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonReviewsTaskPostResponseInfo) {
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
                    this.tasks.push(MerchantAmazonReviewsTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonReviewsTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonReviewsTaskPostResponseInfo();
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