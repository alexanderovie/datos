import { DataforseoLabsGoogleAppIntersectionLiveResultInfo, IDataforseoLabsGoogleAppIntersectionLiveResultInfo } from "./DataforseoLabsGoogleAppIntersectionLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsGoogleAppIntersectionLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsGoogleAppIntersectionLiveResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsGoogleAppIntersectionLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsGoogleAppIntersectionLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsGoogleAppIntersectionLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsGoogleAppIntersectionLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsGoogleAppIntersectionLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsGoogleAppIntersectionLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsGoogleAppIntersectionLiveTaskInfo();
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