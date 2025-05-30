import { ApiException, throwException } from "./ApiException"

export interface IBacklinksDomainIntersection   {
        
        /** type of element */
        type?: string | undefined
        
        /** domain that links to the corresponding target from the POST array */
        target?: string | undefined
        
        /** rank referred to the target from the POST array
indicates the rank that the referring domain (target above) refers to your target from the POST array;
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        rank?: number | undefined
        
        /** indicates the number of backlinks */
        backlinks?: number | undefined
        
        /** date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        first_seen?: string | undefined
        
        /** date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        lost_date?: string | undefined
        
        /** average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page */
        backlinks_spam_score?: number | undefined
        
        /** number of broken backlinks */
        broken_backlinks?: number | undefined
        
        /** number of broken pages */
        broken_pages?: number | undefined
        
        /** number of referring domains */
        referring_domains?: number | undefined
        
        /** number of domains pointing at least one nofollow link to the corresponding target */
        referring_domains_nofollow?: number | undefined
        
        /** number of referring main domains */
        referring_main_domains?: number | undefined
        
        /** number of main domains pointing at least one nofollow link to the target */
        referring_main_domains_nofollow?: number | undefined
        
        /** number of referring IP addresses */
        referring_ips?: number | undefined
        
        /** number of referring subnetworks */
        referring_subnets?: number | undefined
        
        /** indicates the number of pages pointing to the target */
        referring_pages?: number | undefined
        
        /** number of referring pages pointing at least one nofollow link to the target */
        referring_pages_nofollow?: number | undefined
        
        /** top level domains of the referring links
contains top-level domains and referring link count per each */
        referring_links_tld?: { [key: string]: number; } | undefined
        
        /** types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect */
        referring_links_types?: { [key: string]: number; } | undefined
        
        /** link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute */
        referring_links_attributes?: { [key: string]: number; } | undefined
        
        /** types of referring platforms
indicates referring platform types and link count per each platform
possible values: cms, blogs, ecommerce, message-boards, wikis, news, organization */
        referring_links_platform_types?: { [key: string]: number; } | undefined
        
        /** semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here */
        referring_links_semantic_locations?: { [key: string]: number; } | undefined
        
        /** ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country */
        referring_links_countries?: any | undefined

    [key: string]: any;

    }

export class BacklinksDomainIntersection  implements IBacklinksDomainIntersection {
    
    /** type of element */

    type?: string | undefined;
    
    /** domain that links to the corresponding target from the POST array */

    target?: string | undefined;
    
    /** rank referred to the target from the POST array
indicates the rank that the referring domain (target above) refers to your target from the POST array;
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    rank?: number | undefined;
    
    /** indicates the number of backlinks */

    backlinks?: number | undefined;
    
    /** date and time when our crawler found the backlink from this target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    first_seen?: string | undefined;
    
    /** date and time when the last backlink from this target was lost
indicates the date and time when our crawler visited the page and it responded with 4xx or 5xx status code or the last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    lost_date?: string | undefined;
    
    /** average spam score of the backlinks pointing to the target
learn more about how the metric is calculated on this help center page */

    backlinks_spam_score?: number | undefined;
    
    /** number of broken backlinks */

    broken_backlinks?: number | undefined;
    
    /** number of broken pages */

    broken_pages?: number | undefined;
    
    /** number of referring domains */

    referring_domains?: number | undefined;
    
    /** number of domains pointing at least one nofollow link to the corresponding target */

    referring_domains_nofollow?: number | undefined;
    
    /** number of referring main domains */

    referring_main_domains?: number | undefined;
    
    /** number of main domains pointing at least one nofollow link to the target */

    referring_main_domains_nofollow?: number | undefined;
    
    /** number of referring IP addresses */

    referring_ips?: number | undefined;
    
    /** number of referring subnetworks */

    referring_subnets?: number | undefined;
    
    /** indicates the number of pages pointing to the target */

    referring_pages?: number | undefined;
    
    /** number of referring pages pointing at least one nofollow link to the target */

    referring_pages_nofollow?: number | undefined;
    
    /** top level domains of the referring links
contains top-level domains and referring link count per each */

    referring_links_tld?: { [key: string]: number; } | undefined;
    
    /** types of the referring links
indicates the types of referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect */

    referring_links_types?: { [key: string]: number; } | undefined;
    
    /** link attributes of the referring links
indicates link attributes of the referring links and the link count per each attribute */

    referring_links_attributes?: { [key: string]: number; } | undefined;
    
    /** types of referring platforms
indicates referring platform types and link count per each platform
possible values: cms, blogs, ecommerce, message-boards, wikis, news, organization */

    referring_links_platform_types?: { [key: string]: number; } | undefined;
    
    /** semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and the link count per each semantic location
you can get the full list of semantic elements here */

    referring_links_semantic_locations?: { [key: string]: number; } | undefined;
    
    /** ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country */

    referring_links_countries?: any | undefined;

    [key: string]: any;


    constructor(data?: IBacklinksDomainIntersection) {

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
            this.target = data["target"];
            this.rank = data["rank"];
            this.backlinks = data["backlinks"];
            this.first_seen = data["first_seen"];
            this.lost_date = data["lost_date"];
            this.backlinks_spam_score = data["backlinks_spam_score"];
            this.broken_backlinks = data["broken_backlinks"];
            this.broken_pages = data["broken_pages"];
            this.referring_domains = data["referring_domains"];
            this.referring_domains_nofollow = data["referring_domains_nofollow"];
            this.referring_main_domains = data["referring_main_domains"];
            this.referring_main_domains_nofollow = data["referring_main_domains_nofollow"];
            this.referring_ips = data["referring_ips"];
            this.referring_subnets = data["referring_subnets"];
            this.referring_pages = data["referring_pages"];
            this.referring_pages_nofollow = data["referring_pages_nofollow"];
            this.referring_links_tld = data["referring_links_tld"];
            this.referring_links_types = data["referring_links_types"];
            this.referring_links_attributes = data["referring_links_attributes"];
            this.referring_links_platform_types = data["referring_links_platform_types"];
            this.referring_links_semantic_locations = data["referring_links_semantic_locations"];
            this.referring_links_countries = data["referring_links_countries"];
        }
    }

    static fromJS(data: any): BacklinksDomainIntersection {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksDomainIntersection();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["target"] = this.target;
        data["rank"] = this.rank;
        data["backlinks"] = this.backlinks;
        data["first_seen"] = this.first_seen;
        data["lost_date"] = this.lost_date;
        data["backlinks_spam_score"] = this.backlinks_spam_score;
        data["broken_backlinks"] = this.broken_backlinks;
        data["broken_pages"] = this.broken_pages;
        data["referring_domains"] = this.referring_domains;
        data["referring_domains_nofollow"] = this.referring_domains_nofollow;
        data["referring_main_domains"] = this.referring_main_domains;
        data["referring_main_domains_nofollow"] = this.referring_main_domains_nofollow;
        data["referring_ips"] = this.referring_ips;
        data["referring_subnets"] = this.referring_subnets;
        data["referring_pages"] = this.referring_pages;
        data["referring_pages_nofollow"] = this.referring_pages_nofollow;
        data["referring_links_tld"] = this.referring_links_tld;
        data["referring_links_types"] = this.referring_links_types;
        data["referring_links_attributes"] = this.referring_links_attributes;
        data["referring_links_platform_types"] = this.referring_links_platform_types;
        data["referring_links_semantic_locations"] = this.referring_links_semantic_locations;
        data["referring_links_countries"] = this.referring_links_countries;
        return data;
    }
}