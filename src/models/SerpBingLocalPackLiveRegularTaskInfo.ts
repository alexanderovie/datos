import { SerpBingLocalPackLiveRegularResultInfo, ISerpBingLocalPackLiveRegularResultInfo } from "./SerpBingLocalPackLiveRegularResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";


export interface ISerpBingLocalPackLiveRegularTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpBingLocalPackLiveRegularResultInfo[] | undefined

    [key: string]: any;

    }

export class SerpBingLocalPackLiveRegularTaskInfo  extends BaseResponseTaskInfo   implements ISerpBingLocalPackLiveRegularTaskInfo {
    
    /** array of results */

    result?: SerpBingLocalPackLiveRegularResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpBingLocalPackLiveRegularTaskInfo) {
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
                    this.result.push(SerpBingLocalPackLiveRegularResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpBingLocalPackLiveRegularTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBingLocalPackLiveRegularTaskInfo();
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