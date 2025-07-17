export interface IContentGenerationGenerateLiveRequestInfo   {
        
        /** initial target text
required field
text input for content generation;
can contain from 1 to 500 tokens
learn more about tokens on our help center */
        text?: string | undefined
        
        /** generation limit for new tokens
required field if max_tokens is not specified
the maximum number of new tokens for generated content;
maximum value: 300;
Note: the number does not include tokens specified in the text field;
learn more about this parameter on our help center */
        max_new_tokens?: number | undefined
        
        /** generation limit for all tokens
required field if max_new_tokens is not specified
the maximum total number of tokens for generated content;
maximum value: 1024;
Note: the number includes tokens specified in the text field
learn more about this parameter on our help center */
        max_tokens?: number | undefined
        
        /** creativity of content generation
optional field
if you use this field, you don’t need to use top_k / top_p / temperature
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center */
        creativity_index?: number | undefined
        
        /** token repetition
optional field
limits the repetition of the same tokens in the generated content;
can take values from 0.5 to 2;
default value: 1 */
        token_repetition_penalty?: number | undefined
        
        /** the number of initial tokens in each iteration for choosing a subsequent word
optional field
if you use creativity_index, this field will be ignored
the higher the number, the more high-probability tokens will be shortlisted for generation;
can take values from 1 to 100;
default value: 40
learn more about this parameter on our help center */
        top_k?: number | undefined
        
        /** excludes initial tokens with probability lower than one
optional field
if you use creativity_index, this field will be ignored
the higher the value, the less low-probability tokens may be shortlisted for generation;
can take values from 0 to 1
default value: 0.9
Note:if both top_k and top_p are used, top_k acts first;
learn more about this parameter on our help center */
        top_p?: number | undefined
        
        /** controls the randomness in the output
optional field
if you use creativity_index, this field will be ignored
the lower the temperature, the more likely the model will choose words with a higher probability of occurrence;
can take values from 0 to 1;
default value: 0.7
learn more about this parameter on our help center */
        temperature?: number | undefined
        
        /** words or phrases to avoid when generating a text
optional field
you can specify up to 50 terms;
example:
['term', 'optimization'] */
        avoid_words?: string[] | undefined
        
        /** words or phrases to avoid in the beginning of the generated text
optional field
you can specify up to 50 terms;
example:
['SEO', 'search engine optimization'] */
        avoid_starting_words?: string[] | undefined
        
        /** words or phrases to end the text
optional field
you can specify up to 50 terms;
example:
['now','subscribe'] */
        stop_words?: string[] | undefined
        
        /** token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task */
        supplement_token?: string | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class ContentGenerationGenerateLiveRequestInfo  implements IContentGenerationGenerateLiveRequestInfo {
    
    /** initial target text
required field
text input for content generation;
can contain from 1 to 500 tokens
learn more about tokens on our help center */

    text?: string | undefined;
    
    /** generation limit for new tokens
required field if max_tokens is not specified
the maximum number of new tokens for generated content;
maximum value: 300;
Note: the number does not include tokens specified in the text field;
learn more about this parameter on our help center */

    max_new_tokens?: number | undefined;
    
    /** generation limit for all tokens
required field if max_new_tokens is not specified
the maximum total number of tokens for generated content;
maximum value: 1024;
Note: the number includes tokens specified in the text field
learn more about this parameter on our help center */

    max_tokens?: number | undefined;
    
    /** creativity of content generation
optional field
if you use this field, you don’t need to use top_k / top_p / temperature
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center */

    creativity_index?: number | undefined;
    
    /** token repetition
optional field
limits the repetition of the same tokens in the generated content;
can take values from 0.5 to 2;
default value: 1 */

    token_repetition_penalty?: number | undefined;
    
    /** the number of initial tokens in each iteration for choosing a subsequent word
optional field
if you use creativity_index, this field will be ignored
the higher the number, the more high-probability tokens will be shortlisted for generation;
can take values from 1 to 100;
default value: 40
learn more about this parameter on our help center */

    top_k?: number | undefined;
    
    /** excludes initial tokens with probability lower than one
optional field
if you use creativity_index, this field will be ignored
the higher the value, the less low-probability tokens may be shortlisted for generation;
can take values from 0 to 1
default value: 0.9
Note:if both top_k and top_p are used, top_k acts first;
learn more about this parameter on our help center */

    top_p?: number | undefined;
    
    /** controls the randomness in the output
optional field
if you use creativity_index, this field will be ignored
the lower the temperature, the more likely the model will choose words with a higher probability of occurrence;
can take values from 0 to 1;
default value: 0.7
learn more about this parameter on our help center */

    temperature?: number | undefined;
    
    /** words or phrases to avoid when generating a text
optional field
you can specify up to 50 terms;
example:
['term', 'optimization'] */

    avoid_words?: string[] | undefined;
    
    /** words or phrases to avoid in the beginning of the generated text
optional field
you can specify up to 50 terms;
example:
['SEO', 'search engine optimization'] */

    avoid_starting_words?: string[] | undefined;
    
    /** words or phrases to end the text
optional field
you can specify up to 50 terms;
example:
['now','subscribe'] */

    stop_words?: string[] | undefined;
    
    /** token for generating subsequent results
optional field
provided in the identical filed of the response to each request;
you can use this parameter to continue the generation of text from the initial response
supplement_token values are unique for each subsequent task */

    supplement_token?: string | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationGenerateLiveRequestInfo) {

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
            this.max_new_tokens = data["max_new_tokens"];
            this.max_tokens = data["max_tokens"];
            this.creativity_index = data["creativity_index"];
            this.token_repetition_penalty = data["token_repetition_penalty"];
            this.top_k = data["top_k"];
            this.top_p = data["top_p"];
            this.temperature = data["temperature"];
            this.avoid_words = data["avoid_words"];
            this.avoid_starting_words = data["avoid_starting_words"];
            this.stop_words = data["stop_words"];
            this.supplement_token = data["supplement_token"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentGenerationGenerateLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGenerateLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["text"] = this.text;
        data["max_new_tokens"] = this.max_new_tokens;
        data["max_tokens"] = this.max_tokens;
        data["creativity_index"] = this.creativity_index;
        data["token_repetition_penalty"] = this.token_repetition_penalty;
        data["top_k"] = this.top_k;
        data["top_p"] = this.top_p;
        data["temperature"] = this.temperature;
        data["avoid_words"] = this.avoid_words;
        data["avoid_starting_words"] = this.avoid_starting_words;
        data["stop_words"] = this.stop_words;
        data["supplement_token"] = this.supplement_token;
        data["tag"] = this.tag;
        return data;
    }
}