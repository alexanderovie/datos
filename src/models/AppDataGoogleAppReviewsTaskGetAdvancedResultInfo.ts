import { RatingElement, IRatingElement } from "./RatingElement";
import { GooglePlayReviewsSearch, IGooglePlayReviewsSearch } from "./GooglePlayReviewsSearch";

export interface IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo   {
        
        /** application id received in a POST array */
        app_id?: string
        
        /** type of element */
        type?: string
        
        /** search engine domain in a POST array */
        se_domain?: string
        
        /** location code in a POST array */
        location_code?: number
        
        /** language code in a POST array */
        language_code?: string
        
        /** direct URL to search engine results
you can use it to make sure that we provided accurate results */
        check_url?: string
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string
        
        /** title of the app
title of the application for which the reviews are collected */
        title?: string
        
        /** rating of the app
rating of the application for which the reviews are collected */
        rating?: RatingElement
        
        /** the total number of reviews */
        reviews_count?: number
        
        /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */
        items_count?: number
        
        /** found reviews
you can get more results by using the depth parameter when setting a task */
        items?: GooglePlayReviewsSearch[]

    [key: string]: any;

    }

export class AppDataGoogleAppReviewsTaskGetAdvancedResultInfo  implements IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo {
    
    /** application id received in a POST array */

    app_id?: string;
    
    /** type of element */

    type?: string;
    
    /** search engine domain in a POST array */

    se_domain?: string;
    
    /** location code in a POST array */

    location_code?: number;
    
    /** language code in a POST array */

    language_code?: string;
    
    /** direct URL to search engine results
you can use it to make sure that we provided accurate results */

    check_url?: string;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string;
    
    /** title of the app
title of the application for which the reviews are collected */

    title?: string;
    
    /** rating of the app
rating of the application for which the reviews are collected */

    rating?: RatingElement;
    
    /** the total number of reviews */

    reviews_count?: number;
    
    /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */

    items_count?: number;
    
    /** found reviews
you can get more results by using the depth parameter when setting a task */

    items?: GooglePlayReviewsSearch[];

    [key: string]: any;


    constructor(data?: IAppDataGoogleAppReviewsTaskGetAdvancedResultInfo) {

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
            this.app_id = data["app_id"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.title = data["title"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.reviews_count = data["reviews_count"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GooglePlayReviewsSearch.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataGoogleAppReviewsTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataGoogleAppReviewsTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["app_id"] = this.app_id;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["title"] = this.title;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["reviews_count"] = this.reviews_count;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}