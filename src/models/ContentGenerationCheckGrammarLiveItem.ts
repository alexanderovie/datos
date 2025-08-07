export interface IContentGenerationCheckGrammarLiveItem   {
        
        /** message of the grammar or spelling error */
        message?: string | undefined
        
        /** description of the grammar or spelling error */
        description?: string | undefined
        
        /** suggested corrections */
        suggestions?: string[] | undefined
        
        /** offset token for subsequent requests */
        offset?: number | undefined
        
        /** offset token for subsequent requests */
        length?: number | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API */
        rule_id?: string | undefined
        
        /** description of the grammar or spelling rule */
        rule_description?: string | undefined
        
        /** type of the issue found by the relevant rule */
        rule_issue_type?: string | undefined
        
        /** id of the rule category */
        rule_category_id?: string | undefined
        
        /** name of the rule category */
        rule_category_name?: string | undefined

    [key: string]: any;

    }

export class ContentGenerationCheckGrammarLiveItem  implements IContentGenerationCheckGrammarLiveItem {
    
    /** message of the grammar or spelling error */

    message?: string | undefined;
    
    /** description of the grammar or spelling error */

    description?: string | undefined;
    
    /** suggested corrections */

    suggestions?: string[] | undefined;
    
    /** offset token for subsequent requests */

    offset?: number | undefined;
    
    /** offset token for subsequent requests */

    length?: number | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API */

    rule_id?: string | undefined;
    
    /** description of the grammar or spelling rule */

    rule_description?: string | undefined;
    
    /** type of the issue found by the relevant rule */

    rule_issue_type?: string | undefined;
    
    /** id of the rule category */

    rule_category_id?: string | undefined;
    
    /** name of the rule category */

    rule_category_name?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationCheckGrammarLiveItem) {

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
            this.message = data["message"];
            this.description = data["description"];
            this.suggestions = data["suggestions"];
            this.offset = data["offset"];
            this.length = data["length"];
            this.type = data["type"];
            this.rule_id = data["rule_id"];
            this.rule_description = data["rule_description"];
            this.rule_issue_type = data["rule_issue_type"];
            this.rule_category_id = data["rule_category_id"];
            this.rule_category_name = data["rule_category_name"];
        }
    }

    static fromJS(data: any): ContentGenerationCheckGrammarLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationCheckGrammarLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["message"] = this.message;
        data["description"] = this.description;
        data["suggestions"] = this.suggestions;
        data["offset"] = this.offset;
        data["length"] = this.length;
        data["type"] = this.type;
        data["rule_id"] = this.rule_id;
        data["rule_description"] = this.rule_description;
        data["rule_issue_type"] = this.rule_issue_type;
        data["rule_category_id"] = this.rule_category_id;
        data["rule_category_name"] = this.rule_category_name;
        return data;
    }
}