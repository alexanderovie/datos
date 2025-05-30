import { BacklinksTimeseriesNewLostSummaryLiveTaskInfo, IBacklinksTimeseriesNewLostSummaryLiveTaskInfo } from "./BacklinksTimeseriesNewLostSummaryLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";
import { ApiException, throwException } from "./ApiException"

export interface IBacklinksTimeseriesNewLostSummaryLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BacklinksTimeseriesNewLostSummaryLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksTimeseriesNewLostSummaryLiveResponseInfo  extends BaseResponseInfo   implements IBacklinksTimeseriesNewLostSummaryLiveResponseInfo {
    
    /** array of tasks */

    tasks?: BacklinksTimeseriesNewLostSummaryLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksTimeseriesNewLostSummaryLiveResponseInfo) {
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
                    this.tasks.push(BacklinksTimeseriesNewLostSummaryLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksTimeseriesNewLostSummaryLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksTimeseriesNewLostSummaryLiveResponseInfo();
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