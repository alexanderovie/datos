import { RatingElement, IRatingElement } from "./RatingElement";
import { AmazonDeliveryInfo, IAmazonDeliveryInfo } from "./AmazonDeliveryInfo";

export interface IAmazonInfo   {
        
        /** search engine type */
        se_type?: string
        
        /** type of element */
        type?: string
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in Amazon SERP
absolute position among all the elements in SERP */
        rank_absolute?: number
        
        /** the alignment of the element in Amazon SERP
can take the following values:
left, right */
        position?: string
        
        /** the XPath of the element */
        xpath?: string
        
        /** Amazon domain */
        domain?: string
        
        /** product title */
        title?: string
        
        /** URL of the product page */
        url?: string
        
        /** ASIN of the product
learn more about ASIN in this help center guide */
        asin?: string
        
        /** URL of the product image featured in the results */
        image_url?: string
        
        /** the regular price of a product
example:
49.98 */
        price_from?: number
        
        /** the upper limit of the product price range
example:
384.99 */
        price_to?: number
        
        /** currency in the ISO format
example:
USD */
        currency?: string
        
        /** special offer details
contains special offer details, including coupon and Subscribe & Save discounts */
        special_offers?: string[]
        
        /** “Best Seller” label
if the value is true, the product is marked with the “Best Seller” label */
        is_best_seller?: boolean
        
        /** “Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label */
        is_amazon_choice?: boolean
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement
        
        /** delivery information
delivery information including free and fast delivery date ranges */
        delivery_info?: AmazonDeliveryInfo
        
        bought_past_month?: number

    [key: string]: any;

    }

export class AmazonInfo  implements IAmazonInfo {
    
    /** search engine type */

    se_type?: string;
    
    /** type of element */

    type?: string;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in Amazon SERP
absolute position among all the elements in SERP */

    rank_absolute?: number;
    
    /** the alignment of the element in Amazon SERP
can take the following values:
left, right */

    position?: string;
    
    /** the XPath of the element */

    xpath?: string;
    
    /** Amazon domain */

    domain?: string;
    
    /** product title */

    title?: string;
    
    /** URL of the product page */

    url?: string;
    
    /** ASIN of the product
learn more about ASIN in this help center guide */

    asin?: string;
    
    /** URL of the product image featured in the results */

    image_url?: string;
    
    /** the regular price of a product
example:
49.98 */

    price_from?: number;
    
    /** the upper limit of the product price range
example:
384.99 */

    price_to?: number;
    
    /** currency in the ISO format
example:
USD */

    currency?: string;
    
    /** special offer details
contains special offer details, including coupon and Subscribe & Save discounts */

    special_offers?: string[];
    
    /** “Best Seller” label
if the value is true, the product is marked with the “Best Seller” label */

    is_best_seller?: boolean;
    
    /** “Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label */

    is_amazon_choice?: boolean;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement;
    
    /** delivery information
delivery information including free and fast delivery date ranges */

    delivery_info?: AmazonDeliveryInfo;

    bought_past_month?: number;

    [key: string]: any;


    constructor(data?: IAmazonInfo) {

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
            this.se_type = data["se_type"];
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.asin = data["asin"];
            this.image_url = data["image_url"];
            this.price_from = data["price_from"];
            this.price_to = data["price_to"];
            this.currency = data["currency"];
            this.special_offers = data["special_offers"];
            this.is_best_seller = data["is_best_seller"];
            this.is_amazon_choice = data["is_amazon_choice"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.delivery_info = data["delivery_info"] ? AmazonDeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
            this.bought_past_month = data["bought_past_month"];
        }
    }

    static fromJS(data: any): AmazonInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["asin"] = this.asin;
        data["image_url"] = this.image_url;
        data["price_from"] = this.price_from;
        data["price_to"] = this.price_to;
        data["currency"] = this.currency;
        data["special_offers"] = this.special_offers;
        data["is_best_seller"] = this.is_best_seller;
        data["is_amazon_choice"] = this.is_amazon_choice;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["delivery_info"] = this.delivery_info ? AmazonDeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        data["bought_past_month"] = this.bought_past_month;
        return data;
    }
}