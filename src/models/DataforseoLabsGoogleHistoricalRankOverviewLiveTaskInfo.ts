import { DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo, IDataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo } from "./DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsGoogleHistoricalRankOverviewLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleHistoricalRankOverviewLiveTaskInfo();
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