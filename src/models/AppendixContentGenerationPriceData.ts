import { AppendixContentGenerationPriceDataInfo, IAppendixContentGenerationPriceDataInfo } from "./AppendixContentGenerationPriceDataInfo";
import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixContentGenerationPriceData   {
        
        check_grammar?: AppendixContentGenerationPriceDataInfo | undefined
        
        generate?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        generate_meta_tags?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        generate_sub_topics?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        generate_text?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        paraphrase?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        text_summary?: AppendixContentGenerationPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixContentGenerationPriceData  implements IAppendixContentGenerationPriceData {

    check_grammar?: AppendixContentGenerationPriceDataInfo | undefined;

    generate?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    generate_meta_tags?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    generate_sub_topics?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    generate_text?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    paraphrase?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    text_summary?: AppendixContentGenerationPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixContentGenerationPriceData) {

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
            this.check_grammar = data["check_grammar"] ? AppendixContentGenerationPriceDataInfo.fromJS(data["check_grammar"]) : <any>undefined;
            this.generate = data["generate"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["generate"]) : <any>undefined;
            this.generate_meta_tags = data["generate_meta_tags"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["generate_meta_tags"]) : <any>undefined;
            this.generate_sub_topics = data["generate_sub_topics"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["generate_sub_topics"]) : <any>undefined;
            this.generate_text = data["generate_text"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["generate_text"]) : <any>undefined;
            this.paraphrase = data["paraphrase"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["paraphrase"]) : <any>undefined;
            this.text_summary = data["text_summary"] ? AppendixContentGenerationPriceDataInfo.fromJS(data["text_summary"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixContentGenerationPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixContentGenerationPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["check_grammar"] = this.check_grammar ? AppendixContentGenerationPriceDataInfo.fromJS(this.check_grammar)?.toJSON() : <any>undefined;
        data["generate"] = this.generate ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.generate)?.toJSON() : <any>undefined;
        data["generate_meta_tags"] = this.generate_meta_tags ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.generate_meta_tags)?.toJSON() : <any>undefined;
        data["generate_sub_topics"] = this.generate_sub_topics ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.generate_sub_topics)?.toJSON() : <any>undefined;
        data["generate_text"] = this.generate_text ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.generate_text)?.toJSON() : <any>undefined;
        data["paraphrase"] = this.paraphrase ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.paraphrase)?.toJSON() : <any>undefined;
        data["text_summary"] = this.text_summary ? AppendixContentGenerationPriceDataInfo.fromJS(this.text_summary)?.toJSON() : <any>undefined;
        return data;
    }
}