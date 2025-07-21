import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";
import { AppendixContentGenerationDayLimitsRatesDataInfo, IAppendixContentGenerationDayLimitsRatesDataInfo } from "./AppendixContentGenerationDayLimitsRatesDataInfo";

export interface IAppendixContentGenerationLimitsRatesDataInfo   {
        
        generate?: AppendixInfo
        
        generate_meta_tags?: AppendixInfo
        
        generate_text?: AppendixInfo
        
        paraphrase?: AppendixInfo
        
        check_grammar?: AppendixContentGenerationDayLimitsRatesDataInfo
        
        text_summary?: AppendixContentGenerationDayLimitsRatesDataInfo
        
        generate_sub_topics?: AppendixInfo

    [key: string]: any;

    }

export class AppendixContentGenerationLimitsRatesDataInfo  implements IAppendixContentGenerationLimitsRatesDataInfo {

    generate?: AppendixInfo;

    generate_meta_tags?: AppendixInfo;

    generate_text?: AppendixInfo;

    paraphrase?: AppendixInfo;

    check_grammar?: AppendixContentGenerationDayLimitsRatesDataInfo;

    text_summary?: AppendixContentGenerationDayLimitsRatesDataInfo;

    generate_sub_topics?: AppendixInfo;

    [key: string]: any;


    constructor(data?: IAppendixContentGenerationLimitsRatesDataInfo) {

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
            this.generate = data["generate"] ? AppendixInfo.fromJS(data["generate"]) : <any>undefined;
            this.generate_meta_tags = data["generate_meta_tags"] ? AppendixInfo.fromJS(data["generate_meta_tags"]) : <any>undefined;
            this.generate_text = data["generate_text"] ? AppendixInfo.fromJS(data["generate_text"]) : <any>undefined;
            this.paraphrase = data["paraphrase"] ? AppendixInfo.fromJS(data["paraphrase"]) : <any>undefined;
            this.check_grammar = data["check_grammar"] ? AppendixContentGenerationDayLimitsRatesDataInfo.fromJS(data["check_grammar"]) : <any>undefined;
            this.text_summary = data["text_summary"] ? AppendixContentGenerationDayLimitsRatesDataInfo.fromJS(data["text_summary"]) : <any>undefined;
            this.generate_sub_topics = data["generate_sub_topics"] ? AppendixInfo.fromJS(data["generate_sub_topics"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixContentGenerationLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixContentGenerationLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["generate"] = this.generate ? AppendixInfo.fromJS(this.generate)?.toJSON() : <any>undefined;
        data["generate_meta_tags"] = this.generate_meta_tags ? AppendixInfo.fromJS(this.generate_meta_tags)?.toJSON() : <any>undefined;
        data["generate_text"] = this.generate_text ? AppendixInfo.fromJS(this.generate_text)?.toJSON() : <any>undefined;
        data["paraphrase"] = this.paraphrase ? AppendixInfo.fromJS(this.paraphrase)?.toJSON() : <any>undefined;
        data["check_grammar"] = this.check_grammar ? AppendixContentGenerationDayLimitsRatesDataInfo.fromJS(this.check_grammar)?.toJSON() : <any>undefined;
        data["text_summary"] = this.text_summary ? AppendixContentGenerationDayLimitsRatesDataInfo.fromJS(this.text_summary)?.toJSON() : <any>undefined;
        data["generate_sub_topics"] = this.generate_sub_topics ? AppendixInfo.fromJS(this.generate_sub_topics)?.toJSON() : <any>undefined;
        return data;
    }
}