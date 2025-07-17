export interface IContentGenerationGenerateMetaTagsLiveRequestInfo   {
        
        /** initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center */
        text?: string | undefined
        
        /** creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center */
        creativity_index?: number | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class ContentGenerationGenerateMetaTagsLiveRequestInfo  implements IContentGenerationGenerateMetaTagsLiveRequestInfo {
    
    /** initial target text
required field
text input for generating content;
can contain from 1 to 500 tokens
learn more about tokens on our help center */

    text?: string | undefined;
    
    /** creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1;
default value: 0.8
learn more about this parameter on our help center */

    creativity_index?: number | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationGenerateMetaTagsLiveRequestInfo) {

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
            this.creativity_index = data["creativity_index"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentGenerationGenerateMetaTagsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGenerateMetaTagsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["text"] = this.text;
        data["creativity_index"] = this.creativity_index;
        data["tag"] = this.tag;
        return data;
    }
}