import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { AmazonDeliveryInfo, IAmazonDeliveryInfo } from "./AmazonDeliveryInfo";
import { BaseAmazonSerpElementItem, IBaseAmazonSerpElementItem } from "./BaseAmazonSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAmazonAmazonPaidSerpElementItem  extends IBaseAmazonSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** Amazon domain */
        domain?: string | undefined
        
        /** product title */
        title?: string | undefined
        
        /** URL of the product page */
        url?: string | undefined
        
        /** ASIN of the product
learn more about ASIN in this help center guide */
        asin?: string | undefined
        
        /** URL of the product image featured in the results */
        image_url?: string | undefined
        
        /** the regular price of a product
example:
49.98 */
        price_from?: number | undefined
        
        /** the upper limit of the product price range
example:
384.99 */
        price_to?: number | undefined
        
        /** currency in the ISO format
example:
USD */
        currency?: string | undefined
        
        /** special offer details
contains special offer details, including coupon and Subscribe & Save discounts */
        special_offers?: string[] | undefined
        
        /** “Best Seller” label
if the value is true, the product is marked with the “Best Seller” label */
        is_best_seller?: boolean | undefined
        
        /** “Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label */
        is_amazon_choice?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** delivery information
delivery information including free and fast delivery date ranges */
        delivery_info?: AmazonDeliveryInfo | undefined
        
        /** number of product purchases in the past month */
        bought_past_month?: number | undefined
        
        /** unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J */
        data_asin?: string | undefined

    [key: string]: any;

    }

export class AmazonAmazonPaidSerpElementItem  extends BaseAmazonSerpElementItem   implements IAmazonAmazonPaidSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** Amazon domain */

    domain?: string | undefined;
    
    /** product title */

    title?: string | undefined;
    
    /** URL of the product page */

    url?: string | undefined;
    
    /** ASIN of the product
learn more about ASIN in this help center guide */

    asin?: string | undefined;
    
    /** URL of the product image featured in the results */

    image_url?: string | undefined;
    
    /** the regular price of a product
example:
49.98 */

    price_from?: number | undefined;
    
    /** the upper limit of the product price range
example:
384.99 */

    price_to?: number | undefined;
    
    /** currency in the ISO format
example:
USD */

    currency?: string | undefined;
    
    /** special offer details
contains special offer details, including coupon and Subscribe & Save discounts */

    special_offers?: string[] | undefined;
    
    /** “Best Seller” label
if the value is true, the product is marked with the “Best Seller” label */

    is_best_seller?: boolean | undefined;
    
    /** “Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label */

    is_amazon_choice?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** delivery information
delivery information including free and fast delivery date ranges */

    delivery_info?: AmazonDeliveryInfo | undefined;
    
    /** number of product purchases in the past month */

    bought_past_month?: number | undefined;
    
    /** unique product identifier on Amazon
note that there is no full list of possible values as the data_asin is a dynamic value assigned by Amazon
example:
B07G82D89J */

    data_asin?: string | undefined;

    [key: string]: any;


    constructor(data?: IAmazonAmazonPaidSerpElementItem) {
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
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.delivery_info = data["delivery_info"] ? AmazonDeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
            this.bought_past_month = data["bought_past_month"];
            this.data_asin = data["data_asin"];
        }
    }

    static fromJS(data: any): AmazonAmazonPaidSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonAmazonPaidSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
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
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["delivery_info"] = this.delivery_info ? AmazonDeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        data["bought_past_month"] = this.bought_past_month;
        data["data_asin"] = this.data_asin;
        return data;
    }
}