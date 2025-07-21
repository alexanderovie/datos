import { DataforseoLabsBingPageIntersectionLiveResultInfo, IDataforseoLabsBingPageIntersectionLiveResultInfo } from "./DataforseoLabsBingPageIntersectionLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsBingPageIntersectionLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsBingPageIntersectionLiveResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsBingPageIntersectionLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsBingPageIntersectionLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsBingPageIntersectionLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingPageIntersectionLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsBingPageIntersectionLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsBingPageIntersectionLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingPageIntersectionLiveTaskInfo();
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