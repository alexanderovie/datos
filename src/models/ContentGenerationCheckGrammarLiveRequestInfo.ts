import { ApiException, throwException } from "./ApiException"

export interface IContentGenerationCheckGrammarLiveRequestInfo   {
        
        /** target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center */
        text?: string | undefined
        
        /** code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Check Grammar API */
        language_code?: string | undefined
        
        /** name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Check Grammar API */
        language_name?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class ContentGenerationCheckGrammarLiveRequestInfo  implements IContentGenerationCheckGrammarLiveRequestInfo {
    
    /** target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center */

    text?: string | undefined;
    
    /** code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Check Grammar API */

    language_code?: string | undefined;
    
    /** name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Check Grammar API */

    language_name?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationCheckGrammarLiveRequestInfo) {

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
            this.text = data["text"];
            this.language_code = data["language_code"];
            this.language_name = data["language_name"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentGenerationCheckGrammarLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationCheckGrammarLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["text"] = this.text;
        data["language_code"] = this.language_code;
        data["language_name"] = this.language_name;
        data["tag"] = this.tag;
        return data;
    }
}