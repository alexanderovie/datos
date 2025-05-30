import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { RatingElement, IRatingElement } from "./RatingElement";
import { AmazonDeliveryInfo, IAmazonDeliveryInfo } from "./AmazonDeliveryInfo";
import { BaseAmazonSerpElementItem, IBaseAmazonSerpElementItem } from "./BaseAmazonSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAmazonAmazonSellerMainItemSerpElementItem  extends IBaseAmazonSerpElementItem    {
        
        /** business name of the seller */
        seller_name?: string | undefined
        
        /** url forwarding to the seller’s page on Amazon */
        seller_url?: string | undefined
        
        /** sender company name */
        ships_from?: string | undefined
        
        /** product pricing details
if there are no details, the value will be null */
        price?: PriceInfo | undefined
        
        /** seller rating details
seller popularity rate based on customer reviews */
        rating?: RatingElement | undefined
        
        /** product condition
condition of the product offered by the seller */
        condition?: string | undefined
        
        /** product condition details
expanded details on the condition of the product offered by the seller */
        condition_description?: string | undefined
        
        /** delivery information
delivery information including free and fast delivery date ranges */
        delivery_info?: AmazonDeliveryInfo | undefined

    [key: string]: any;

    }

export class AmazonAmazonSellerMainItemSerpElementItem  extends BaseAmazonSerpElementItem   implements IAmazonAmazonSellerMainItemSerpElementItem {
    
    /** business name of the seller */

    seller_name?: string | undefined;
    
    /** url forwarding to the seller’s page on Amazon */

    seller_url?: string | undefined;
    
    /** sender company name */

    ships_from?: string | undefined;
    
    /** product pricing details
if there are no details, the value will be null */

    price?: PriceInfo | undefined;
    
    /** seller rating details
seller popularity rate based on customer reviews */

    rating?: RatingElement | undefined;
    
    /** product condition
condition of the product offered by the seller */

    condition?: string | undefined;
    
    /** product condition details
expanded details on the condition of the product offered by the seller */

    condition_description?: string | undefined;
    
    /** delivery information
delivery information including free and fast delivery date ranges */

    delivery_info?: AmazonDeliveryInfo | undefined;

    [key: string]: any;


    constructor(data?: IAmazonAmazonSellerMainItemSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.seller_name = data["seller_name"];
            this.seller_url = data["seller_url"];
            this.ships_from = data["ships_from"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.condition = data["condition"];
            this.condition_description = data["condition_description"];
            this.delivery_info = data["delivery_info"] ? AmazonDeliveryInfo.fromJS(data["delivery_info"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AmazonAmazonSellerMainItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonAmazonSellerMainItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["seller_name"] = this.seller_name;
        data["seller_url"] = this.seller_url;
        data["ships_from"] = this.ships_from;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["condition"] = this.condition;
        data["condition_description"] = this.condition_description;
        data["delivery_info"] = this.delivery_info ? AmazonDeliveryInfo.fromJS(this.delivery_info)?.toJSON() : <any>undefined;
        return data;
    }
}