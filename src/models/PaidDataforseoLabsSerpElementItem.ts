import { AdLinkElement, IAdLinkElement } from "./AdLinkElement";
import { RankChanges, IRankChanges } from "./RankChanges";
import { BacklinksInfo, IBacklinksInfo } from "./BacklinksInfo";
import { RankInfo, IRankInfo } from "./RankInfo";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IPaidDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** additional information about the result */
        extra?: { [key: string]: string; } | undefined
        
        /** extended description
if there is none, equals null */
        description_rows?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: AdLinkElement[] | undefined
        
        /** primary domain name in SERP */
        main_domain?: string | undefined
        
        /** URL in SERP that does not specify the HTTPs protocol and domain name */
        relative_url?: string | undefined
        
        /** estimated traffic volume
estimated organic monthly traffic a featured URL delivers to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** estimated cost of paid monthly search traffic
represents the estimated cost of paid monthly traffic based on etv and cpc values
learn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined
        
        clickstream_etv?: number | undefined
        
        /** changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request */
        rank_changes?: RankChanges | undefined
        
        /** backlinks information for the ranked website */
        backlinks_info?: BacklinksInfo | undefined
        
        /** page and domain rank information */
        rank_info?: RankInfo | undefined

    [key: string]: any;

    }

export class PaidDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IPaidDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;
    
    /** additional information about the result */

    extra?: { [key: string]: string; } | undefined;
    
    /** extended description
if there is none, equals null */

    description_rows?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: AdLinkElement[] | undefined;
    
    /** primary domain name in SERP */

    main_domain?: string | undefined;
    
    /** URL in SERP that does not specify the HTTPs protocol and domain name */

    relative_url?: string | undefined;
    
    /** estimated traffic volume
estimated organic monthly traffic a featured URL delivers to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** estimated cost of paid monthly search traffic
represents the estimated cost of paid monthly traffic based on etv and cpc values
learn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;

    clickstream_etv?: number | undefined;
    
    /** changes in rankings
ranking changes of the SERP element compared to the preceding month;
Note: the changes are calculated even if the preceding month is not included in a POST request */

    rank_changes?: RankChanges | undefined;
    
    /** backlinks information for the ranked website */

    backlinks_info?: BacklinksInfo | undefined;
    
    /** page and domain rank information */

    rank_info?: RankInfo | undefined;

    [key: string]: any;


    constructor(data?: IPaidDataforseoLabsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.se_type = data["se_type"];
            this.title = data["title"];
            this.domain = data["domain"];
            this.description = data["description"];
            this.breadcrumb = data["breadcrumb"];
            this.url = data["url"];
            this.highlighted = data["highlighted"];
            this.extra = data["extra"];
            this.description_rows = data["description_rows"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(AdLinkElement.fromJS(item));
                }
            }
            this.main_domain = data["main_domain"];
            this.relative_url = data["relative_url"];
            this.etv = data["etv"];
            this.estimated_paid_traffic_cost = data["estimated_paid_traffic_cost"];
            this.clickstream_etv = data["clickstream_etv"];
            this.rank_changes = data["rank_changes"] ? RankChanges.fromJS(data["rank_changes"]) : <any>undefined;
            this.backlinks_info = data["backlinks_info"] ? BacklinksInfo.fromJS(data["backlinks_info"]) : <any>undefined;
            this.rank_info = data["rank_info"] ? RankInfo.fromJS(data["rank_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PaidDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PaidDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["description"] = this.description;
        data["breadcrumb"] = this.breadcrumb;
        data["url"] = this.url;
        data["highlighted"] = this.highlighted;
        data["extra"] = this.extra;
        data["description_rows"] = this.description_rows;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["main_domain"] = this.main_domain;
        data["relative_url"] = this.relative_url;
        data["etv"] = this.etv;
        data["estimated_paid_traffic_cost"] = this.estimated_paid_traffic_cost;
        data["clickstream_etv"] = this.clickstream_etv;
        data["rank_changes"] = this.rank_changes ? RankChanges.fromJS(this.rank_changes)?.toJSON() : <any>undefined;
        data["backlinks_info"] = this.backlinks_info ? BacklinksInfo.fromJS(this.backlinks_info)?.toJSON() : <any>undefined;
        data["rank_info"] = this.rank_info ? RankInfo.fromJS(this.rank_info)?.toJSON() : <any>undefined;
        return data;
    }
}