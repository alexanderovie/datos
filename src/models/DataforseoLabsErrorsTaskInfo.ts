import { DataforseoLabsErrorsResultInfo, IDataforseoLabsErrorsResultInfo } from "./DataforseoLabsErrorsResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoLabsErrorsTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsErrorsResultInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsErrorsTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsErrorsTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsErrorsResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsErrorsTaskInfo) {
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
                    this.result.push(DataforseoLabsErrorsResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsErrorsTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsErrorsTaskInfo();
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