import { Demography, IDemography } from "./Demography";
import { DemographyComparisonInfo, IDemographyComparisonInfo } from "./DemographyComparisonInfo";
import { BaseDataforseoTrendsItem, IBaseDataforseoTrendsItem } from "./BaseDataforseoTrendsItem";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoTrendsDemographyElementItem  extends IBaseDataforseoTrendsItem    {
        
        /** demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender */
        demography?: Demography | undefined
        
        /** comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null */
        demography_comparison?: DemographyComparisonInfo | undefined

    [key: string]: any;

    }

export class DataforseoTrendsDemographyElementItem  extends BaseDataforseoTrendsItem   implements IDataforseoTrendsDemographyElementItem {
    
    /** demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender */

    demography?: Demography | undefined;
    
    /** comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null */

    demography_comparison?: DemographyComparisonInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsDemographyElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.demography = data["demography"] ? Demography.fromJS(data["demography"]) : <any>undefined;
            this.demography_comparison = data["demography_comparison"] ? DemographyComparisonInfo.fromJS(data["demography_comparison"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoTrendsDemographyElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsDemographyElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["demography"] = this.demography ? Demography.fromJS(this.demography)?.toJSON() : <any>undefined;
        data["demography_comparison"] = this.demography_comparison ? DemographyComparisonInfo.fromJS(this.demography_comparison)?.toJSON() : <any>undefined;
        return data;
    }
}