import { SerpSeznamLocationsCountryResultInfo, ISerpSeznamLocationsCountryResultInfo } from "./SerpSeznamLocationsCountryResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpSeznamLocationsCountryTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpSeznamLocationsCountryResultInfo[]

    [key: string]: any;

    }

export class SerpSeznamLocationsCountryTaskInfo  extends BaseResponseTaskInfo   implements ISerpSeznamLocationsCountryTaskInfo {
    
    /** array of results */

    result?: SerpSeznamLocationsCountryResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpSeznamLocationsCountryTaskInfo) {
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
                    this.result.push(SerpSeznamLocationsCountryResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpSeznamLocationsCountryTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpSeznamLocationsCountryTaskInfo();
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