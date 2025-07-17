export interface IContentGenerationGenerateMetaTagsLiveResultInfo   {
        
        /** number of input tokens */
        input_tokens?: number | undefined
        
        /** number of output tokens */
        output_tokens?: number | undefined
        
        /** number of new tokens */
        new_tokens?: number | undefined
        
        /** generated title */
        title?: string | undefined
        
        /** generated description */
        description?: string | undefined

    [key: string]: any;

    }

export class ContentGenerationGenerateMetaTagsLiveResultInfo  implements IContentGenerationGenerateMetaTagsLiveResultInfo {
    
    /** number of input tokens */

    input_tokens?: number | undefined;
    
    /** number of output tokens */

    output_tokens?: number | undefined;
    
    /** number of new tokens */

    new_tokens?: number | undefined;
    
    /** generated title */

    title?: string | undefined;
    
    /** generated description */

    description?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationGenerateMetaTagsLiveResultInfo) {

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
            this.title = data["title"];
            this.description = data["description"];
        }
    }

    static fromJS(data: any): ContentGenerationGenerateMetaTagsLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGenerateMetaTagsLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["input_tokens"] = this.input_tokens;
        data["output_tokens"] = this.output_tokens;
        data["new_tokens"] = this.new_tokens;
        data["title"] = this.title;
        data["description"] = this.description;
        return data;
    }
}