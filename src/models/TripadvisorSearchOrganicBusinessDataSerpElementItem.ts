import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { BaseBusinessDataSerpElementItem, IBaseBusinessDataSerpElementItem } from "./BaseBusinessDataSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ITripadvisorSearchOrganicBusinessDataSerpElementItem  extends IBaseBusinessDataSerpElementItem    {
        
        /** name of the business entity */
        title?: string | undefined
        
        /** URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews */
        url_path?: string | undefined
        
        /** indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor */
        is_sponsored?: boolean | undefined
        
        /** the total number of reviews */
        reviews_count?: number | undefined
        
        /** place category */
        category?: string | undefined
        
        /** average price rate */
        price_rate?: string | undefined
        
        /** the rating score of the establishment submitted by the reviewers */
        rating?: BusinessDataRatingInfo | undefined

    [key: string]: any;

    }

export class TripadvisorSearchOrganicBusinessDataSerpElementItem  extends BaseBusinessDataSerpElementItem   implements ITripadvisorSearchOrganicBusinessDataSerpElementItem {
    
    /** name of the business entity */

    title?: string | undefined;
    
    /** URL path of the business entity
URL path to the Tripadvisor page of the business entity
you can use this identifier to collect reviews for the business entity using Tripadvisor Reviews */

    url_path?: string | undefined;
    
    /** indicates a sponsored placement
if true, related tripadvisor_search_organic item is a paid advertising on Tripadvisor */

    is_sponsored?: boolean | undefined;
    
    /** the total number of reviews */

    reviews_count?: number | undefined;
    
    /** place category */

    category?: string | undefined;
    
    /** average price rate */

    price_rate?: string | undefined;
    
    /** the rating score of the establishment submitted by the reviewers */

    rating?: BusinessDataRatingInfo | undefined;

    [key: string]: any;


    constructor(data?: ITripadvisorSearchOrganicBusinessDataSerpElementItem) {
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
            this.url_path = data["url_path"];
            this.is_sponsored = data["is_sponsored"];
            this.reviews_count = data["reviews_count"];
            this.category = data["category"];
            this.price_rate = data["price_rate"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): TripadvisorSearchOrganicBusinessDataSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new TripadvisorSearchOrganicBusinessDataSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url_path"] = this.url_path;
        data["is_sponsored"] = this.is_sponsored;
        data["reviews_count"] = this.reviews_count;
        data["category"] = this.category;
        data["price_rate"] = this.price_rate;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}