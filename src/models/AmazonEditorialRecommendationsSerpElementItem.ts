import { AmazonSerpElement, IAmazonSerpElement } from "./AmazonSerpElement";
import { BaseAmazonSerpElementItem, IBaseAmazonSerpElementItem } from "./BaseAmazonSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAmazonEditorialRecommendationsSerpElementItem  extends IBaseAmazonSerpElementItem    {
        
        /** Amazon product items */
        items?: AmazonSerpElement[] | undefined

    [key: string]: any;

    }

export class AmazonEditorialRecommendationsSerpElementItem  extends BaseAmazonSerpElementItem   implements IAmazonEditorialRecommendationsSerpElementItem {
    
    /** Amazon product items */

    items?: AmazonSerpElement[] | undefined;

    [key: string]: any;


    constructor(data?: IAmazonEditorialRecommendationsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AmazonSerpElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AmazonEditorialRecommendationsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonEditorialRecommendationsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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