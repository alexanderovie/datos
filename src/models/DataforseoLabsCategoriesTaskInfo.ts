import { DataforseoLabsCategoriesResultInfo, IDataforseoLabsCategoriesResultInfo } from "./DataforseoLabsCategoriesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsCategoriesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsCategoriesResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsCategoriesTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsCategoriesTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsCategoriesResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsCategoriesTaskInfo) {
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
                    this.result.push(DataforseoLabsCategoriesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsCategoriesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsCategoriesTaskInfo();
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