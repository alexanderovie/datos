import { KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo, IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo } from "./KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";
import { ApiException, throwException } from "./ApiException"

export interface IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo[] | undefined

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo  extends BaseResponseTaskInfo   implements IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo {
    
    /** array of results */

    result?: KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo) {
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
                    this.result.push(KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeHistoryLocationsAndLanguagesTaskInfo();
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