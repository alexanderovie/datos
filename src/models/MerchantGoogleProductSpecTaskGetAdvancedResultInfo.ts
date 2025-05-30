import { BaseMerchantSerpElementItem, IBaseMerchantSerpElementItem } from "./BaseMerchantSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IMerchantGoogleProductSpecTaskGetAdvancedResultInfo   {
        
        /** product ID in a POST array
learn more about the parameter in this help center guide */
        product_id?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** title of the product */
        title?: string | undefined
        
        /** description of the product */
        description?: string | undefined
        
        /** URL of the product image */
        image_url?: string | undefined
        
        /** tags of the product */
        tags?: string[] | undefined
        
        /** direct URL to search engine results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** types of items found on the product specification page
possible item types:
shopping_specification */
        item_types?: string[] | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** items on the product specification page
contains all product attributes and related data listed on the product specification page */
        items?: BaseMerchantSerpElementItem[] | undefined

    [key: string]: any;

    }

export class MerchantGoogleProductSpecTaskGetAdvancedResultInfo  implements IMerchantGoogleProductSpecTaskGetAdvancedResultInfo {
    
    /** product ID in a POST array
learn more about the parameter in this help center guide */

    product_id?: string | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** title of the product */

    title?: string | undefined;
    
    /** description of the product */

    description?: string | undefined;
    
    /** URL of the product image */

    image_url?: string | undefined;
    
    /** tags of the product */

    tags?: string[] | undefined;
    
    /** direct URL to search engine results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;
    
    /** date and time when the result was received
in the format: “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** types of items found on the product specification page
possible item types:
shopping_specification */

    item_types?: string[] | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** items on the product specification page
contains all product attributes and related data listed on the product specification page */

    items?: BaseMerchantSerpElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductSpecTaskGetAdvancedResultInfo) {

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
            this.product_id = data["product_id"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.title = data["title"];
            this.description = data["description"];
            this.image_url = data["image_url"];
            this.tags = data["tags"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseMerchantSerpElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantGoogleProductSpecTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductSpecTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["product_id"] = this.product_id;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["title"] = this.title;
        data["description"] = this.description;
        data["image_url"] = this.image_url;
        data["tags"] = this.tags;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["item_types"] = this.item_types;
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