import { BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo, IBusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo } from "./BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo[]

    [key: string]: any;

    }

export class BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo[];

    [key: string]: any;


    constructor(data?: IBusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo) {
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
                    this.result.push(BusinessDataGoogleHotelInfoTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataGoogleHotelInfoTaskGetAdvancedTaskInfo();
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