import { ApiException, throwException } from "./ApiException"

export interface IContentGenerationTextSummaryLiveResultInfo   {
        
        /** number of sentences found in the target text */
        sentences?: number | undefined
        
        /** number of paragraphs found in the target text */
        paragraphs?: number | undefined
        
        /** number of words found in the target text */
        words?: number | undefined
        
        /** number of characters without spaces found in the target text */
        characters_without_spaces?: number | undefined
        
        /** number of characters with spaces found in the target text */
        characters_with_spaces?: number | undefined
        
        /** average number of words per sentence in the target text */
        words_per_sentence?: number | undefined
        
        /** average number of characters per word in the target text */
        characters_per_word?: number | undefined
        
        /** vocabulary density of the target text */
        vocabulary_density?: number | undefined
        
        /** keyword density of the target text
contains most common words and their count */
        keyword_density?: { [key: string]: number; } | undefined
        
        /** Automated Readability Index */
        automated_readability_index?: number | undefined
        
        /** Coleman–Liau Index */
        coleman_liau_index?: number | undefined
        
        /** Flesch–Kincaid Readability Index */
        flesch_kincaid_grade_level?: number | undefined
        
        /** SMOG Readability Index */
        smog_readability_index?: number | undefined
        
        /** number of spelling errors found in the target text */
        spelling_errors?: number | undefined
        
        /** number of grammar errors found in the target text */
        grammar_errors?: number | undefined

    [key: string]: any;

    }

export class ContentGenerationTextSummaryLiveResultInfo  implements IContentGenerationTextSummaryLiveResultInfo {
    
    /** number of sentences found in the target text */

    sentences?: number | undefined;
    
    /** number of paragraphs found in the target text */

    paragraphs?: number | undefined;
    
    /** number of words found in the target text */

    words?: number | undefined;
    
    /** number of characters without spaces found in the target text */

    characters_without_spaces?: number | undefined;
    
    /** number of characters with spaces found in the target text */

    characters_with_spaces?: number | undefined;
    
    /** average number of words per sentence in the target text */

    words_per_sentence?: number | undefined;
    
    /** average number of characters per word in the target text */

    characters_per_word?: number | undefined;
    
    /** vocabulary density of the target text */

    vocabulary_density?: number | undefined;
    
    /** keyword density of the target text
contains most common words and their count */

    keyword_density?: { [key: string]: number; } | undefined;
    
    /** Automated Readability Index */

    automated_readability_index?: number | undefined;
    
    /** Coleman–Liau Index */

    coleman_liau_index?: number | undefined;
    
    /** Flesch–Kincaid Readability Index */

    flesch_kincaid_grade_level?: number | undefined;
    
    /** SMOG Readability Index */

    smog_readability_index?: number | undefined;
    
    /** number of spelling errors found in the target text */

    spelling_errors?: number | undefined;
    
    /** number of grammar errors found in the target text */

    grammar_errors?: number | undefined;

    [key: string]: any;


    constructor(data?: IContentGenerationTextSummaryLiveResultInfo) {

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
            this.sentences = data["sentences"];
            this.paragraphs = data["paragraphs"];
            this.words = data["words"];
            this.characters_without_spaces = data["characters_without_spaces"];
            this.characters_with_spaces = data["characters_with_spaces"];
            this.words_per_sentence = data["words_per_sentence"];
            this.characters_per_word = data["characters_per_word"];
            this.vocabulary_density = data["vocabulary_density"];
            this.keyword_density = data["keyword_density"];
            this.automated_readability_index = data["automated_readability_index"];
            this.coleman_liau_index = data["coleman_liau_index"];
            this.flesch_kincaid_grade_level = data["flesch_kincaid_grade_level"];
            this.smog_readability_index = data["smog_readability_index"];
            this.spelling_errors = data["spelling_errors"];
            this.grammar_errors = data["grammar_errors"];
        }
    }

    static fromJS(data: any): ContentGenerationTextSummaryLiveResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ContentGenerationTextSummaryLiveResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["sentences"] = this.sentences;
        data["paragraphs"] = this.paragraphs;
        data["words"] = this.words;
        data["characters_without_spaces"] = this.characters_without_spaces;
        data["characters_with_spaces"] = this.characters_with_spaces;
        data["words_per_sentence"] = this.words_per_sentence;
        data["characters_per_word"] = this.characters_per_word;
        data["vocabulary_density"] = this.vocabulary_density;
        data["keyword_density"] = this.keyword_density;
        data["automated_readability_index"] = this.automated_readability_index;
        data["coleman_liau_index"] = this.coleman_liau_index;
        data["flesch_kincaid_grade_level"] = this.flesch_kincaid_grade_level;
        data["smog_readability_index"] = this.smog_readability_index;
        data["spelling_errors"] = this.spelling_errors;
        data["grammar_errors"] = this.grammar_errors;
        return data;
    }
}