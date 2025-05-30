import { ApiException, throwException } from "./ApiException"

export interface IBaseBusinessDataSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group */
        rank_group?: number | undefined
        
        /** absolute rank among all the elements */
        rank_absolute?: number | undefined

    [key: string]: any;

    }

export class BaseBusinessDataSerpElementItem  implements IBaseBusinessDataSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank among all the elements */

    rank_absolute?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseBusinessDataSerpElementItem) {

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
        }
    }

    static fromJS(data: any): BaseBusinessDataSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "maps_search") {

            const { MapsSearchBusinessDataSerpElementItem } = require('./MapsSearchBusinessDataSerpElementItem');
            let result = new MapsSearchBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_business_info") {

            const { GoogleBusinessInfoBusinessDataSerpElementItem } = require('./GoogleBusinessInfoBusinessDataSerpElementItem');
            let result = new GoogleBusinessInfoBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_business_post") {

            const { GoogleBusinessPostBusinessDataSerpElementItem } = require('./GoogleBusinessPostBusinessDataSerpElementItem');
            let result = new GoogleBusinessPostBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_reviews_search") {

            const { GoogleReviewsSearchBusinessDataSerpElementItem } = require('./GoogleReviewsSearchBusinessDataSerpElementItem');
            let result = new GoogleReviewsSearchBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "trustpilot_search_organic") {

            const { TrustpilotSearchOrganicBusinessDataSerpElementItem } = require('./TrustpilotSearchOrganicBusinessDataSerpElementItem');
            let result = new TrustpilotSearchOrganicBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "trustpilot_review_search") {

            const { TrustpilotReviewSearchBusinessDataSerpElementItem } = require('./TrustpilotReviewSearchBusinessDataSerpElementItem');
            let result = new TrustpilotReviewSearchBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "tripadvisor_search_organic") {

            const { TripadvisorSearchOrganicBusinessDataSerpElementItem } = require('./TripadvisorSearchOrganicBusinessDataSerpElementItem');
            let result = new TripadvisorSearchOrganicBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "tripadvisor_review_search") {

            const { TripadvisorReviewSearchBusinessDataSerpElementItem } = require('./TripadvisorReviewSearchBusinessDataSerpElementItem');
            let result = new TripadvisorReviewSearchBusinessDataSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseBusinessDataSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        return data;
    }
}