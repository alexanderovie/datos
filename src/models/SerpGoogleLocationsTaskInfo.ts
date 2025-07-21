import { SerpGoogleLocationsResultInfo, ISerpGoogleLocationsResultInfo } from "./SerpGoogleLocationsResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpGoogleLocationsTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleLocationsResultInfo[]

    [key: string]: any;

    }

export class SerpGoogleLocationsTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleLocationsTaskInfo {
    
    /** array of results */

    result?: SerpGoogleLocationsResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleLocationsTaskInfo) {
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
                    this.result.push(SerpGoogleLocationsResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleLocationsTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocationsTaskInfo();
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