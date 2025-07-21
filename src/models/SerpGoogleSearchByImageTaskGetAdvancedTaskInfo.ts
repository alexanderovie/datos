import { SerpGoogleSearchByImageTaskGetAdvancedResultInfo, ISerpGoogleSearchByImageTaskGetAdvancedResultInfo } from "./SerpGoogleSearchByImageTaskGetAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleSearchByImageTaskGetAdvancedResultInfo[]

    [key: string]: any;

    }

export class SerpGoogleSearchByImageTaskGetAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo {
    
    /** array of results */

    result?: SerpGoogleSearchByImageTaskGetAdvancedResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleSearchByImageTaskGetAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleSearchByImageTaskGetAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleSearchByImageTaskGetAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleSearchByImageTaskGetAdvancedTaskInfo();
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