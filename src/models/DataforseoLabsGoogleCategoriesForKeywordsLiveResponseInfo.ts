import { DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo, IDataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo } from "./DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";

export interface IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo  extends BaseResponseInfo   implements IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo {
    
    /** array of tasks */

    tasks?: DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo) {
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
                    this.tasks.push(DataforseoLabsGoogleCategoriesForKeywordsLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleCategoriesForKeywordsLiveResponseInfo();
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