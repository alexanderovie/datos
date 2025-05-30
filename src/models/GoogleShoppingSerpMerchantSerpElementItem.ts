import { RatingElement, IRatingElement } from "./RatingElement";
import { DeliveryInfo, IDeliveryInfo } from "./DeliveryInfo";
import { StoresCountInfo, IStoresCountInfo } from "./StoresCountInfo";
import { BaseMerchantSerpElementItem, IBaseMerchantSerpElementItem } from "./BaseMerchantSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleShoppingSerpMerchantSerpElementItem  extends IBaseMerchantSerpElementItem    {
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** description of the product in Google Shopping SERP */
        description?: string | undefined
        
        /** URL to the product page on the seller’s website */
        url?: string | undefined
        
        /** URL to the product page on Google Shopping */
        shopping_url?: string | undefined
        
        /** tags assigned to the product */
        tags?: string[] | undefined
        
        /** product price
example:
384.99 */
        price?: number | undefined
        
        /** price multiplier for instalment plan
indicates the number of months covered by the monthly payment for the product */
        price_multiplier?: number | undefined
        
        /** product old price
displayed if the product price has been changed
example:
499 */
        old_price?: number | undefined
        
        /** currency in the ISO format
example:
USD */
        currency?: string | undefined
        
        /** unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide */
        product_id?: string | undefined
        
        /** unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076 */
        data_docid?: string | undefined
        
        /** name of the seller
the name of the company that placed a corresponding product on Google Shopping */
        seller?: string | undefined
        
        /** object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint */
        additional_specifications?: { [key: string]: string; } | undefined
        
        /** number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null */
        reviews_count?: number | undefined
        
        /** “best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null */
        is_best_match?: boolean | undefined
        
        /** product rating
the product popularity rate based on product reviews */
        product_rating?: RatingElement | undefined
        
        /** shop rating
the popularity rate of the seller based on user reviews */
        shop_rating?: RatingElement | undefined
        
        /** URLs to the images of the product
the first URL in the array is the featured image of the product */
        product_images?: string[] | undefined
        
        /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */
        shop_ad_aclk?: string | undefined
        
        /** delivery information
delivery information including free and fast delivery date ranges */
        delivery_info?: DeliveryInfo | undefined
        
        /** stores count information
contains information about the number of stores that offer the same product */
        stores_count_info?: StoresCountInfo | undefined

    [key: string]: any;

    }

export class GoogleShoppingSerpMerchantSerpElementItem  extends BaseMerchantSerpElementItem   implements IGoogleShoppingSerpMerchantSerpElementItem {
    
    /** XPath of the element */

    xpath?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** description of the product in Google Shopping SERP */

    description?: string | undefined;
    
    /** URL to the product page on the seller’s website */

    url?: string | undefined;
    
    /** URL to the product page on Google Shopping */

    shopping_url?: string | undefined;
    
    /** tags assigned to the product */

    tags?: string[] | undefined;
    
    /** product price
example:
384.99 */

    price?: number | undefined;
    
    /** price multiplier for instalment plan
indicates the number of months covered by the monthly payment for the product */

    price_multiplier?: number | undefined;
    
    /** product old price
displayed if the product price has been changed
example:
499 */

    old_price?: number | undefined;
    
    /** currency in the ISO format
example:
USD */

    currency?: string | undefined;
    
    /** unique product identifier on Google Shopping
note that there is no full list of possible values as the product_id is a dynamic value assigned by Google
if there are no values, you will get null
example:
4485466949985702538
learn more about the parameter in this help center guide */

    product_id?: string | undefined;
    
    /** unique identifier of the SERP data element
note that there is no full list of possible values as the data_docid is a dynamic value assigned by Google
example:
17363035694596624076 */

    data_docid?: string | undefined;
    
    /** name of the seller
the name of the company that placed a corresponding product on Google Shopping */

    seller?: string | undefined;
    
    /** object containing additional url parameters
you can get more details about the product by using this object in the POST request to the Google Shopping Product Specification and Google Shopping Sellers endpoint */

    additional_specifications?: { [key: string]: string; } | undefined;
    
    /** number of product reviews
indicates the number of reviews left by users on Google Shopping
if there are no values, you will get null */

    reviews_count?: number | undefined;
    
    /** “best match” label
if the value is true, the product is marked with the “best match” label
if there are no values, you will get null */

    is_best_match?: boolean | undefined;
    
    /** product rating
the product popularity rate based on product reviews */

    product_rating?: RatingElement | undefined;
    
    /** shop rating
the popularity rate of the seller based on user reviews */

    shop_rating?: RatingElement | undefined;
    
    /** URLs to the images of the product
the first URL in the array is the featured image of the product */

    product_images?: string[] | undefined;
    
    /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */

    shop_ad_aclk?: string | undefined;
    
    /** delivery information
delivery information including free and fast delivery date ranges */

    delivery_info?: DeliveryInfo | undefined;
    
    /** stores count information
contains information about the number of stores that offer the same product */

    stores_count_info?: StoresCountInfo | undefined;

    [key: string]: any;


    constructor(data?: IGoogleShoppingSerpMerchantSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.xpath = data["xpath"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.shopping_url = data["shopping_url"];
            this.tags = data["tags"];
            this.price = data["price"];
            this.price_multiplier = data["price_multiplier"];
            this.old_price = data["old_price"];
            this.currency = data["currency"];
            this.product_id = data["product_id"];
            this.data_docid = data["data_docid"];
            this.seller = data["seller"];
            this.additional_specifications = data["additional_specifications"];
            this.reviews_count = data["reviews_count"];
            this.is_best_match = data["is_best_match"];
            this.product_rating = data["product_rating"] ? RatingElement.fromJS(data["product_rating"]) : <any>undefined;
            this.shop_rating = data["shop_rating"] ? RatingElement.fromJS(data["shop_rating"]) : <any>undefined;
            this.product_images = data["product_images"];
            this.shop_ad_aclk = data["shop_ad_aclk"];
            this.delivery_info = data["delivery_info"] ? DeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
            this.stores_count_info = data["stores_count_info"] ? StoresCountInfo.fromJS(data["stores_count_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleShoppingSerpMerchantSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleShoppingSerpMerchantSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["shopping_url"] = this.shopping_url;
        data["tags"] = this.tags;
        data["price"] = this.price;
        data["price_multiplier"] = this.price_multiplier;
        data["old_price"] = this.old_price;
        data["currency"] = this.currency;
        data["product_id"] = this.product_id;
        data["data_docid"] = this.data_docid;
        data["seller"] = this.seller;
        data["additional_specifications"] = this.additional_specifications;
        data["reviews_count"] = this.reviews_count;
        data["is_best_match"] = this.is_best_match;
        data["product_rating"] = this.product_rating ? RatingElement.fromJS(this.product_rating)?.toJSON() : <any>undefined;
        data["shop_rating"] = this.shop_rating ? RatingElement.fromJS(this.shop_rating)?.toJSON() : <any>undefined;
        data["product_images"] = this.product_images;
        data["shop_ad_aclk"] = this.shop_ad_aclk;
        data["delivery_info"] = this.delivery_info ? DeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        data["stores_count_info"] = this.stores_count_info ? StoresCountInfo.fromJS(this.stores_count_info)?.toJSON() : <any>undefined;
        return data;
    }
}