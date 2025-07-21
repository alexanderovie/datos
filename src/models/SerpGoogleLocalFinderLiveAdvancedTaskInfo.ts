import { SerpGoogleLocalFinderLiveAdvancedResultInfo, ISerpGoogleLocalFinderLiveAdvancedResultInfo } from "./SerpGoogleLocalFinderLiveAdvancedResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpGoogleLocalFinderLiveAdvancedTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleLocalFinderLiveAdvancedResultInfo[]

    [key: string]: any;

    }

export class SerpGoogleLocalFinderLiveAdvancedTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleLocalFinderLiveAdvancedTaskInfo {
    
    /** array of results */

    result?: SerpGoogleLocalFinderLiveAdvancedResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleLocalFinderLiveAdvancedTaskInfo) {
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
                    this.result.push(SerpGoogleLocalFinderLiveAdvancedResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleLocalFinderLiveAdvancedTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleLocalFinderLiveAdvancedTaskInfo();
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