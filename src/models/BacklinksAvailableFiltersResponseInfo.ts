import { BacklinksAvailableFiltersTaskInfo, IBacklinksAvailableFiltersTaskInfo } from "./BacklinksAvailableFiltersTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";
import { ApiException, throwException } from "./ApiException"

export interface IBacklinksAvailableFiltersResponseInfo  extends IBaseResponseInfo    {
        
        tasks?: BacklinksAvailableFiltersTaskInfo[] | undefined

    [key: string]: any;

    }

export class BacklinksAvailableFiltersResponseInfo  extends BaseResponseInfo   implements IBacklinksAvailableFiltersResponseInfo {

    tasks?: BacklinksAvailableFiltersTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksAvailableFiltersResponseInfo) {
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
                    this.tasks.push(BacklinksAvailableFiltersTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksAvailableFiltersResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksAvailableFiltersResponseInfo();
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