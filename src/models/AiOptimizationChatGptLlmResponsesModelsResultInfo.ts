export interface IAiOptimizationChatGptLlmResponsesModelsResultInfo   {
        
        /** name of the AI model */
        model_name?: string | undefined
        
        /** web search support for the AI model
if true, the web_search parameter can be set with the AI model */
        web_search_supported?: boolean | undefined
        
        /** indicates if Standard (POST-GET) data retrieval is supported
if true, you can use the Standard (POST-GET) data retrieval method with the AI model */
        task_post_supported?: boolean | undefined

    [key: string]: any;

    }

export class AiOptimizationChatGptLlmResponsesModelsResultInfo  implements IAiOptimizationChatGptLlmResponsesModelsResultInfo {
    
    /** name of the AI model */

    model_name?: string | undefined;
    
    /** web search support for the AI model
if true, the web_search parameter can be set with the AI model */

    web_search_supported?: boolean | undefined;
    
    /** indicates if Standard (POST-GET) data retrieval is supported
if true, you can use the Standard (POST-GET) data retrieval method with the AI model */

    task_post_supported?: boolean | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationChatGptLlmResponsesModelsResultInfo) {

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
            this.model_name = data["model_name"];
            this.web_search_supported = data["web_search_supported"];
            this.task_post_supported = data["task_post_supported"];
        }
    }

    static fromJS(data: any): AiOptimizationChatGptLlmResponsesModelsResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationChatGptLlmResponsesModelsResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["model_name"] = this.model_name;
        data["web_search_supported"] = this.web_search_supported;
        data["task_post_supported"] = this.task_post_supported;
        return data;
    }
}