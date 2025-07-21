import { BacklinksIndexTaskInfo, IBacklinksIndexTaskInfo } from "./BacklinksIndexTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IBacklinksIndexResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BacklinksIndexTaskInfo[]

    [key: string]: any;

    }

export class BacklinksIndexResponseInfo  extends BaseResponseInfo   implements IBacklinksIndexResponseInfo {
    
    /** array of tasks */

    tasks?: BacklinksIndexTaskInfo[];

    [key: string]: any;


    constructor(data?: IBacklinksIndexResponseInfo) {
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
                    this.tasks.push(BacklinksIndexTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksIndexResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksIndexResponseInfo();
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