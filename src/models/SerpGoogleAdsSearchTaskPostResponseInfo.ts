import { SerpGoogleAdsSearchTaskPostTaskInfo, ISerpGoogleAdsSearchTaskPostTaskInfo } from "./SerpGoogleAdsSearchTaskPostTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpGoogleAdsSearchTaskPostResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpGoogleAdsSearchTaskPostTaskInfo[]

    [key: string]: any;

    }

export class SerpGoogleAdsSearchTaskPostResponseInfo  extends BaseResponseInfo   implements ISerpGoogleAdsSearchTaskPostResponseInfo {
    
    /** array of tasks */

    tasks?: SerpGoogleAdsSearchTaskPostTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleAdsSearchTaskPostResponseInfo) {
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
                    this.tasks.push(SerpGoogleAdsSearchTaskPostTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleAdsSearchTaskPostResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAdsSearchTaskPostResponseInfo();
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