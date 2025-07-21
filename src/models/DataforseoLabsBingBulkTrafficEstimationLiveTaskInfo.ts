import { DataforseoLabsBingBulkTrafficEstimationLiveResultInfo, IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo } from "./DataforseoLabsBingBulkTrafficEstimationLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsBingBulkTrafficEstimationLiveResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsBingBulkTrafficEstimationLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingBulkTrafficEstimationLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingBulkTrafficEstimationLiveTaskInfo();
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