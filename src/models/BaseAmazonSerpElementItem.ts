import { ApiException, throwException } from "./ApiException"

export interface IBaseAmazonSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in Amazon SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the alignment of the element in Amazon SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseAmazonSerpElementItem  implements IBaseAmazonSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in Amazon SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the alignment of the element in Amazon SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseAmazonSerpElementItem) {

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
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseAmazonSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "amazon_serp") {

            const { AmazonAmazonSerpSerpElementItem } = require('./AmazonAmazonSerpSerpElementItem');
            let result = new AmazonAmazonSerpSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "amazon_paid") {

            const { AmazonAmazonPaidSerpElementItem } = require('./AmazonAmazonPaidSerpElementItem');
            let result = new AmazonAmazonPaidSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "editorial_recommendations") {

            const { AmazonEditorialRecommendationsSerpElementItem } = require('./AmazonEditorialRecommendationsSerpElementItem');
            let result = new AmazonEditorialRecommendationsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            const { AmazonRelatedSearchesSerpElementItem } = require('./AmazonRelatedSearchesSerpElementItem');
            let result = new AmazonRelatedSearchesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_rated_from_our_brands") {

            const { AmazonTopRatedFromOurBrandsSerpElementItem } = require('./AmazonTopRatedFromOurBrandsSerpElementItem');
            let result = new AmazonTopRatedFromOurBrandsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "amazon_review_item") {

            const { AmazonAmazonReviewItemSerpElementItem } = require('./AmazonAmazonReviewItemSerpElementItem');
            let result = new AmazonAmazonReviewItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "amazon_product_info") {

            const { AmazonAmazonProductInfoSerpElementItem } = require('./AmazonAmazonProductInfoSerpElementItem');
            let result = new AmazonAmazonProductInfoSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "amazon_seller_main_item") {

            const { AmazonAmazonSellerMainItemSerpElementItem } = require('./AmazonAmazonSellerMainItemSerpElementItem');
            let result = new AmazonAmazonSellerMainItemSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "amazon_seller_item") {

            const { AmazonAmazonSellerItemSerpElementItem } = require('./AmazonAmazonSellerItemSerpElementItem');
            let result = new AmazonAmazonSellerItemSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseAmazonSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        return data;
    }
}