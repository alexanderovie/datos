import { OnPageInstantPagesTaskInfo, IOnPageInstantPagesTaskInfo } from "./OnPageInstantPagesTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IOnPageInstantPagesResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: OnPageInstantPagesTaskInfo[]

    [key: string]: any;

    }

export class OnPageInstantPagesResponseInfo  extends BaseResponseInfo   implements IOnPageInstantPagesResponseInfo {
    
    /** array of tasks */

    tasks?: OnPageInstantPagesTaskInfo[];

    [key: string]: any;


    constructor(data?: IOnPageInstantPagesResponseInfo) {
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
                    this.tasks.push(OnPageInstantPagesTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageInstantPagesResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageInstantPagesResponseInfo();
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