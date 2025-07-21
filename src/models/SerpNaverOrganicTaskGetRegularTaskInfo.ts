import { SerpNaverOrganicTaskGetRegularResultInfo, ISerpNaverOrganicTaskGetRegularResultInfo } from "./SerpNaverOrganicTaskGetRegularResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpNaverOrganicTaskGetRegularTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpNaverOrganicTaskGetRegularResultInfo[]

    [key: string]: any;

    }

export class SerpNaverOrganicTaskGetRegularTaskInfo  extends BaseResponseTaskInfo   implements ISerpNaverOrganicTaskGetRegularTaskInfo {
    
    /** array of results */

    result?: SerpNaverOrganicTaskGetRegularResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpNaverOrganicTaskGetRegularTaskInfo) {
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
                    this.result.push(SerpNaverOrganicTaskGetRegularResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpNaverOrganicTaskGetRegularTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpNaverOrganicTaskGetRegularTaskInfo();
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