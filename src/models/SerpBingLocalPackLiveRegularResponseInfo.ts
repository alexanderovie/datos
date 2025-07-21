import { SerpBingLocalPackLiveRegularTaskInfo, ISerpBingLocalPackLiveRegularTaskInfo } from "./SerpBingLocalPackLiveRegularTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface ISerpBingLocalPackLiveRegularResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpBingLocalPackLiveRegularTaskInfo[]

    [key: string]: any;

    }

export class SerpBingLocalPackLiveRegularResponseInfo  extends BaseResponseInfo   implements ISerpBingLocalPackLiveRegularResponseInfo {
    
    /** array of tasks */

    tasks?: SerpBingLocalPackLiveRegularTaskInfo[];

    [key: string]: any;


    constructor(data?: ISerpBingLocalPackLiveRegularResponseInfo) {
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
                    this.tasks.push(SerpBingLocalPackLiveRegularTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBingLocalPackLiveRegularResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingLocalPackLiveRegularResponseInfo();
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