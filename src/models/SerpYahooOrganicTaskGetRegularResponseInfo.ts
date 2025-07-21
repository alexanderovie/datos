import { SerpYahooOrganicTaskGetRegularTaskInfo, ISerpYahooOrganicTaskGetRegularTaskInfo } from "./SerpYahooOrganicTaskGetRegularTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpYahooOrganicTaskGetRegularResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpYahooOrganicTaskGetRegularTaskInfo[]

    [key: string]: any;

    }

export class SerpYahooOrganicTaskGetRegularResponseInfo  extends BaseResponseInfo   implements ISerpYahooOrganicTaskGetRegularResponseInfo {
    
    /** array of tasks */

    tasks?: SerpYahooOrganicTaskGetRegularTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpYahooOrganicTaskGetRegularResponseInfo) {
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
                    this.tasks.push(SerpYahooOrganicTaskGetRegularTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpYahooOrganicTaskGetRegularResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpYahooOrganicTaskGetRegularResponseInfo();
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