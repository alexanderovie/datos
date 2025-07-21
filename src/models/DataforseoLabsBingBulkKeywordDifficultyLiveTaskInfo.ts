import { DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo, IDataforseoLabsBingBulkKeywordDifficultyLiveResultInfo } from "./DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsBingBulkKeywordDifficultyLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingBulkKeywordDifficultyLiveTaskInfo();
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