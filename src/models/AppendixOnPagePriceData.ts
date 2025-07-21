import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixGoogleBusinessDataPriceDataInfo, IAppendixGoogleBusinessDataPriceDataInfo } from "./AppendixGoogleBusinessDataPriceDataInfo";

export interface IAppendixOnPagePriceData   {
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo
        
        lighthouse?: AppendixGoogleBusinessDataPriceDataInfo
        
        content_parsing?: AppendixTaskKeywordsDataPriceDataInfo
        
        content_parsing_live?: AppendixTaskKeywordsDataPriceDataInfo
        
        duplicate_content?: AppendixTaskKeywordsDataPriceDataInfo
        
        duplicate_tags?: AppendixTaskKeywordsDataPriceDataInfo
        
        instant_pages?: AppendixTaskKeywordsDataPriceDataInfo
        
        keyword_density?: AppendixTaskKeywordsDataPriceDataInfo
        
        links?: AppendixTaskKeywordsDataPriceDataInfo
        
        non_indexable?: AppendixTaskKeywordsDataPriceDataInfo
        
        pages?: AppendixTaskKeywordsDataPriceDataInfo
        
        pages_by_resource?: AppendixTaskKeywordsDataPriceDataInfo
        
        page_screenshot?: AppendixTaskKeywordsDataPriceDataInfo
        
        raw_html?: AppendixTaskKeywordsDataPriceDataInfo
        
        redirect_chains?: AppendixTaskKeywordsDataPriceDataInfo
        
        resources?: AppendixTaskKeywordsDataPriceDataInfo
        
        summary?: AppendixTaskKeywordsDataPriceDataInfo
        
        task_post?: AppendixTaskKeywordsDataPriceDataInfo
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo
        
        waterfall?: AppendixTaskKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixOnPagePriceData  implements IAppendixOnPagePriceData {

    errors?: AppendixTaskKeywordsDataPriceDataInfo;

    lighthouse?: AppendixGoogleBusinessDataPriceDataInfo;

    content_parsing?: AppendixTaskKeywordsDataPriceDataInfo;

    content_parsing_live?: AppendixTaskKeywordsDataPriceDataInfo;

    duplicate_content?: AppendixTaskKeywordsDataPriceDataInfo;

    duplicate_tags?: AppendixTaskKeywordsDataPriceDataInfo;

    instant_pages?: AppendixTaskKeywordsDataPriceDataInfo;

    keyword_density?: AppendixTaskKeywordsDataPriceDataInfo;

    links?: AppendixTaskKeywordsDataPriceDataInfo;

    non_indexable?: AppendixTaskKeywordsDataPriceDataInfo;

    pages?: AppendixTaskKeywordsDataPriceDataInfo;

    pages_by_resource?: AppendixTaskKeywordsDataPriceDataInfo;

    page_screenshot?: AppendixTaskKeywordsDataPriceDataInfo;

    raw_html?: AppendixTaskKeywordsDataPriceDataInfo;

    redirect_chains?: AppendixTaskKeywordsDataPriceDataInfo;

    resources?: AppendixTaskKeywordsDataPriceDataInfo;

    summary?: AppendixTaskKeywordsDataPriceDataInfo;

    task_post?: AppendixTaskKeywordsDataPriceDataInfo;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo;

    waterfall?: AppendixTaskKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixOnPagePriceData) {

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
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.lighthouse = data["lighthouse"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["lighthouse"]) : <any>undefined;
            this.content_parsing = data["content_parsing"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["content_parsing"]) : <any>undefined;
            this.content_parsing_live = data["content_parsing_live"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["content_parsing_live"]) : <any>undefined;
            this.duplicate_content = data["duplicate_content"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["duplicate_content"]) : <any>undefined;
            this.duplicate_tags = data["duplicate_tags"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["duplicate_tags"]) : <any>undefined;
            this.instant_pages = data["instant_pages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["instant_pages"]) : <any>undefined;
            this.keyword_density = data["keyword_density"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["keyword_density"]) : <any>undefined;
            this.links = data["links"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["links"]) : <any>undefined;
            this.non_indexable = data["non_indexable"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["non_indexable"]) : <any>undefined;
            this.pages = data["pages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["pages"]) : <any>undefined;
            this.pages_by_resource = data["pages_by_resource"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["pages_by_resource"]) : <any>undefined;
            this.page_screenshot = data["page_screenshot"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["page_screenshot"]) : <any>undefined;
            this.raw_html = data["raw_html"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["raw_html"]) : <any>undefined;
            this.redirect_chains = data["redirect_chains"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["redirect_chains"]) : <any>undefined;
            this.resources = data["resources"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["resources"]) : <any>undefined;
            this.summary = data["summary"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["summary"]) : <any>undefined;
            this.task_post = data["task_post"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["task_post"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
            this.waterfall = data["waterfall"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["waterfall"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixOnPagePriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixOnPagePriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["lighthouse"] = this.lighthouse ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.lighthouse)?.toJSON() : <any>undefined;
        data["content_parsing"] = this.content_parsing ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.content_parsing)?.toJSON() : <any>undefined;
        data["content_parsing_live"] = this.content_parsing_live ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.content_parsing_live)?.toJSON() : <any>undefined;
        data["duplicate_content"] = this.duplicate_content ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.duplicate_content)?.toJSON() : <any>undefined;
        data["duplicate_tags"] = this.duplicate_tags ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.duplicate_tags)?.toJSON() : <any>undefined;
        data["instant_pages"] = this.instant_pages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.instant_pages)?.toJSON() : <any>undefined;
        data["keyword_density"] = this.keyword_density ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.keyword_density)?.toJSON() : <any>undefined;
        data["links"] = this.links ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.links)?.toJSON() : <any>undefined;
        data["non_indexable"] = this.non_indexable ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.non_indexable)?.toJSON() : <any>undefined;
        data["pages"] = this.pages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.pages)?.toJSON() : <any>undefined;
        data["pages_by_resource"] = this.pages_by_resource ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.pages_by_resource)?.toJSON() : <any>undefined;
        data["page_screenshot"] = this.page_screenshot ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.page_screenshot)?.toJSON() : <any>undefined;
        data["raw_html"] = this.raw_html ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.raw_html)?.toJSON() : <any>undefined;
        data["redirect_chains"] = this.redirect_chains ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.redirect_chains)?.toJSON() : <any>undefined;
        data["resources"] = this.resources ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.resources)?.toJSON() : <any>undefined;
        data["summary"] = this.summary ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.summary)?.toJSON() : <any>undefined;
        data["task_post"] = this.task_post ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.task_post)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        data["waterfall"] = this.waterfall ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.waterfall)?.toJSON() : <any>undefined;
        return data;
    }
}