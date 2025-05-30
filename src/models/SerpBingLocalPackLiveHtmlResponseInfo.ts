import { SerpBingLocalPackLiveHtmlTaskInfo, ISerpBingLocalPackLiveHtmlTaskInfo } from "./SerpBingLocalPackLiveHtmlTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";
import { ApiException, throwException } from "./ApiException"

export interface ISerpBingLocalPackLiveHtmlResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: SerpBingLocalPackLiveHtmlTaskInfo[] | undefined

    [key: string]: any;

    }

export class SerpBingLocalPackLiveHtmlResponseInfo  extends BaseResponseInfo   implements ISerpBingLocalPackLiveHtmlResponseInfo {
    
    /** array of tasks */

    tasks?: SerpBingLocalPackLiveHtmlTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBingLocalPackLiveHtmlResponseInfo) {
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
                    this.tasks.push(SerpBingLocalPackLiveHtmlTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBingLocalPackLiveHtmlResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingLocalPackLiveHtmlResponseInfo();
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