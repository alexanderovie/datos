import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { LinkElement, ILinkElement } from "./LinkElement";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { RankChanges, IRankChanges } from "./RankChanges";
import { BacklinksInfo, IBacklinksInfo } from "./BacklinksInfo";
import { RankInfo, IRankInfo } from "./RankInfo";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IOrganicDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** domain in SERP of the Ad element */
        domain?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        website_name?: string | undefined
        
        /** indicates whether the element contains an image */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video */
        is_video?: boolean | undefined
        
        /** indicates whether the element is a featured_snippet */
        is_featured_snippet?: boolean | undefined
        
        /** indicates whether the element is marked as malicious */
        is_malicious?: boolean | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** includes additional information appended before the result description in SERP */
        pre_snippet?: string | undefined
        
        /** includes additional information appended after the result description in SERP */
        extended_snippet?: string | undefined
        
        /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement | undefined
        
        /** primary domain name in SERP */
        main_domain?: string | undefined
        
        /** URL in SERP that does not specify the HTTPs protocol and domain name */
        relative_url?: string | undefined
        
        /** estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** estimated cost of paid monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values
learn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined
        
        /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */
        clickstream_etv?: number | undefined
        
        /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */
        rank_changes?: RankChanges | undefined
        
        /** backlinks information for the target website */
        backlinks_info?: BacklinksInfo | undefined
        
        /** page and domain rank information */
        rank_info?: RankInfo | undefined

    [key: string]: any;

    }

export class OrganicDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IOrganicDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** domain in SERP of the Ad element */

    domain?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;

    website_name?: string | undefined;
    
    /** indicates whether the element contains an image */

    is_image?: boolean | undefined;
    
    /** indicates whether the element contains a video */

    is_video?: boolean | undefined;
    
    /** indicates whether the element is a featured_snippet */

    is_featured_snippet?: boolean | undefined;
    
    /** indicates whether the element is marked as malicious */

    is_malicious?: boolean | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** includes additional information appended before the result description in SERP */

    pre_snippet?: string | undefined;
    
    /** includes additional information appended after the result description in SERP */

    extended_snippet?: string | undefined;
    
    /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement | undefined;
    
    /** primary domain name in SERP */

    main_domain?: string | undefined;
    
    /** URL in SERP that does not specify the HTTPs protocol and domain name */

    relative_url?: string | undefined;
    
    /** estimated traffic volume
estimated organic monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of the returned keyword
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** estimated cost of paid monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values
learn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;
    
    /** estimated traffic volume based on clickstream data
calculated as the product of click-through-rate and clickstream search volume values of all keywords the domain ranks for
to retrieve results for this field, the parameter include_clickstream_data must be set to true
learn more about how the metric is calculated in this help center article */

    clickstream_etv?: number | undefined;
    
    /** changes in rankings
contains information about the ranking changes of the SERP element since the previous_updated_time */

    rank_changes?: RankChanges | undefined;
    
    /** backlinks information for the target website */

    backlinks_info?: BacklinksInfo | undefined;
    
    /** page and domain rank information */

    rank_info?: RankInfo | undefined;

    [key: string]: any;


    constructor(data?: IOrganicDataforseoLabsSerpElementItem) {
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
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            this.is_featured_snippet = data["is_featured_snippet"];
            this.is_malicious = data["is_malicious"];
            this.description = data["description"];
            this.pre_snippet = data["pre_snippet"];
            this.extended_snippet = data["extended_snippet"];
            this.amp_version = data["amp_version"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.highlighted = data["highlighted"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
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

    static fromJS(data: any): OrganicDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new OrganicDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["is_featured_snippet"] = this.is_featured_snippet;
        data["is_malicious"] = this.is_malicious;
        data["description"] = this.description;
        data["pre_snippet"] = this.pre_snippet;
        data["extended_snippet"] = this.extended_snippet;
        data["amp_version"] = this.amp_version;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["highlighted"] = this.highlighted;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
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