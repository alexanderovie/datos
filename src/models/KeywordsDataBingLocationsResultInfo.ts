export interface IKeywordsDataBingLocationsResultInfo   {
        
        /** location code */
        location_code?: number
        
        /** full name of the location */
        location_name?: string
        
        /** the code of the superordinate location
example:
'location_code': 9041134,
'location_name': 'Vienna International Airport,Lower Austria,Austria',
'location_code_parent': 20044where location_code_parent corresponds to:
'location_code': 20044,
'location_name': 'Lower Austria,Austria' */
        location_code_parent?: number
        
        /** ISO country code of the location */
        country_iso_code?: string
        
        /** location type */
        location_type?: string

    [key: string]: any;

    }

export class KeywordsDataBingLocationsResultInfo  implements IKeywordsDataBingLocationsResultInfo {
    
    /** location code */

    location_code?: number;
    
    /** full name of the location */

    location_name?: string;
    
    /** the code of the superordinate location
example:
'location_code': 9041134,
'location_name': 'Vienna International Airport,Lower Austria,Austria',
'location_code_parent': 20044where location_code_parent corresponds to:
'location_code': 20044,
'location_name': 'Lower Austria,Austria' */

    location_code_parent?: number;
    
    /** ISO country code of the location */

    country_iso_code?: string;
    
    /** location type */

    location_type?: string;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingLocationsResultInfo) {

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

    static fromJS(data: any): KeywordsDataBingLocationsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingLocationsResultInfo();
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