import { ContentGenerationTextSummaryLiveResultInfo, IContentGenerationTextSummaryLiveResultInfo } from "./ContentGenerationTextSummaryLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IContentGenerationTextSummaryLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: ContentGenerationTextSummaryLiveResultInfo[]

    [key: string]: any;

    }

export class ContentGenerationTextSummaryLiveTaskInfo  extends BaseResponseTaskInfo   implements IContentGenerationTextSummaryLiveTaskInfo {
    
    /** array of results */

    result?: ContentGenerationTextSummaryLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IContentGenerationTextSummaryLiveTaskInfo) {
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
                    this.result.push(ContentGenerationTextSummaryLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentGenerationTextSummaryLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationTextSummaryLiveTaskInfo();
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