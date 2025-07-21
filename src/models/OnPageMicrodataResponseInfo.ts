import { OnPageMicrodataTaskInfo, IOnPageMicrodataTaskInfo } from "./OnPageMicrodataTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IOnPageMicrodataResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: OnPageMicrodataTaskInfo[]

    [key: string]: any;

    }

export class OnPageMicrodataResponseInfo  extends BaseResponseInfo   implements IOnPageMicrodataResponseInfo {
    
    /** array of tasks */

    tasks?: OnPageMicrodataTaskInfo[];

    [key: string]: any;


    constructor(data?: IOnPageMicrodataResponseInfo) {
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
                    this.tasks.push(OnPageMicrodataTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageMicrodataResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageMicrodataResponseInfo();
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