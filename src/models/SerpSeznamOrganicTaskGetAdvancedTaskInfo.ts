import { SerpSeznamOrganicTaskGetAdvancedResultInfo, ISerpSeznamOrganicTaskGetAdvancedResultInfo } from "./SerpSeznamOrganicTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpSeznamOrganicTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpSeznamOrganicTaskGetAdvancedResultInfo[]

    [key: string]: any;

    }

export class SerpSeznamOrganicTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpSeznamOrganicTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: SerpSeznamOrganicTaskGetAdvancedResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpSeznamOrganicTaskGetAdvancedTaskInfo) {
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
                    this.result.push(SerpSeznamOrganicTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpSeznamOrganicTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpSeznamOrganicTaskGetAdvancedTaskInfo();
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