import { Demography, IDemography } from "./Demography";
import { DemographyComparisonInfo, IDemographyComparisonInfo } from "./DemographyComparisonInfo";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoTrendsDemographyInfo   {
        
        /** the alignment of the element
can take the following values: 1, 2, 3, 4, etc. */
        position?: number | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array */
        keywords?: string[] | undefined
        
        /** demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender */
        demography?: Demography | undefined
        
        /** comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null */
        demography_comparison?: DemographyComparisonInfo | undefined

    [key: string]: any;

    }

export class DataforseoTrendsDemographyInfo  implements IDataforseoTrendsDemographyInfo {
    
    /** the alignment of the element
can take the following values: 1, 2, 3, 4, etc. */

    position?: number | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** relevant keywords
the data included in the demography and demography_comparison is based on the keywords listed in this array */

    keywords?: string[] | undefined;
    
    /** demographic breakdown of keyword popularity data per each specified term
conains keyword popularity data by age and gender */

    demography?: Demography | undefined;
    
    /** comparison of demographic data on keyword popularity for the specified parameters
conains keyword popularity data by age and gender
if you specified a single keyword, the value will be null */

    demography_comparison?: DemographyComparisonInfo | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoTrendsDemographyInfo) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            this.type = data["type"];
            this.keywords = data["keywords"];
            this.demography = data["demography"] ? Demography.fromJS(data["demography"]) : <any>undefined;
            this.demography_comparison = data["demography_comparison"] ? DemographyComparisonInfo.fromJS(data["demography_comparison"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DataforseoTrendsDemographyInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoTrendsDemographyInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["position"] = this.position;
        data["type"] = this.type;
        data["keywords"] = this.keywords;
        data["demography"] = this.demography ? Demography.fromJS(this.demography)?.toJSON() : <any>undefined;
        data["demography_comparison"] = this.demography_comparison ? DemographyComparisonInfo.fromJS(this.demography_comparison)?.toJSON() : <any>undefined;
        return data;
    }
}