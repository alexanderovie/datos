import { BacklinksAvailableFiltersResultInfo, IBacklinksAvailableFiltersResultInfo } from "./BacklinksAvailableFiltersResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IBacklinksAvailableFiltersTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: BacklinksAvailableFiltersResultInfo[]

    [key: string]: any;

    }

export class BacklinksAvailableFiltersTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksAvailableFiltersTaskInfo {

    result?: BacklinksAvailableFiltersResultInfo[];

    [key: string]: any;


    constructor(data?: IBacklinksAvailableFiltersTaskInfo) {
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
                    this.result.push(BacklinksAvailableFiltersResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksAvailableFiltersTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksAvailableFiltersTaskInfo();
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