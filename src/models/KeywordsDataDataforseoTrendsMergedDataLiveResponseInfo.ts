import { KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo, IKeywordsDataDataforseoTrendsMergedDataLiveTaskInfo } from "./KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo[]

    [key: string]: any;

    }

export class KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo  extends BaseResponseInfo   implements IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo {
    
    /** array of tasks */

    tasks?: KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo[];

    [key: string]: any;


    constructor(data?: IKeywordsDataDataforseoTrendsMergedDataLiveResponseInfo) {
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
                    this.tasks.push(KeywordsDataDataforseoTrendsMergedDataLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataDataforseoTrendsMergedDataLiveResponseInfo();
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