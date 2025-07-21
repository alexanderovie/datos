import { SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo, ISerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo } from "./SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo[]

    [key: string]: any;

    }

export class SerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo  extends BaseResponseInfo   implements ISerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo {
    
    /** array of tasks */

    tasks?: SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo) {
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
                    this.tasks.push(SerpGoogleFinanceTickerSearchLiveAdvancedTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceTickerSearchLiveAdvancedResponseInfo();
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