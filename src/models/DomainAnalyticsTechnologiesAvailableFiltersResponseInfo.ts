import { DomainAnalyticsTechnologiesAvailableFiltersTaskInfo, IDomainAnalyticsTechnologiesAvailableFiltersTaskInfo } from "./DomainAnalyticsTechnologiesAvailableFiltersTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: DomainAnalyticsTechnologiesAvailableFiltersTaskInfo[]

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesAvailableFiltersResponseInfo  extends BaseResponseInfo   implements IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo {

    tasks?: DomainAnalyticsTechnologiesAvailableFiltersTaskInfo[];

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesAvailableFiltersResponseInfo) {
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
                    this.tasks.push(DomainAnalyticsTechnologiesAvailableFiltersTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesAvailableFiltersResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesAvailableFiltersResponseInfo();
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