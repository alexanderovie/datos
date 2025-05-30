import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { RankChanges, IRankChanges } from "./RankChanges";
import { BacklinksInfo, IBacklinksInfo } from "./BacklinksInfo";
import { RankInfo, IRankInfo } from "./RankInfo";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ILocalPackDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** subdomain in SERP */
        domain?: string | undefined
        
        /** phone number */
        phone?: string | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** indicates whether the element is an ad */
        is_paid?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** primary domain name in SERP */
        main_domain?: string | undefined
        
        /** URL in SERP that does not specify the HTTPs protocol and domain name */
        relative_url?: string | undefined
        
        /** estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
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

export class LocalPackDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements ILocalPackDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** subdomain in SERP */

    domain?: string | undefined;
    
    /** phone number */

    phone?: string | undefined;
    
    /** relevant URL in SERP */

    url?: string | undefined;
    
    /** indicates whether the element is an ad */

    is_paid?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** primary domain name in SERP */

    main_domain?: string | undefined;
    
    /** URL in SERP that does not specify the HTTPs protocol and domain name */

    relative_url?: string | undefined;
    
    /** estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords in the category that the domain ranks for
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values of all keywords in the category that the domain ranks for
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


    constructor(data?: ILocalPackDataforseoLabsSerpElementItem) {
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
            this.description = data["description"];
            this.domain = data["domain"];
            this.phone = data["phone"];
            this.url = data["url"];
            this.is_paid = data["is_paid"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
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

    static fromJS(data: any): LocalPackDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new LocalPackDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["domain"] = this.domain;
        data["phone"] = this.phone;
        data["url"] = this.url;
        data["is_paid"] = this.is_paid;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
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