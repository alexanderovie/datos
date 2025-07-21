import { BacklinksBulkPagesSummaryLiveTaskInfo, IBacklinksBulkPagesSummaryLiveTaskInfo } from "./BacklinksBulkPagesSummaryLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IBacklinksBulkPagesSummaryLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BacklinksBulkPagesSummaryLiveTaskInfo[]

    [key: string]: any;

    }

export class BacklinksBulkPagesSummaryLiveResponseInfo  extends BaseResponseInfo   implements IBacklinksBulkPagesSummaryLiveResponseInfo {
    
    /** array of tasks */

    tasks?: BacklinksBulkPagesSummaryLiveTaskInfo[];

    [key: string]: any;


    constructor(data?: IBacklinksBulkPagesSummaryLiveResponseInfo) {
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
                    this.tasks.push(BacklinksBulkPagesSummaryLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksBulkPagesSummaryLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksBulkPagesSummaryLiveResponseInfo();
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