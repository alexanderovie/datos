import { RatingElement, IRatingElement } from "./RatingElement";
import { BaseMerchantSerpElementItem, IBaseMerchantSerpElementItem } from "./BaseMerchantSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IShopsListMerchantSerpElementItem  extends IBaseMerchantSerpElementItem    {
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** product title */
        title?: string | undefined
        
        /** Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint */
        url?: string | undefined
        
        /** details and special offers
if there are no details, the value will be null */
        details?: string | undefined
        
        /** product price without tax and shipping */
        base_price?: number | undefined
        
        /** the amount of tax
tax is specified as the actual amount of money, not as the percentage */
        tax?: number | undefined
        
        /** product shipping price */
        shipping_price?: number | undefined
        
        /** product price including tax and shipping */
        total_price?: number | undefined
        
        /** currency in the ISO format
example:
USD */
        currency?: string | undefined
        
        /** monthly price multiplier
indicates the number of months covered by the monthly payment for the product */
        price_multiplier?: number | undefined
        
        /** name of the seller
the name of the company that placed a corresponding product on Google Shopping */
        seller_name?: string | undefined
        
        /** shop rating
the shop popularity rate based on product reviews */
        rating?: RatingElement | undefined
        
        /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */
        shop_ad_aclk?: string | undefined
        
        /** indicated condition of the product
possible values: Used, Refurbished, New, null */
        product_condition?: string | undefined
        
        /** data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP */
        product_annotation?: string | undefined

    [key: string]: any;

    }

export class ShopsListMerchantSerpElementItem  extends BaseMerchantSerpElementItem   implements IShopsListMerchantSerpElementItem {
    
    /** XPath of the element */

    xpath?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** product title */

    title?: string | undefined;
    
    /** Google Shopping URL forwarding to the product page on the seller’s website
if you want to obtain a URL of the advertisement forwarding to the product page on the seller’s website, please refer to the Google Shopping Sellers Ad URL endpoint */

    url?: string | undefined;
    
    /** details and special offers
if there are no details, the value will be null */

    details?: string | undefined;
    
    /** product price without tax and shipping */

    base_price?: number | undefined;
    
    /** the amount of tax
tax is specified as the actual amount of money, not as the percentage */

    tax?: number | undefined;
    
    /** product shipping price */

    shipping_price?: number | undefined;
    
    /** product price including tax and shipping */

    total_price?: number | undefined;
    
    /** currency in the ISO format
example:
USD */

    currency?: string | undefined;
    
    /** monthly price multiplier
indicates the number of months covered by the monthly payment for the product */

    price_multiplier?: number | undefined;
    
    /** name of the seller
the name of the company that placed a corresponding product on Google Shopping */

    seller_name?: string | undefined;
    
    /** shop rating
the shop popularity rate based on product reviews */

    rating?: RatingElement | undefined;
    
    /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */

    shop_ad_aclk?: string | undefined;
    
    /** indicated condition of the product
possible values: Used, Refurbished, New, null */

    product_condition?: string | undefined;
    
    /** data from annotations and badges with special offers
if there is no annotation for this product, the value will be null
examples: LOW PRICE, SPECIAL OFFER, SALE, PRICE DROP */

    product_annotation?: string | undefined;

    [key: string]: any;


    constructor(data?: IShopsListMerchantSerpElementItem) {
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
            this.url = data["url"];
            this.details = data["details"];
            this.base_price = data["base_price"];
            this.tax = data["tax"];
            this.shipping_price = data["shipping_price"];
            this.total_price = data["total_price"];
            this.currency = data["currency"];
            this.price_multiplier = data["price_multiplier"];
            this.seller_name = data["seller_name"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.shop_ad_aclk = data["shop_ad_aclk"];
            this.product_condition = data["product_condition"];
            this.product_annotation = data["product_annotation"];
        }
    }

    static fromJS(data: any): ShopsListMerchantSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ShopsListMerchantSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["details"] = this.details;
        data["base_price"] = this.base_price;
        data["tax"] = this.tax;
        data["shipping_price"] = this.shipping_price;
        data["total_price"] = this.total_price;
        data["currency"] = this.currency;
        data["price_multiplier"] = this.price_multiplier;
        data["seller_name"] = this.seller_name;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["shop_ad_aclk"] = this.shop_ad_aclk;
        data["product_condition"] = this.product_condition;
        data["product_annotation"] = this.product_annotation;
        return data;
    }
}