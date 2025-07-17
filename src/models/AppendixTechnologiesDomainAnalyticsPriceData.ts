import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixBingKeywordsDataPriceDataInfo, IAppendixBingKeywordsDataPriceDataInfo } from "./AppendixBingKeywordsDataPriceDataInfo";


export interface IAppendixTechnologiesDomainAnalyticsPriceData   {
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        technologies?: AppendixTaskKeywordsDataPriceDataInfo | undefined
        
        aggregation_technologies?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        domains_by_html_terms?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        domains_by_technology?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        domain_technologies?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        technologies_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined
        
        technology_stats?: AppendixBingKeywordsDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixTechnologiesDomainAnalyticsPriceData  implements IAppendixTechnologiesDomainAnalyticsPriceData {

    languages?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    locations?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    technologies?: AppendixTaskKeywordsDataPriceDataInfo | undefined;

    aggregation_technologies?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    domains_by_html_terms?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    domains_by_technology?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    domain_technologies?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    technologies_summary?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    technology_stats?: AppendixBingKeywordsDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixTechnologiesDomainAnalyticsPriceData) {

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
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.technologies = data["technologies"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["technologies"]) : <any>undefined;
            this.aggregation_technologies = data["aggregation_technologies"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["aggregation_technologies"]) : <any>undefined;
            this.domains_by_html_terms = data["domains_by_html_terms"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["domains_by_html_terms"]) : <any>undefined;
            this.domains_by_technology = data["domains_by_technology"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["domains_by_technology"]) : <any>undefined;
            this.domain_technologies = data["domain_technologies"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["domain_technologies"]) : <any>undefined;
            this.technologies_summary = data["technologies_summary"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["technologies_summary"]) : <any>undefined;
            this.technology_stats = data["technology_stats"] ? AppendixBingKeywordsDataPriceDataInfo.fromJS(data["technology_stats"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixTechnologiesDomainAnalyticsPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixTechnologiesDomainAnalyticsPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["technologies"] = this.technologies ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.technologies)?.toJSON() : <any>undefined;
        data["aggregation_technologies"] = this.aggregation_technologies ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.aggregation_technologies)?.toJSON() : <any>undefined;
        data["domains_by_html_terms"] = this.domains_by_html_terms ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.domains_by_html_terms)?.toJSON() : <any>undefined;
        data["domains_by_technology"] = this.domains_by_technology ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.domains_by_technology)?.toJSON() : <any>undefined;
        data["domain_technologies"] = this.domain_technologies ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.domain_technologies)?.toJSON() : <any>undefined;
        data["technologies_summary"] = this.technologies_summary ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.technologies_summary)?.toJSON() : <any>undefined;
        data["technology_stats"] = this.technology_stats ? AppendixBingKeywordsDataPriceDataInfo.fromJS(this.technology_stats)?.toJSON() : <any>undefined;
        return data;
    }
}