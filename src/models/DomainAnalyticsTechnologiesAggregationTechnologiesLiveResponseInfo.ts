import { DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo, IDomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo } from "./DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo[]

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo  extends BaseResponseInfo   implements IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo {
    
    /** array of tasks */

    tasks?: DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo[];

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo) {
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
                    this.tasks.push(DomainAnalyticsTechnologiesAggregationTechnologiesLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesAggregationTechnologiesLiveResponseInfo();
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