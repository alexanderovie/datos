import { KeywordsDataGoogleAdsSearchVolumeLiveResultInfo, IKeywordsDataGoogleAdsSearchVolumeLiveResultInfo } from "./KeywordsDataGoogleAdsSearchVolumeLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataGoogleAdsSearchVolumeLiveResultInfo[]

    [key: string]: any;

    }

export class KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo {
    
    /** array of results */

    result?: KeywordsDataGoogleAdsSearchVolumeLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleAdsSearchVolumeLiveTaskInfo) {
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
                    this.result.push(KeywordsDataGoogleAdsSearchVolumeLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleAdsSearchVolumeLiveTaskInfo();
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