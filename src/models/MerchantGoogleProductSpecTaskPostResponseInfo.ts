import { MerchantGoogleProductSpecTaskPostTaskInfo, IMerchantGoogleProductSpecTaskPostTaskInfo } from "./MerchantGoogleProductSpecTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IMerchantGoogleProductSpecTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: MerchantGoogleProductSpecTaskPostTaskInfo[]

    [key: string]: any;

    }

export class MerchantGoogleProductSpecTaskPostResponseInfo  extends BaseResponseInfo   implements IMerchantGoogleProductSpecTaskPostResponseInfo {
    
    /** array of tasks */

    tasks?: MerchantGoogleProductSpecTaskPostTaskInfo[];

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductSpecTaskPostResponseInfo) {
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
                    this.tasks.push(MerchantGoogleProductSpecTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleProductSpecTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductSpecTaskPostResponseInfo();
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