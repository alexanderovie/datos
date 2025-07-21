import { OnPageRedirectChainsResultInfo, IOnPageRedirectChainsResultInfo } from "./OnPageRedirectChainsResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IOnPageRedirectChainsTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: OnPageRedirectChainsResultInfo[]

    [key: string]: any;

    }

export class OnPageRedirectChainsTaskInfo  extends BaseResponseTaskInfo   implements IOnPageRedirectChainsTaskInfo {
    
    /** array of results */

    result?: OnPageRedirectChainsResultInfo[];

    [key: string]: any;


    constructor(data?: IOnPageRedirectChainsTaskInfo) {
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
                    this.result.push(OnPageRedirectChainsResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageRedirectChainsTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageRedirectChainsTaskInfo();
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