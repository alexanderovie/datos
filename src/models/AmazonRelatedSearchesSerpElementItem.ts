import { RelatedSearchesElement, IRelatedSearchesElement } from "./RelatedSearchesElement";
import { BaseAmazonSerpElementItem, IBaseAmazonSerpElementItem } from "./BaseAmazonSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAmazonRelatedSearchesSerpElementItem  extends IBaseAmazonSerpElementItem    {
        
        /** Amazon product items */
        items?: RelatedSearchesElement[] | undefined

    [key: string]: any;

    }

export class AmazonRelatedSearchesSerpElementItem  extends BaseAmazonSerpElementItem   implements IAmazonRelatedSearchesSerpElementItem {
    
    /** Amazon product items */

    items?: RelatedSearchesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IAmazonRelatedSearchesSerpElementItem) {
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
                    this.items.push(RelatedSearchesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AmazonRelatedSearchesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AmazonRelatedSearchesSerpElementItem();
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