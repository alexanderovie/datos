export interface IContentGenerationGenerateSubTopicsLiveResultInfo   {
        
        /** number of input tokens */
        input_tokens?: number | undefined
        
        /** number of output tokens */
        output_tokens?: number | undefined
        
        /** number of new tokens */
        new_tokens?: number | undefined
        
        /** resulting subtopics */
        sub_topics?: string[] | undefined

    [key: string]: any;

    }

export class ContentGenerationGenerateSubTopicsLiveResultInfo  implements IContentGenerationGenerateSubTopicsLiveResultInfo {
    
    /** number of input tokens */

    input_tokens?: number | undefined;
    
    /** number of output tokens */

    output_tokens?: number | undefined;
    
    /** number of new tokens */

    new_tokens?: number | undefined;
    
    /** resulting subtopics */

    sub_topics?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationGenerateSubTopicsLiveResultInfo) {

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
            this.input_tokens = data["input_tokens"];
            this.output_tokens = data["output_tokens"];
            this.new_tokens = data["new_tokens"];
            this.sub_topics = data["sub_topics"];
        }
    }

    static fromJS(data: any): ContentGenerationGenerateSubTopicsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGenerateSubTopicsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["input_tokens"] = this.input_tokens;
        data["output_tokens"] = this.output_tokens;
        data["new_tokens"] = this.new_tokens;
        data["sub_topics"] = this.sub_topics;
        return data;
    }
}