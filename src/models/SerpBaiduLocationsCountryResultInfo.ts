export interface ISerpBaiduLocationsCountryResultInfo   {
        
        /** location code */
        location_code?: number
        
        /** full name of the location */
        location_name?: string
        
        /** the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API */
        location_code_parent?: number
        
        /** ISO country code of the location */
        country_iso_code?: string
        
        /** location type
only City is supported for all countries except China (where Country is also supported) */
        location_type?: string

    [key: string]: any;

    }

export class SerpBaiduLocationsCountryResultInfo  implements ISerpBaiduLocationsCountryResultInfo {
    
    /** location code */

    location_code?: number;
    
    /** full name of the location */

    location_name?: string;
    
    /** the code of the superordinate location
only City location_type is supported for all countries except China (where Country is also supported);
don’t match locations by location_code_parent because the results for Region and Country-level results for most countries are not supported by Baidu SERP API */

    location_code_parent?: number;
    
    /** ISO country code of the location */

    country_iso_code?: string;
    
    /** location type
only City is supported for all countries except China (where Country is also supported) */

    location_type?: string;

    [key: string]: any;


    constructor(data?: ISerpBaiduLocationsCountryResultInfo) {

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
            this.location_code = data["location_code"];
            this.location_name = data["location_name"];
            this.location_code_parent = data["location_code_parent"];
            this.country_iso_code = data["country_iso_code"];
            this.location_type = data["location_type"];
        }
    }

    static fromJS(data: any): SerpBaiduLocationsCountryResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpBaiduLocationsCountryResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["location_name"] = this.location_name;
        data["location_code_parent"] = this.location_code_parent;
        data["country_iso_code"] = this.country_iso_code;
        data["location_type"] = this.location_type;
        return data;
    }
}