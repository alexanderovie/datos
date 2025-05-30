import { DataforseoLabsLocationsAndLanguagesResultInfo, IDataforseoLabsLocationsAndLanguagesResultInfo } from "./DataforseoLabsLocationsAndLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoLabsLocationsAndLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsLocationsAndLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class DataforseoLabsLocationsAndLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsLocationsAndLanguagesTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsLocationsAndLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsLocationsAndLanguagesTaskInfo) {
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
                    this.result.push(DataforseoLabsLocationsAndLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsLocationsAndLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsLocationsAndLanguagesTaskInfo();
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