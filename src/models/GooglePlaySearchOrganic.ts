import { RatingElement, IRatingElement } from "./RatingElement";
import { PriceInfo, IPriceInfo } from "./PriceInfo";

export interface IGooglePlaySearchOrganic   {
        
        /** type of element */
        type?: string
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string
        
        /** id of the app */
        app_id?: string
        
        /** title of the app */
        title?: string
        
        /** URL to the app page on Google Play */
        url?: string
        
        /** URL to the app icon */
        icon?: string
        
        /** the total number of reviews of the app */
        reviews_count?: number
        
        /** average rating of the app */
        rating?: RatingElement
        
        /** indicates whether the app is free */
        is_free?: boolean
        
        /** price of the app */
        price?: PriceInfo
        
        /** name of the app developer */
        developer?: string
        
        /** URL to the developer page on Google Play */
        developer_url?: string

    [key: string]: any;

    }

export class GooglePlaySearchOrganic  implements IGooglePlaySearchOrganic {
    
    /** type of element */

    type?: string;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string;
    
    /** id of the app */

    app_id?: string;
    
    /** title of the app */

    title?: string;
    
    /** URL to the app page on Google Play */

    url?: string;
    
    /** URL to the app icon */

    icon?: string;
    
    /** the total number of reviews of the app */

    reviews_count?: number;
    
    /** average rating of the app */

    rating?: RatingElement;
    
    /** indicates whether the app is free */

    is_free?: boolean;
    
    /** price of the app */

    price?: PriceInfo;
    
    /** name of the app developer */

    developer?: string;
    
    /** URL to the developer page on Google Play */

    developer_url?: string;

    [key: string]: any;


    constructor(data?: IGooglePlaySearchOrganic) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.app_id = data["app_id"];
            this.title = data["title"];
            this.url = data["url"];
            this.icon = data["icon"];
            this.reviews_count = data["reviews_count"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.is_free = data["is_free"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.developer = data["developer"];
            this.developer_url = data["developer_url"];
        }
    }

    static fromJS(data: any): GooglePlaySearchOrganic {
        data = typeof data === 'object' ? data : {};


        let result = new GooglePlaySearchOrganic();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["app_id"] = this.app_id;
        data["title"] = this.title;
        data["url"] = this.url;
        data["icon"] = this.icon;
        data["reviews_count"] = this.reviews_count;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["is_free"] = this.is_free;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["developer"] = this.developer;
        data["developer_url"] = this.developer_url;
        return data;
    }
}