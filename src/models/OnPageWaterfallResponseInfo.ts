import { OnPageWaterfallTaskInfo, IOnPageWaterfallTaskInfo } from "./OnPageWaterfallTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";
import { ApiException, throwException } from "./ApiException"

export interface IOnPageWaterfallResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: OnPageWaterfallTaskInfo[] | undefined

    [key: string]: any;

    }

export class OnPageWaterfallResponseInfo  extends BaseResponseInfo   implements IOnPageWaterfallResponseInfo {
    
    /** array of tasks */

    tasks?: OnPageWaterfallTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IOnPageWaterfallResponseInfo) {
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
                    this.tasks.push(OnPageWaterfallTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageWaterfallResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageWaterfallResponseInfo();
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