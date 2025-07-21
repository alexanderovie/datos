export interface IContentAnalysisLanguagesResultInfo   {
        
        location_code?: number
        
        location_name?: string
        
        location_code_parent?: number
        
        country_iso_code?: string
        
        location_type?: string

    [key: string]: any;

    }

export class ContentAnalysisLanguagesResultInfo  implements IContentAnalysisLanguagesResultInfo {

    location_code?: number;

    location_name?: string;

    location_code_parent?: number;

    country_iso_code?: string;

    location_type?: string;

    [key: string]: any;


    constructor(data?: IContentAnalysisLanguagesResultInfo) {

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

    static fromJS(data: any): ContentAnalysisLanguagesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisLanguagesResultInfo();
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