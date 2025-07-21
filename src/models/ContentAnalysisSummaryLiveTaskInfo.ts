import { ContentAnalysisSummaryInfo, IContentAnalysisSummaryInfo } from "./ContentAnalysisSummaryInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IContentAnalysisSummaryLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: ContentAnalysisSummaryInfo[]

    [key: string]: any;

    }

export class ContentAnalysisSummaryLiveTaskInfo  extends BaseResponseTaskInfo   implements IContentAnalysisSummaryLiveTaskInfo {
    
    /** array of results */

    result?: ContentAnalysisSummaryInfo[];

    [key: string]: any;


    constructor(data?: IContentAnalysisSummaryLiveTaskInfo) {
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
                    this.result.push(ContentAnalysisSummaryInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentAnalysisSummaryLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisSummaryLiveTaskInfo();
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