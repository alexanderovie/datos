export interface IContentGenerationTextSummaryLiveRequestInfo   {
        
        /** target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center */
        text?: string | undefined
        
        /** name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API */
        language_name?: string | undefined
        
        /** code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API */
        language_code?: string | undefined
        
        /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10 */
        internal_list_limit?: number | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class ContentGenerationTextSummaryLiveRequestInfo  implements IContentGenerationTextSummaryLiveRequestInfo {
    
    /** target text
required field
can contain from 1 to 10000 tokens
learn more about tokens on our help center */

    text?: string | undefined;
    
    /** name of the text language
required field if you do not specify language_code
see the List of Languages for Content Generation Text Summary API */

    language_name?: string | undefined;
    
    /** code of the text language
required field if you do not specify language_name
see the List of Languages for Content Generation Text Summary API */

    language_code?: string | undefined;
    
    /** maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the keyword_density array
default value: 10 */

    internal_list_limit?: number | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationTextSummaryLiveRequestInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.internal_list_limit = data["internal_list_limit"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentGenerationTextSummaryLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationTextSummaryLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["text"] = this.text;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["internal_list_limit"] = this.internal_list_limit;
        data["tag"] = this.tag;
        return data;
    }
}