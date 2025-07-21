import { DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo, IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo } from "./DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo";
import { BaseResponseTaskInfo, IBaseResponseTaskInfo } from "./BaseResponseTaskInfo";

export interface IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo  extends IBaseResponseTaskInfo    {
        
        /** array of results */
        result?: DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo[]

    [key: string]: any;

    }

export class DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo  extends BaseResponseTaskInfo   implements IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo {
    
    /** array of results */

    result?: DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo[];

    [key: string]: any;


    constructor(data?: IDataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo) {
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
                    this.result.push(DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsAmazonProductKeywordIntersectionsLiveTaskInfo();
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