import { DataforseoLabsBingSerpCompetitorsLiveTaskInfo, IDataforseoLabsBingSerpCompetitorsLiveTaskInfo } from "./DataforseoLabsBingSerpCompetitorsLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IDataforseoLabsBingSerpCompetitorsLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: DataforseoLabsBingSerpCompetitorsLiveTaskInfo[]

    [key: string]: any;

    }

export class DataforseoLabsBingSerpCompetitorsLiveResponseInfo  extends BaseResponseInfo   implements IDataforseoLabsBingSerpCompetitorsLiveResponseInfo {
    
    /** array of tasks */

    tasks?: DataforseoLabsBingSerpCompetitorsLiveTaskInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingSerpCompetitorsLiveResponseInfo) {
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
                    this.tasks.push(DataforseoLabsBingSerpCompetitorsLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsBingSerpCompetitorsLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingSerpCompetitorsLiveResponseInfo();
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