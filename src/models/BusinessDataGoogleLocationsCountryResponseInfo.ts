import { BusinessDataGoogleLocationsCountryTaskInfo, IBusinessDataGoogleLocationsCountryTaskInfo } from "./BusinessDataGoogleLocationsCountryTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IBusinessDataGoogleLocationsCountryResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BusinessDataGoogleLocationsCountryTaskInfo[]

    [key: string]: any;

    }

export class BusinessDataGoogleLocationsCountryResponseInfo  extends BaseResponseInfo   implements IBusinessDataGoogleLocationsCountryResponseInfo {
    
    /** array of tasks */

    tasks?: BusinessDataGoogleLocationsCountryTaskInfo[];

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleLocationsCountryResponseInfo) {
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
                    this.tasks.push(BusinessDataGoogleLocationsCountryTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleLocationsCountryResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleLocationsCountryResponseInfo();
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