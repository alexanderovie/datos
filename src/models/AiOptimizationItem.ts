import { LlmMessageSectionInfo, ILlmMessageSectionInfo } from "./LlmMessageSectionInfo";


export interface IAiOptimizationItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** array of content sections
contains different parts of the AI response */
        sections?: LlmMessageSectionInfo[] | undefined

    [key: string]: any;

    }

export class AiOptimizationItem  implements IAiOptimizationItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** array of content sections
contains different parts of the AI response */

    sections?: LlmMessageSectionInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOptimizationItem) {

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
            this.type = data["type"];
            if (Array.isArray(data["sections"])) {
                this.sections = [];
                for (let item of data["sections"]) {
                    this.sections.push(LlmMessageSectionInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOptimizationItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOptimizationItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["sections"] = null;
        if (Array.isArray(this.sections)) {
            data["sections"] = [];
            for (let item of this.sections) {
                if (item && typeof item.toJSON === "function") {
                    data["sections"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}