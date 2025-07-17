export interface IContentGenerationGenerateTextLiveResultInfo   {
        
        /** number of input tokens */
        input_tokens?: number | undefined
        
        /** number of output tokens */
        output_tokens?: number | undefined
        
        /** number of new tokens */
        new_tokens?: number | undefined
        
        /** resulting text */
        generated_text?: string | undefined
        
        /** token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task */
        supplement_token?: string | undefined

    [key: string]: any;

    }

export class ContentGenerationGenerateTextLiveResultInfo  implements IContentGenerationGenerateTextLiveResultInfo {
    
    /** number of input tokens */

    input_tokens?: number | undefined;
    
    /** number of output tokens */

    output_tokens?: number | undefined;
    
    /** number of new tokens */

    new_tokens?: number | undefined;
    
    /** resulting text */

    generated_text?: string | undefined;
    
    /** token for generating subsequent results
you can use this parameter to continue the generation from the end of the current result;
supplement_token values are unique for each subsequent task */

    supplement_token?: string | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationGenerateTextLiveResultInfo) {

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
            this.generated_text = data["generated_text"];
            this.supplement_token = data["supplement_token"];
        }
    }

    static fromJS(data: any): ContentGenerationGenerateTextLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationGenerateTextLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["input_tokens"] = this.input_tokens;
        data["output_tokens"] = this.output_tokens;
        data["new_tokens"] = this.new_tokens;
        data["generated_text"] = this.generated_text;
        data["supplement_token"] = this.supplement_token;
        return data;
    }
}