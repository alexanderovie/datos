import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface IBaseGoogleMapsSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users */
        rating_distribution?: { [key: string]: number; } | undefined

    [key: string]: any;

    }

export class BaseGoogleMapsSerpElementItem  implements IBaseGoogleMapsSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** search URL with refinement parameters */

    url?: string | undefined;
    
    /** the element’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** the distribution of ratings of the business entity
the object displays the number of 1-star to 5-star ratings, as reviewed by users */

    rating_distribution?: { [key: string]: number; } | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseGoogleMapsSerpElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.rating_distribution = data["rating_distribution"];
        }
    }

    static fromJS(data: any): BaseGoogleMapsSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "maps_search") {

            const { GoogleMapsMapsSearchSerpElementItem } = require('./GoogleMapsMapsSearchSerpElementItem');
            let result = new GoogleMapsMapsSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "maps_paid_item") {

            const { GoogleMapsMapsPaidItemSerpElementItem } = require('./GoogleMapsMapsPaidItemSerpElementItem');
            let result = new GoogleMapsMapsPaidItemSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGoogleMapsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["rating_distribution"] = this.rating_distribution;
        return data;
    }
}