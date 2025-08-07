export interface IAiOptimizationAiKeywordDataAvailableFiltersResultInfo   {
        
        popular_questions?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class AiOptimizationAiKeywordDataAvailableFiltersResultInfo  implements IAiOptimizationAiKeywordDataAvailableFiltersResultInfo {

    popular_questions?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationAiKeywordDataAvailableFiltersResultInfo) {

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
            this.popular_questions = data["popular_questions"];
        }
    }

    static fromJS(data: any): AiOptimizationAiKeywordDataAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationAiKeywordDataAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["popular_questions"] = this.popular_questions;
        return data;
    }
}