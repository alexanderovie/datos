export interface IBusinessDataTripadvisorLocationsCountryResultInfo   {
        
        /** location code */
        location_code?: number | undefined
        
        /** full name of the location */
        location_name?: string | undefined
        
        /** the name of the superordinate location
example:
'location_code': 9041134,
'location_name': 'Vienna International Airport,Lower Austria,Austria',
'location_name_parent': 'Lower Austria,Austria' */
        location_name_parent?: string | undefined
        
        /** ISO country code of the location */
        country_iso_code?: string | undefined
        
        /** location type */
        location_type?: string | undefined

    [key: string]: any;

    }

export class BusinessDataTripadvisorLocationsCountryResultInfo  implements IBusinessDataTripadvisorLocationsCountryResultInfo {
    
    /** location code */

    location_code?: number | undefined;
    
    /** full name of the location */

    location_name?: string | undefined;
    
    /** the name of the superordinate location
example:
'location_code': 9041134,
'location_name': 'Vienna International Airport,Lower Austria,Austria',
'location_name_parent': 'Lower Austria,Austria' */

    location_name_parent?: string | undefined;
    
    /** ISO country code of the location */

    country_iso_code?: string | undefined;
    
    /** location type */

    location_type?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTripadvisorLocationsCountryResultInfo) {

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
            this.location_name_parent = data["location_name_parent"];
            this.country_iso_code = data["country_iso_code"];
            this.location_type = data["location_type"];
        }
    }

    static fromJS(data: any): BusinessDataTripadvisorLocationsCountryResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTripadvisorLocationsCountryResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["location_code"] = this.location_code;
        data["location_name"] = this.location_name;
        data["location_name_parent"] = this.location_name_parent;
        data["country_iso_code"] = this.country_iso_code;
        data["location_type"] = this.location_type;
        return data;
    }
}