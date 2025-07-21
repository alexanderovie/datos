import { SerpYahooLocationsCountryResultInfo, ISerpYahooLocationsCountryResultInfo } from "./SerpYahooLocationsCountryResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpYahooLocationsCountryTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpYahooLocationsCountryResultInfo[]

    [key: string]: any;

    }

export class SerpYahooLocationsCountryTaskInfo  extends BaseResponseTaskInfo   implements ISerpYahooLocationsCountryTaskInfo {
    
    /** array of results */

    result?: SerpYahooLocationsCountryResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpYahooLocationsCountryTaskInfo) {
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
                    this.result.push(SerpYahooLocationsCountryResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYahooLocationsCountryTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYahooLocationsCountryTaskInfo();
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