export interface IDomainAnalyticsTechnologiesAvailableFiltersResultInfo   {
        
        domains_by_technology?: { [key: string]: string; } | undefined
        
        aggregation_technologies?: { [key: string]: string; } | undefined
        
        technologies_summary?: { [key: string]: string; } | undefined
        
        domains_by_html_terms?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class DomainAnalyticsTechnologiesAvailableFiltersResultInfo  implements IDomainAnalyticsTechnologiesAvailableFiltersResultInfo {

    domains_by_technology?: { [key: string]: string; } | undefined;

    aggregation_technologies?: { [key: string]: string; } | undefined;

    technologies_summary?: { [key: string]: string; } | undefined;

    domains_by_html_terms?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IDomainAnalyticsTechnologiesAvailableFiltersResultInfo) {

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
            this.domains_by_technology = data["domains_by_technology"];
            this.aggregation_technologies = data["aggregation_technologies"];
            this.technologies_summary = data["technologies_summary"];
            this.domains_by_html_terms = data["domains_by_html_terms"];
        }
    }

    static fromJS(data: any): DomainAnalyticsTechnologiesAvailableFiltersResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DomainAnalyticsTechnologiesAvailableFiltersResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["domains_by_technology"] = this.domains_by_technology;
        data["aggregation_technologies"] = this.aggregation_technologies;
        data["technologies_summary"] = this.technologies_summary;
        data["domains_by_html_terms"] = this.domains_by_html_terms;
        return data;
    }
}