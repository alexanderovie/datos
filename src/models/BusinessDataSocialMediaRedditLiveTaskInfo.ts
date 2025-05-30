import { BusinessDataSocialMediaRedditLiveResultInfo, IBusinessDataSocialMediaRedditLiveResultInfo } from "./BusinessDataSocialMediaRedditLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IBusinessDataSocialMediaRedditLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: BusinessDataSocialMediaRedditLiveResultInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataSocialMediaRedditLiveTaskInfo  extends BaseResponseTaskInfo   implements IBusinessDataSocialMediaRedditLiveTaskInfo {
    
    /** array of results */

    result?: BusinessDataSocialMediaRedditLiveResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataSocialMediaRedditLiveTaskInfo) {
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
                    this.result.push(BusinessDataSocialMediaRedditLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataSocialMediaRedditLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataSocialMediaRedditLiveTaskInfo();
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