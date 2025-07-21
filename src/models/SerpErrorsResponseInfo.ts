import { SerpErrorsTaskInfo, ISerpErrorsTaskInfo } from "./SerpErrorsTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpErrorsResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpErrorsTaskInfo[]

    [key: string]: any;

    }

export class SerpErrorsResponseInfo  extends BaseResponseInfo   implements ISerpErrorsResponseInfo {
    
    /** array of tasks */

    tasks?: SerpErrorsTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpErrorsResponseInfo) {
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
                    this.tasks.push(SerpErrorsTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpErrorsResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpErrorsResponseInfo();
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