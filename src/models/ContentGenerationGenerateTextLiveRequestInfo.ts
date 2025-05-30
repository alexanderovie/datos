import { ApiException, throwException } from "./ApiException"

export interface IContentGenerationGenerateTextLiveRequestInfo   {
        
        /** main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens */
        topic?: string | undefined
        
        /** number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000 */
        word_count?: number | undefined
        
        /** secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: 'sub_topics': ['Apple','Pixar','Amazing Products'] */
        sub_topics?: string[] | undefined
        
        /** meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center */
        description?: string | undefined
        
        /** keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: 'meta_keywords': ['iPhone','sell','CEO'] */
        meta_keywords?: string[] | undefined
        
        /** creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center */
        creativity_index?: number | undefined
        
        /** include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion */
        include_conclusion?: boolean | undefined
        
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

export class ContentGenerationGenerateTextLiveRequestInfo  implements IContentGenerationGenerateTextLiveRequestInfo {
    
    /** main topic of the content to generate
required field
main topic for generating content;
can contain from 1 to 50 tokens */

    topic?: string | undefined;
    
    /** number of words in content
required field
the number of tokens in the generated text;
can take values from 1 to 1000 */

    word_count?: number | undefined;
    
    /** secondary topics of the content to generate
optional field
secondary topics for generating content;
can contain up to 10 terms;
example: 'sub_topics': ['Apple','Pixar','Amazing Products'] */

    sub_topics?: string[] | undefined;
    
    /** meta description of the content to generate
optional field
can contain from 1 to 1000 tokens
learn more about this parameter on our help center */

    description?: string | undefined;
    
    /** keywords for the content to generate
optional field
can contain up to 10 terms;
learn more about this parameter on our help center
example: 'meta_keywords': ['iPhone','sell','CEO'] */

    meta_keywords?: string[] | undefined;
    
    /** creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
default value: 0.8
learn more about this parameter on our help center */

    creativity_index?: number | undefined;
    
    /** include conclusion in generated text
optional field
if set to true, generated content will include a logical conclusion */

    include_conclusion?: boolean | undefined;
    
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


    constructor(data?: IContentGenerationGenerateTextLiveRequestInfo) {

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
            this.topic = data["topic"];
            this.word_count = data["word_count"];
            this.sub_topics = data["sub_topics"];
            this.description = data["description"];
            this.meta_keywords = data["meta_keywords"];
            this.creativity_index = data["creativity_index"];
            this.include_conclusion = data["include_conclusion"];
            this.supplement_token = data["supplement_token"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentGenerationGenerateTextLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGenerateTextLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["topic"] = this.topic;
        data["word_count"] = this.word_count;
        data["sub_topics"] = this.sub_topics;
        data["description"] = this.description;
        data["meta_keywords"] = this.meta_keywords;
        data["creativity_index"] = this.creativity_index;
        data["include_conclusion"] = this.include_conclusion;
        data["supplement_token"] = this.supplement_token;
        data["tag"] = this.tag;
        return data;
    }
}