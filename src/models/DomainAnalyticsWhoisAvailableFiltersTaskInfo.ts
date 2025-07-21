import { DomainAnalyticsWhoisAvailableFiltersResultInfo, IDomainAnalyticsWhoisAvailableFiltersResultInfo } from "./DomainAnalyticsWhoisAvailableFiltersResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDomainAnalyticsWhoisAvailableFiltersTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: DomainAnalyticsWhoisAvailableFiltersResultInfo[]

    [key: string]: any;

    }

export class DomainAnalyticsWhoisAvailableFiltersTaskInfo  extends BaseResponseTaskInfo   implements IDomainAnalyticsWhoisAvailableFiltersTaskInfo {

    result?: DomainAnalyticsWhoisAvailableFiltersResultInfo[];

    [key: string]: any;


    constructor(data?: IDomainAnalyticsWhoisAvailableFiltersTaskInfo) {
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
                    this.result.push(DomainAnalyticsWhoisAvailableFiltersResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DomainAnalyticsWhoisAvailableFiltersTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsWhoisAvailableFiltersTaskInfo();
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