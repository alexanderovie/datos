import { DataforseoLabsGoogleHistoricalSerpsLiveResultInfo, IDataforseoLabsGoogleHistoricalSerpsLiveResultInfo } from "./DataforseoLabsGoogleHistoricalSerpsLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results
the array includes objects with SERPs for each month within the specified time frame */
        result?: DataforseoLabsGoogleHistoricalSerpsLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo {
    
    /** array of results
the array includes objects with SERPs for each month within the specified time frame */

    result?: DataforseoLabsGoogleHistoricalSerpsLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalSerpsLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsGoogleHistoricalSerpsLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalSerpsLiveTaskInfo();
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