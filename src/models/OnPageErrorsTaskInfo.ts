import { OnPageErrorsResultInfo, IOnPageErrorsResultInfo } from "./OnPageErrorsResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IOnPageErrorsTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: OnPageErrorsResultInfo[]

    [key: string]: any;

    }

export class OnPageErrorsTaskInfo  extends BaseResponseTaskInfo   implements IOnPageErrorsTaskInfo {
    
    /** array of results */

    result?: OnPageErrorsResultInfo[];

    [key: string]: any;


    constructor(data?: IOnPageErrorsTaskInfo) {
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
                    this.result.push(OnPageErrorsResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageErrorsTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageErrorsTaskInfo();
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