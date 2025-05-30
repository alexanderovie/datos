import { DataforseoLabsBingDomainRankOverviewLiveResultInfo, IDataforseoLabsBingDomainRankOverviewLiveResultInfo } from "./DataforseoLabsBingDomainRankOverviewLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoLabsBingDomainRankOverviewLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsBingDomainRankOverviewLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsBingDomainRankOverviewLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsBingDomainRankOverviewLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsBingDomainRankOverviewLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingDomainRankOverviewLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsBingDomainRankOverviewLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsBingDomainRankOverviewLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingDomainRankOverviewLiveTaskInfo();
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