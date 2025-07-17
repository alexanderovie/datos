import { BusinessDataSocialMediaRedditLiveTaskInfo, IBusinessDataSocialMediaRedditLiveTaskInfo } from "./BusinessDataSocialMediaRedditLiveTaskInfo";
import { BaseResponseInfo, IBaseResponseInfo } from "./BaseResponseInfo";


export interface IBusinessDataSocialMediaRedditLiveResponseInfo  extends IBaseResponseInfo    {
        
        /** array of tasks */
        tasks?: BusinessDataSocialMediaRedditLiveTaskInfo[] | undefined

    [key: string]: any;

    }

export class BusinessDataSocialMediaRedditLiveResponseInfo  extends BaseResponseInfo   implements IBusinessDataSocialMediaRedditLiveResponseInfo {
    
    /** array of tasks */

    tasks?: BusinessDataSocialMediaRedditLiveTaskInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataSocialMediaRedditLiveResponseInfo) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["tasks"])) {
                this.tasks = [];
                for (let item of data["tasks"]) {
                    this.tasks.push(BusinessDataSocialMediaRedditLiveTaskInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BusinessDataSocialMediaRedditLiveResponseInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataSocialMediaRedditLiveResponseInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["tasks"] = null;
        if (Array.isArray(this.tasks)) {
            data["tasks"] = [];
            for (let item of this.tasks) {
                if (item && typeof item.toJSON === "function") {
                    data["tasks"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}