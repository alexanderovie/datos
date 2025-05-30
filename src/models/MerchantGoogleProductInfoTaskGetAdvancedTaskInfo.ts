import { MerchantGoogleProductInfoTaskGetAdvancedResultInfo, IMerchantGoogleProductInfoTaskGetAdvancedResultInfo } from "./MerchantGoogleProductInfoTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: MerchantGoogleProductInfoTaskGetAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleProductInfoTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: MerchantGoogleProductInfoTaskGetAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductInfoTaskGetAdvancedTaskInfo) {
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
                    this.result.push(MerchantGoogleProductInfoTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleProductInfoTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductInfoTaskGetAdvancedTaskInfo();
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