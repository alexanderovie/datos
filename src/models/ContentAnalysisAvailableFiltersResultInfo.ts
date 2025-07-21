export interface IContentAnalysisAvailableFiltersResultInfo   {
        
        search?: { [key: string]: string; }

    [key: string]: any;

    }

export class ContentAnalysisAvailableFiltersResultInfo  implements IContentAnalysisAvailableFiltersResultInfo {

    search?: { [key: string]: string; };

    [key: string]: any;


    constructor(data?: IContentAnalysisAvailableFiltersResultInfo) {

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
            this.search = data["search"];
        }
    }

    static fromJS(data: any): ContentAnalysisAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["search"] = this.search;
        return data;
    }
}