import { KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo, IKeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo } from "./KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo {
    
    /** array of results */

    result?: KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo) {
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
                    this.result.push(KeywordsDataGoogleAdsSearchVolumeTasksReadyResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleAdsSearchVolumeTasksReadyTaskInfo();
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