import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpGoogleAutocompleteTaskPostTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results
in this case, the value will be null */
        result?: any

    [key: string]: any;

    }

export class SerpGoogleAutocompleteTaskPostTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleAutocompleteTaskPostTaskInfo {
    
    /** array of results
in this case, the value will be null */

    result?: any;

    [key: string]: any;


    constructor(data?: ISerpGoogleAutocompleteTaskPostTaskInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.result = data["result"];
        }
    }

    static fromJS(data: any): SerpGoogleAutocompleteTaskPostTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleAutocompleteTaskPostTaskInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["result"] = this.result;
        return data;
    }
}