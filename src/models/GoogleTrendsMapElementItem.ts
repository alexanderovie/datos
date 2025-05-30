import { TrendsMapDataInfo, ITrendsMapDataInfo } from "./TrendsMapDataInfo";
import { BaseGoogleTrendsItem, IBaseGoogleTrendsItem } from "./BaseGoogleTrendsItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleTrendsMapElementItem  extends IBaseGoogleTrendsItem    {
        
        /** Google Trends data from the corresponding item */
        data?: TrendsMapDataInfo[] | undefined

    [key: string]: any;

    }

export class GoogleTrendsMapElementItem  extends BaseGoogleTrendsItem   implements IGoogleTrendsMapElementItem {
    
    /** Google Trends data from the corresponding item */

    data?: TrendsMapDataInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsMapElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["data"])) {
                this.data = [];
                for (let item of data["data"]) {
                    this.data.push(TrendsMapDataInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleTrendsMapElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsMapElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["data"] = null;
        if (Array.isArray(this.data)) {
            data["data"] = [];
            for (let item of this.data) {
                if (item && typeof item.toJSON === "function") {
                    data["data"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}