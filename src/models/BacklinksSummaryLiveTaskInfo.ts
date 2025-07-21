import { BacklinksSummaryLiveResultInfo, IBacklinksSummaryLiveResultInfo } from "./BacklinksSummaryLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IBacklinksSummaryLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BacklinksSummaryLiveResultInfo[]

    [key: string]: any;

    }

export class BacklinksSummaryLiveTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksSummaryLiveTaskInfo {
    
    /** array of results */

    result?: BacklinksSummaryLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IBacklinksSummaryLiveTaskInfo) {
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
                    this.result.push(BacklinksSummaryLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksSummaryLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksSummaryLiveTaskInfo();
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