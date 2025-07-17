import { ContentAnalysisSummaryLiveTaskInfo, IContentAnalysisSummaryLiveTaskInfo } from "./ContentAnalysisSummaryLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IContentAnalysisSummaryLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: ContentAnalysisSummaryLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class ContentAnalysisSummaryLiveResponseInfo  extends BaseResponseInfo   implements IContentAnalysisSummaryLiveResponseInfo {
    
    /** array of tasks */

    tasks?: ContentAnalysisSummaryLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisSummaryLiveResponseInfo) {
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
                    this.tasks.push(ContentAnalysisSummaryLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentAnalysisSummaryLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisSummaryLiveResponseInfo();
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