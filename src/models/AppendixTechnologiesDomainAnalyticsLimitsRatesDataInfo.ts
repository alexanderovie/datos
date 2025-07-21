import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";

export interface IAppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo   {
        
        domain_technologies?: AppendixInfo
        
        domains_by_technology?: AppendixInfo
        
        languages?: number
        
        locations?: number
        
        technologies?: number
        
        aggregation_technologies?: AppendixInfo
        
        technologies_summary?: AppendixInfo
        
        domains_by_html_terms?: AppendixInfo
        
        technology_stats?: AppendixInfo

    [key: string]: any;

    }

export class AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo  implements IAppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo {

    domain_technologies?: AppendixInfo;

    domains_by_technology?: AppendixInfo;

    languages?: number;

    locations?: number;

    technologies?: number;

    aggregation_technologies?: AppendixInfo;

    technologies_summary?: AppendixInfo;

    domains_by_html_terms?: AppendixInfo;

    technology_stats?: AppendixInfo;

    [key: string]: any;


    constructor(data?: IAppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo) {

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
            this.domain_technologies = data["domain_technologies"] ? AppendixInfo.fromJS(data["domain_technologies"]) : <any>undefined;
            this.domains_by_technology = data["domains_by_technology"] ? AppendixInfo.fromJS(data["domains_by_technology"]) : <any>undefined;
            this.languages = data["languages"];
            this.locations = data["locations"];
            this.technologies = data["technologies"];
            this.aggregation_technologies = data["aggregation_technologies"] ? AppendixInfo.fromJS(data["aggregation_technologies"]) : <any>undefined;
            this.technologies_summary = data["technologies_summary"] ? AppendixInfo.fromJS(data["technologies_summary"]) : <any>undefined;
            this.domains_by_html_terms = data["domains_by_html_terms"] ? AppendixInfo.fromJS(data["domains_by_html_terms"]) : <any>undefined;
            this.technology_stats = data["technology_stats"] ? AppendixInfo.fromJS(data["technology_stats"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixTechnologiesDomainAnalyticsLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["domain_technologies"] = this.domain_technologies ? AppendixInfo.fromJS(this.domain_technologies)?.toJSON() : <any>undefined;
        data["domains_by_technology"] = this.domains_by_technology ? AppendixInfo.fromJS(this.domains_by_technology)?.toJSON() : <any>undefined;
        data["languages"] = this.languages;
        data["locations"] = this.locations;
        data["technologies"] = this.technologies;
        data["aggregation_technologies"] = this.aggregation_technologies ? AppendixInfo.fromJS(this.aggregation_technologies)?.toJSON() : <any>undefined;
        data["technologies_summary"] = this.technologies_summary ? AppendixInfo.fromJS(this.technologies_summary)?.toJSON() : <any>undefined;
        data["domains_by_html_terms"] = this.domains_by_html_terms ? AppendixInfo.fromJS(this.domains_by_html_terms)?.toJSON() : <any>undefined;
        data["technology_stats"] = this.technology_stats ? AppendixInfo.fromJS(this.technology_stats)?.toJSON() : <any>undefined;
        return data;
    }
}