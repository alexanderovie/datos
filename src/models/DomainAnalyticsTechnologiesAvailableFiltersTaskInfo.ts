import { DomainAnalyticsTechnologiesAvailableFiltersResultInfo, IDomainAnalyticsTechnologiesAvailableFiltersResultInfo } from "./DomainAnalyticsTechnologiesAvailableFiltersResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: DomainAnalyticsTechnologiesAvailableFiltersResultInfo[]

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesAvailableFiltersTaskInfo  extends BaseResponseTaskInfo   implements IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo {

    result?: DomainAnalyticsTechnologiesAvailableFiltersResultInfo[];

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo) {
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
                    this.result.push(DomainAnalyticsTechnologiesAvailableFiltersResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesAvailableFiltersTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesAvailableFiltersTaskInfo();
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