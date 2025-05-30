import { MerchantGoogleProductsTaskGetAdvancedResultInfo, IMerchantGoogleProductsTaskGetAdvancedResultInfo } from "./MerchantGoogleProductsTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMerchantGoogleProductsTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: MerchantGoogleProductsTaskGetAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleProductsTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements IMerchantGoogleProductsTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: MerchantGoogleProductsTaskGetAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductsTaskGetAdvancedTaskInfo) {
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
                    this.result.push(MerchantGoogleProductsTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleProductsTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductsTaskGetAdvancedTaskInfo();
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