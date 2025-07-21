export interface IContentGenerationParaphraseLiveResultInfo   {
        
        /** number of input tokens in the POST request */
        input_tokens?: number
        
        /** number of output tokens in the response */
        output_tokens?: number
        
        /** number of new tokens in the response */
        new_tokens?: number
        
        /** paraphrased version of the given text */
        generated_text?: string

    [key: string]: any;

    }

export class ContentGenerationParaphraseLiveResultInfo  implements IContentGenerationParaphraseLiveResultInfo {
    
    /** number of input tokens in the POST request */

    input_tokens?: number;
    
    /** number of output tokens in the response */

    output_tokens?: number;
    
    /** number of new tokens in the response */

    new_tokens?: number;
    
    /** paraphrased version of the given text */

    generated_text?: string;

    [key: string]: any;


    constructor(data?: IContentGenerationParaphraseLiveResultInfo) {

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
        }
    }

    static fromJS(data: any): ContentGenerationParaphraseLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationParaphraseLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["input_tokens"] = this.input_tokens;
        data["output_tokens"] = this.output_tokens;
        data["new_tokens"] = this.new_tokens;
        data["generated_text"] = this.generated_text;
        return data;
    }
}