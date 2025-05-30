import { ApiException, throwException } from "./ApiException"

export interface IBaseMerchantSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP */
        rank_absolute?: number | undefined
        
        /** alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined

    [key: string]: any;

    }

export class BaseMerchantSerpElementItem  implements IBaseMerchantSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements found in Google Shopping SERP */

    rank_absolute?: number | undefined;
    
    /** alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseMerchantSerpElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

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
        }
    }

    static fromJS(data: any): BaseMerchantSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_shopping_serp") {

            const { GoogleShoppingSerpMerchantSerpElementItem } = require('./GoogleShoppingSerpMerchantSerpElementItem');
            let result = new GoogleShoppingSerpMerchantSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_shopping_paid") {

            const { GoogleShoppingPaidMerchantSerpElementItem } = require('./GoogleShoppingPaidMerchantSerpElementItem');
            let result = new GoogleShoppingPaidMerchantSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_shopping_sponsored_carousel") {

            const { GoogleShoppingSponsoredCarouselMerchantSerpElementItem } = require('./GoogleShoppingSponsoredCarouselMerchantSerpElementItem');
            let result = new GoogleShoppingSponsoredCarouselMerchantSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            const { RelatedSearchesMerchantSerpElementItem } = require('./RelatedSearchesMerchantSerpElementItem');
            let result = new RelatedSearchesMerchantSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "shops_list") {

            const { ShopsListMerchantSerpElementItem } = require('./ShopsListMerchantSerpElementItem');
            let result = new ShopsListMerchantSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "buy_on_google") {

            const { BuyOnGoogleMerchantSerpElementItem } = require('./BuyOnGoogleMerchantSerpElementItem');
            let result = new BuyOnGoogleMerchantSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "shopping_specification") {

            const { ShoppingSpecificationMerchantSerpElementItem } = require('./ShoppingSpecificationMerchantSerpElementItem');
            let result = new ShoppingSpecificationMerchantSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_info_element") {

            const { ProductInfoElementMerchantSerpElementItem } = require('./ProductInfoElementMerchantSerpElementItem');
            let result = new ProductInfoElementMerchantSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseMerchantSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        return data;
    }
}