import { MerchantAmazonReviewsTaskGetHtmlResultInfo, IMerchantAmazonReviewsTaskGetHtmlResultInfo } from "./MerchantAmazonReviewsTaskGetHtmlResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMerchantAmazonReviewsTaskGetHtmlTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: MerchantAmazonReviewsTaskGetHtmlResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonReviewsTaskGetHtmlTaskInfo  extends BaseResponseTaskInfo   implements IMerchantAmazonReviewsTaskGetHtmlTaskInfo {
    
    /** array of results */

    result?: MerchantAmazonReviewsTaskGetHtmlResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonReviewsTaskGetHtmlTaskInfo) {
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
                    this.result.push(MerchantAmazonReviewsTaskGetHtmlResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonReviewsTaskGetHtmlTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonReviewsTaskGetHtmlTaskInfo();
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