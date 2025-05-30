import { DataforseoTrendsinterestsInfo, IDataforseoTrendsinterestsInfo } from "./DataforseoTrendsinterestsInfo";
import { InterestsComparison, IInterestsComparison } from "./InterestsComparison";
import { BaseDataforseoTrendsItem, IBaseDataforseoTrendsItem } from "./BaseDataforseoTrendsItem";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoTrendsSubregionInterestsElementItem  extends IBaseDataforseoTrendsItem    {
        
        /** subregional keyword popuarity data for each specified term */
        interests?: DataforseoTrendsinterestsInfo[] | undefined
        
        /** comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null */
        interests_comparison?: InterestsComparison | undefined

    [key: string]: any;

    }

export class DataforseoTrendsSubregionInterestsElementItem  extends BaseDataforseoTrendsItem   implements IDataforseoTrendsSubregionInterestsElementItem {
    
    /** subregional keyword popuarity data for each specified term */

    interests?: DataforseoTrendsinterestsInfo[] | undefined;
    
    /** comparison of data on subregional keyword popularity for the specified parameters
if you specified a single keyword, the value will be null */

    interests_comparison?: InterestsComparison | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsSubregionInterestsElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["interests"])) {
                this.interests = [];
                for (let item of data["interests"]) {
                    this.interests.push(DataforseoTrendsinterestsInfo.fromJS(item));
                }
            }
            this.interests_comparison = data["interests_comparison"] ? InterestsComparison.fromJS(data["interests_comparison"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoTrendsSubregionInterestsElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsSubregionInterestsElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["interests"] = null;
        if (Array.isArray(this.interests)) {
            data["interests"] = [];
            for (let item of this.interests) {
                if (item && typeof item.toJSON === "function") {
                    data["interests"].push(item?.toJSON());
                }
            }
        }
        data["interests_comparison"] = this.interests_comparison ? InterestsComparison.fromJS(this.interests_comparison)?.toJSON() : <any>undefined;
        return data;
    }
}