import { BacklinksIdListResultInfo, IBacklinksIdListResultInfo } from "./BacklinksIdListResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IBacklinksIdListTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BacklinksIdListResultInfo[]

    [key: string]: any;

    }

export class BacklinksIdListTaskInfo  extends BaseResponseTaskInfo   implements IBacklinksIdListTaskInfo {
    
    /** array of results */

    result?: BacklinksIdListResultInfo[];

    [key: string]: any;


    constructor(data?: IBacklinksIdListTaskInfo) {
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
                    this.result.push(BacklinksIdListResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksIdListTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksIdListTaskInfo();
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