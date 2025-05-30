import { SerpGoogleOrganicLiveAdvancedResultInfo, ISerpGoogleOrganicLiveAdvancedResultInfo } from "./SerpGoogleOrganicLiveAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface ISerpGoogleOrganicLiveAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleOrganicLiveAdvancedResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpGoogleOrganicLiveAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleOrganicLiveAdvancedTaskInfo {
    
    /** array of results */

    result?: SerpGoogleOrganicLiveAdvancedResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleOrganicLiveAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleOrganicLiveAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleOrganicLiveAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleOrganicLiveAdvancedTaskInfo();
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