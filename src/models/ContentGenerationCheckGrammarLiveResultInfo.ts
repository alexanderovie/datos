import { ContentGenerationCheckGrammarLiveItem, IContentGenerationCheckGrammarLiveItem } from "./ContentGenerationCheckGrammarLiveItem";


export interface IContentGenerationCheckGrammarLiveResultInfo   {
        
        /** number of input tokens in the POST request */
        input_tokens?: number | undefined
        
        /** number of output tokens in the response */
        output_tokens?: number | undefined
        
        /** number of new tokens in the response */
        new_tokens?: number | undefined
        
        /** initial text in the POST request */
        initial_text?: string | undefined
        
        /** language code in the POST request */
        language_code?: string | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** contains grammar or spelling errors and related data */
        items?: ContentGenerationCheckGrammarLiveItem[] | undefined

    [key: string]: any;

    }

export class ContentGenerationCheckGrammarLiveResultInfo  implements IContentGenerationCheckGrammarLiveResultInfo {
    
    /** number of input tokens in the POST request */

    input_tokens?: number | undefined;
    
    /** number of output tokens in the response */

    output_tokens?: number | undefined;
    
    /** number of new tokens in the response */

    new_tokens?: number | undefined;
    
    /** initial text in the POST request */

    initial_text?: string | undefined;
    
    /** language code in the POST request */

    language_code?: string | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** contains grammar or spelling errors and related data */

    items?: ContentGenerationCheckGrammarLiveItem[] | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationCheckGrammarLiveResultInfo) {

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
            this.initial_text = data["initial_text"];
            this.language_code = data["language_code"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ContentGenerationCheckGrammarLiveItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ContentGenerationCheckGrammarLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationCheckGrammarLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["input_tokens"] = this.input_tokens;
        data["output_tokens"] = this.output_tokens;
        data["new_tokens"] = this.new_tokens;
        data["initial_text"] = this.initial_text;
        data["language_code"] = this.language_code;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}