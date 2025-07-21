import { ContentGenerationParaphraseLiveTaskInfo, IContentGenerationParaphraseLiveTaskInfo } from "./ContentGenerationParaphraseLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IContentGenerationParaphraseLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: ContentGenerationParaphraseLiveTaskInfo[]

    [key: string]: any;

    }

export class ContentGenerationParaphraseLiveResponseInfo  extends BaseResponseInfo   implements IContentGenerationParaphraseLiveResponseInfo {
    
    /** array of tasks */

    tasks?: ContentGenerationParaphraseLiveTaskInfo[];

    [key: string]: any;


    constructor(data?: IContentGenerationParaphraseLiveResponseInfo) {
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
                    this.tasks.push(ContentGenerationParaphraseLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentGenerationParaphraseLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationParaphraseLiveResponseInfo();
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