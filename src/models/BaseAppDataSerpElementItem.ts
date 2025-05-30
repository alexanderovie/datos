import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface IBaseAppDataSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** title of the app */
        title?: string | undefined
        
        /** average rating of the app */
        rating?: BusinessDataRatingInfo | undefined

    [key: string]: any;

    }

export class BaseAppDataSerpElementItem  implements IBaseAppDataSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** title of the app */

    title?: string | undefined;
    
    /** average rating of the app */

    rating?: BusinessDataRatingInfo | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseAppDataSerpElementItem) {

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
            this.position = data["position"];
            this.title = data["title"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseAppDataSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_play_search_organic") {

            const { AppDataGooglePlaySearchOrganicSerpElementItem } = require('./AppDataGooglePlaySearchOrganicSerpElementItem');
            let result = new AppDataGooglePlaySearchOrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "app_store_search_organic") {

            const { AppDataAppStoreSearchOrganicSerpElementItem } = require('./AppDataAppStoreSearchOrganicSerpElementItem');
            let result = new AppDataAppStoreSearchOrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_play_info_organic") {

            const { AppDataGooglePlayInfoOrganicSerpElementItem } = require('./AppDataGooglePlayInfoOrganicSerpElementItem');
            let result = new AppDataGooglePlayInfoOrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_play_reviews_search") {

            const { AppDataGooglePlayReviewsSearchSerpElementItem } = require('./AppDataGooglePlayReviewsSearchSerpElementItem');
            let result = new AppDataGooglePlayReviewsSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "app_store_info_organic") {

            const { AppDataAppStoreInfoOrganicSerpElementItem } = require('./AppDataAppStoreInfoOrganicSerpElementItem');
            let result = new AppDataAppStoreInfoOrganicSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "app_store_reviews_search") {

            const { AppDataAppStoreReviewsSearchSerpElementItem } = require('./AppDataAppStoreReviewsSearchSerpElementItem');
            let result = new AppDataAppStoreReviewsSearchSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseAppDataSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["title"] = this.title;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}