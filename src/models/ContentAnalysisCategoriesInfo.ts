export interface IContentAnalysisCategoriesInfo   {
        
        category?: number[] | undefined
        
        count?: number | undefined

    [key: string]: any;

    }

export class ContentAnalysisCategoriesInfo  implements IContentAnalysisCategoriesInfo {

    category?: number[] | undefined;

    count?: number | undefined;

    [key: string]: any;


    constructor(data?: IContentAnalysisCategoriesInfo) {

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
            this.category = data["category"];
            this.count = data["count"];
        }
    }

    static fromJS(data: any): ContentAnalysisCategoriesInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentAnalysisCategoriesInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category"] = this.category;
        data["count"] = this.count;
        return data;
    }
}