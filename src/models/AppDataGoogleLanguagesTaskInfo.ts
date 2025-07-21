import { AppDataGoogleLanguagesResultInfo, IAppDataGoogleLanguagesResultInfo } from "./AppDataGoogleLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IAppDataGoogleLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: AppDataGoogleLanguagesResultInfo[]

    [key: string]: any;

    }

export class AppDataGoogleLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IAppDataGoogleLanguagesTaskInfo {
    
    /** array of results */

    result?: AppDataGoogleLanguagesResultInfo[];

    [key: string]: any;


    constructor(data?: IAppDataGoogleLanguagesTaskInfo) {
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
                    this.result.push(AppDataGoogleLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataGoogleLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataGoogleLanguagesTaskInfo();
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