import { DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo, IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo } from "./DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalBulkTrafficEstimationLiveTaskInfo();
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