import { ApiException, throwException } from "./ApiException"

export interface IContentGenerationGrammarRulesResultInfo   {
        
        /** array of rules */
        rules?: string[] | undefined

    [key: string]: any;

    }

export class ContentGenerationGrammarRulesResultInfo  implements IContentGenerationGrammarRulesResultInfo {
    
    /** array of rules */

    rules?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationGrammarRulesResultInfo) {

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
            this.rules = data["rules"];
        }
    }

    static fromJS(data: any): ContentGenerationGrammarRulesResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGrammarRulesResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["rules"] = this.rules;
        return data;
    }
}