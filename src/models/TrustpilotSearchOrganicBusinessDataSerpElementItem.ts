import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { BaseBusinessDataSerpElementItem, IBaseBusinessDataSerpElementItem } from "./BaseBusinessDataSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ITrustpilotSearchOrganicBusinessDataSerpElementItem  extends IBaseBusinessDataSerpElementItem    {
        
        /** title of the establishment */
        title?: string | undefined
        
        /** domain of the establishment */
        domain?: string | undefined
        
        /** URL to the establishment */
        url?: string | undefined
        
        /** the total number of reviews */
        reviews_count?: number | undefined
        
        /** the rating score of the establishment submitted by reviewers */
        rating?: BusinessDataRatingInfo | undefined

    [key: string]: any;

    }

export class TrustpilotSearchOrganicBusinessDataSerpElementItem  extends BaseBusinessDataSerpElementItem   implements ITrustpilotSearchOrganicBusinessDataSerpElementItem {
    
    /** title of the establishment */

    title?: string | undefined;
    
    /** domain of the establishment */

    domain?: string | undefined;
    
    /** URL to the establishment */

    url?: string | undefined;
    
    /** the total number of reviews */

    reviews_count?: number | undefined;
    
    /** the rating score of the establishment submitted by reviewers */

    rating?: BusinessDataRatingInfo | undefined;

    [key: string]: any;


    constructor(data?: ITrustpilotSearchOrganicBusinessDataSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): TrustpilotSearchOrganicBusinessDataSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new TrustpilotSearchOrganicBusinessDataSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}