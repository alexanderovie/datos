import { SerpGoogleImagesLiveHtmlResultInfo, ISerpGoogleImagesLiveHtmlResultInfo } from "./SerpGoogleImagesLiveHtmlResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface ISerpGoogleImagesLiveHtmlTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: SerpGoogleImagesLiveHtmlResultInfo[]

    [key: string]: any;

    }

export class SerpGoogleImagesLiveHtmlTaskInfo  extends BaseResponseTaskInfo   implements ISerpGoogleImagesLiveHtmlTaskInfo {
    
    /** array of results */

    result?: SerpGoogleImagesLiveHtmlResultInfo[];

    [key: string]: any;


    constructor(data?: ISerpGoogleImagesLiveHtmlTaskInfo) {
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
                    this.result.push(SerpGoogleImagesLiveHtmlResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpGoogleImagesLiveHtmlTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleImagesLiveHtmlTaskInfo();
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