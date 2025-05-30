import { ApiException, throwException } from "./ApiException"

export interface IContentGenerationGenerateSubTopicsLiveRequestInfo   {
        
        /** main topic of the content to generate
required field
main topic for content generation;
can contain from 1 to 50 tokens */
        topic?: string | undefined
        
        /** creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
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

export class ContentGenerationGenerateSubTopicsLiveRequestInfo  implements IContentGenerationGenerateSubTopicsLiveRequestInfo {
    
    /** main topic of the content to generate
required field
main topic for content generation;
can contain from 1 to 50 tokens */

    topic?: string | undefined;
    
    /** creativity of content generation
optional field
the randomness of the selection of equally probable subsequent tokens;
can take values from 0 to 1
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


    constructor(data?: IContentGenerationGenerateSubTopicsLiveRequestInfo) {

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
            this.creativity_index = data["creativity_index"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): ContentGenerationGenerateSubTopicsLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGenerateSubTopicsLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["topic"] = this.topic;
        data["creativity_index"] = this.creativity_index;
        data["tag"] = this.tag;
        return data;
    }
}