import { SerpGoogleAdsSearchLocationsTaskInfo, ISerpGoogleAdsSearchLocationsTaskInfo } from "./SerpGoogleAdsSearchLocationsTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpGoogleAdsSearchLocationsResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpGoogleAdsSearchLocationsTaskInfo[]

    [key: string]: any;

    }

export class SerpGoogleAdsSearchLocationsResponseInfo  extends BaseResponseInfo   implements ISerpGoogleAdsSearchLocationsResponseInfo {
    
    /** array of tasks */

    tasks?: SerpGoogleAdsSearchLocationsTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleAdsSearchLocationsResponseInfo) {
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
                    this.tasks.push(SerpGoogleAdsSearchLocationsTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleAdsSearchLocationsResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAdsSearchLocationsResponseInfo();
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