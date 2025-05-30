import { TrendsGraphDataInfo, ITrendsGraphDataInfo } from "./TrendsGraphDataInfo";
import { BaseGoogleTrendsItem, IBaseGoogleTrendsItem } from "./BaseGoogleTrendsItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleTrendsGraphElementItem  extends IBaseGoogleTrendsItem    {
        
        /** Google Trends data for the specified parameters */
        data?: TrendsGraphDataInfo[] | undefined
        
        /** keyword popularity values averaged over the whole time range */
        averages?: number[] | undefined

    [key: string]: any;

    }

export class GoogleTrendsGraphElementItem  extends BaseGoogleTrendsItem   implements IGoogleTrendsGraphElementItem {
    
    /** Google Trends data for the specified parameters */

    data?: TrendsGraphDataInfo[] | undefined;
    
    /** keyword popularity values averaged over the whole time range */

    averages?: number[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleTrendsGraphElementItem) {
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
                    this.data.push(TrendsGraphDataInfo.fromJS(item));
                }
            }
            this.averages = data["averages"];
        }
    }

    static fromJS(data: any): GoogleTrendsGraphElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleTrendsGraphElementItem();
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
        data["averages"] = this.averages;
        return data;
    }
}