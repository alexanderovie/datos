import { ContentAnalysisAvailableFiltersResultInfo, IContentAnalysisAvailableFiltersResultInfo } from "./ContentAnalysisAvailableFiltersResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface IContentAnalysisAvailableFiltersTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: ContentAnalysisAvailableFiltersResultInfo[] | undefined

    [key: string]: any;

    }

export class ContentAnalysisAvailableFiltersTaskInfo  extends BaseResponseTaskInfo   implements IContentAnalysisAvailableFiltersTaskInfo {

    result?: ContentAnalysisAvailableFiltersResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisAvailableFiltersTaskInfo) {
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
                    this.result.push(ContentAnalysisAvailableFiltersResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentAnalysisAvailableFiltersTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisAvailableFiltersTaskInfo();
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