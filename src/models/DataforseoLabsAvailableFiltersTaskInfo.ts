import { DataforseoLabsAvailableFiltersResultInfo, IDataforseoLabsAvailableFiltersResultInfo } from "./DataforseoLabsAvailableFiltersResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsAvailableFiltersTaskInfo  extends IBaseResponseTaskInfo    {
        
        result?: DataforseoLabsAvailableFiltersResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsAvailableFiltersTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsAvailableFiltersTaskInfo {

    result?: DataforseoLabsAvailableFiltersResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsAvailableFiltersTaskInfo) {
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
                    this.result.push(DataforseoLabsAvailableFiltersResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsAvailableFiltersTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAvailableFiltersTaskInfo();
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