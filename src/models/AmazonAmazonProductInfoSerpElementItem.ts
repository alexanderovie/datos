import { RatingElement, IRatingElement } from "./RatingElement";
import { AmazonApplicableVouchersItem, IAmazonApplicableVouchersItem } from "./AmazonApplicableVouchersItem";
import { AmazonProductNewerModelInfo, IAmazonProductNewerModelInfo } from "./AmazonProductNewerModelInfo";
import { ProductCategoryInfo, IProductCategoryInfo } from "./ProductCategoryInfo";
import { BaseProductInformationItem, IBaseProductInformationItem } from "./BaseProductInformationItem";
import { BaseAmazonSerpElementItem, IBaseAmazonSerpElementItem } from "./BaseAmazonSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAmazonAmazonProductInfoSerpElementItem  extends IBaseAmazonSerpElementItem    {
        
        /** product title */
        title?: string | undefined
        
        /** product specs and other details */
        details?: string | undefined
        
        /** the URL of the product image */
        image_url?: string | undefined
        
        /** product brand name */
        author?: string | undefined
        
        /** ASIN of the product received in a POST array */
        data_asin?: string | undefined
        
        /** parent ASIN of the product */
        parent_asin?: string | undefined
        
        /** ASINs of all found product modifications */
        product_asins?: string[] | undefined
        
        /** the lower limit of the product price range
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
        
        /** “Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label */
        is_amazon_choice?: boolean | undefined
        
        /** product rating info */
        rating?: RatingElement | undefined
        
        /** indicates whether the newer model of the product is available */
        is_newer_model_available?: boolean | undefined
        
        /** array of objects containing information about applicable vouchers */
        applicable_vouchers?: AmazonApplicableVouchersItem[] | undefined
        
        /** information about the newer model of the product */
        newer_model?: AmazonProductNewerModelInfo | undefined
        
        /** contains related product categories */
        categories?: ProductCategoryInfo[] | undefined
        
        /** contains related product information */
        product_information?: BaseProductInformationItem[] | undefined
        
        /** contains URLs for all images of the product displayed on the left side of the main image */
        product_images_list?: string[] | undefined
        
        /** contains URLs for all videos of the product displayed on the right side of the main video */
        product_videos_list?: string[] | undefined
        
        /** contains description of the product */
        description?: string | undefined
        
        /** indicates whether the product is available for ordering
if the value is true, the product can be ordered */
        is_available?: boolean | undefined
        
        /** array of objects with top reviews from target location
to obtain additional local reviews, you can specify the load_more_local_reviews parameter in Task POST */
        top_local_reviews?: BaseAmazonSerpElementItem[] | undefined
        
        /** array of objects with top reviews from around the world */
        top_global_reviews?: BaseAmazonSerpElementItem[] | undefined

    [key: string]: any;

    }

export class AmazonAmazonProductInfoSerpElementItem  extends BaseAmazonSerpElementItem   implements IAmazonAmazonProductInfoSerpElementItem {
    
    /** product title */

    title?: string | undefined;
    
    /** product specs and other details */

    details?: string | undefined;
    
    /** the URL of the product image */

    image_url?: string | undefined;
    
    /** product brand name */

    author?: string | undefined;
    
    /** ASIN of the product received in a POST array */

    data_asin?: string | undefined;
    
    /** parent ASIN of the product */

    parent_asin?: string | undefined;
    
    /** ASINs of all found product modifications */

    product_asins?: string[] | undefined;
    
    /** the lower limit of the product price range
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
    
    /** “Amazon’s choice” label
if the value is true, the product is marked with the “Amazon’s choice” label */

    is_amazon_choice?: boolean | undefined;
    
    /** product rating info */

    rating?: RatingElement | undefined;
    
    /** indicates whether the newer model of the product is available */

    is_newer_model_available?: boolean | undefined;
    
    /** array of objects containing information about applicable vouchers */

    applicable_vouchers?: AmazonApplicableVouchersItem[] | undefined;
    
    /** information about the newer model of the product */

    newer_model?: AmazonProductNewerModelInfo | undefined;
    
    /** contains related product categories */

    categories?: ProductCategoryInfo[] | undefined;
    
    /** contains related product information */

    product_information?: BaseProductInformationItem[] | undefined;
    
    /** contains URLs for all images of the product displayed on the left side of the main image */

    product_images_list?: string[] | undefined;
    
    /** contains URLs for all videos of the product displayed on the right side of the main video */

    product_videos_list?: string[] | undefined;
    
    /** contains description of the product */

    description?: string | undefined;
    
    /** indicates whether the product is available for ordering
if the value is true, the product can be ordered */

    is_available?: boolean | undefined;
    
    /** array of objects with top reviews from target location
to obtain additional local reviews, you can specify the load_more_local_reviews parameter in Task POST */

    top_local_reviews?: BaseAmazonSerpElementItem[] | undefined;
    
    /** array of objects with top reviews from around the world */

    top_global_reviews?: BaseAmazonSerpElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IAmazonAmazonProductInfoSerpElementItem) {
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
            this.details = data["details"];
            this.image_url = data["image_url"];
            this.author = data["author"];
            this.data_asin = data["data_asin"];
            this.parent_asin = data["parent_asin"];
            this.product_asins = data["product_asins"];
            this.price_from = data["price_from"];
            this.price_to = data["price_to"];
            this.currency = data["currency"];
            this.is_amazon_choice = data["is_amazon_choice"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.is_newer_model_available = data["is_newer_model_available"];
            if (Array.isArray(data["applicable_vouchers"])) {
                this.applicable_vouchers = [];
                for (let item of data["applicable_vouchers"]) {
                    this.applicable_vouchers.push(AmazonApplicableVouchersItem.fromJS(item));
                }
            }
            this.newer_model = data["newer_model"] ? AmazonProductNewerModelInfo.fromJS(data["newer_model"]) : <any>undefined;
            if (Array.isArray(data["categories"])) {
                this.categories = [];
                for (let item of data["categories"]) {
                    this.categories.push(ProductCategoryInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["product_information"])) {
                this.product_information = [];
                for (let item of data["product_information"]) {
                    this.product_information.push(BaseProductInformationItem.fromJS(item));
                }
            }
            this.product_images_list = data["product_images_list"];
            this.product_videos_list = data["product_videos_list"];
            this.description = data["description"];
            this.is_available = data["is_available"];
            if (Array.isArray(data["top_local_reviews"])) {
                this.top_local_reviews = [];
                for (let item of data["top_local_reviews"]) {
                    this.top_local_reviews.push(BaseAmazonSerpElementItem.fromJS(item));
                }
            }
            if (Array.isArray(data["top_global_reviews"])) {
                this.top_global_reviews = [];
                for (let item of data["top_global_reviews"]) {
                    this.top_global_reviews.push(BaseAmazonSerpElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AmazonAmazonProductInfoSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonAmazonProductInfoSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["details"] = this.details;
        data["image_url"] = this.image_url;
        data["author"] = this.author;
        data["data_asin"] = this.data_asin;
        data["parent_asin"] = this.parent_asin;
        data["product_asins"] = this.product_asins;
        data["price_from"] = this.price_from;
        data["price_to"] = this.price_to;
        data["currency"] = this.currency;
        data["is_amazon_choice"] = this.is_amazon_choice;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["is_newer_model_available"] = this.is_newer_model_available;
        data["applicable_vouchers"] = null;
        if (Array.isArray(this.applicable_vouchers)) {
            data["applicable_vouchers"] = [];
            for (let item of this.applicable_vouchers) {
                if (item && typeof item.toJSON === "function") {
                    data["applicable_vouchers"].push(item?.toJSON());
                }
            }
        }
        data["newer_model"] = this.newer_model ? AmazonProductNewerModelInfo.fromJS(this.newer_model)?.toJSON() : <any>undefined;
        data["categories"] = null;
        if (Array.isArray(this.categories)) {
            data["categories"] = [];
            for (let item of this.categories) {
                if (item && typeof item.toJSON === "function") {
                    data["categories"].push(item?.toJSON());
                }
            }
        }
        data["product_information"] = null;
        if (Array.isArray(this.product_information)) {
            data["product_information"] = [];
            for (let item of this.product_information) {
                if (item && typeof item.toJSON === "function") {
                    data["product_information"].push(item?.toJSON());
                }
            }
        }
        data["product_images_list"] = this.product_images_list;
        data["product_videos_list"] = this.product_videos_list;
        data["description"] = this.description;
        data["is_available"] = this.is_available;
        data["top_local_reviews"] = null;
        if (Array.isArray(this.top_local_reviews)) {
            data["top_local_reviews"] = [];
            for (let item of this.top_local_reviews) {
                if (item && typeof item.toJSON === "function") {
                    data["top_local_reviews"].push(item?.toJSON());
                }
            }
        }
        data["top_global_reviews"] = null;
        if (Array.isArray(this.top_global_reviews)) {
            data["top_global_reviews"] = [];
            for (let item of this.top_global_reviews) {
                if (item && typeof item.toJSON === "function") {
                    data["top_global_reviews"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}