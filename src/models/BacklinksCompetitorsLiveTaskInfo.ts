import { BacklinksCompetitorsLiveResultInfo, IBacklinksCompetitorsLiveResultInfo } from "./BacklinksCompetitorsLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IBacklinksCompetitorsLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BacklinksCompetitorsLiveResultInfo[]

    [key: string]: any;

    }

export class BacklinksCompetitorsLiveTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksCompetitorsLiveTaskInfo {
    
    /** array of results */

    result?: BacklinksCompetitorsLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IBacklinksCompetitorsLiveTaskInfo) {
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
                    this.result.push(BacklinksCompetitorsLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksCompetitorsLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksCompetitorsLiveTaskInfo();
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