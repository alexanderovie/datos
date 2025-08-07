import { RatingElement, IRatingElement } from "./RatingElement";
import { ProductSeller, IProductSeller } from "./ProductSeller";
import { ProductVariation, IProductVariation } from "./ProductVariation";


export interface IProductInfoElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank on the product specification page
absolute position among all the elements found on the product specification page */
        rank_absolute?: number | undefined
        
        /** alignment of the element on the product specification page
can take the following values:
right, left */
        position?: string | undefined
        
        /** product_id received in a POST array
ilearn more about the parameter in this help center guide */
        product_id?: string | undefined
        
        /** title of the product */
        title?: string | undefined
        
        /** description of the product */
        description?: string | undefined
        
        /** product url
url of the product on Google Shopping */
        url?: string | undefined
        
        /** product images
contains urls to product images */
        images?: string[] | undefined
        
        /** product features
contains snippets with the description of product features */
        features?: string[] | undefined
        
        /** product rating 
the popularity rate based on reviews */
        rating?: RatingElement | undefined
        
        /** number of seller reviews
number of reviews on the product seller’s account */
        seller_reviews_count?: number | undefined
        
        /** sellers of the product
number of reviews on the product seller’s account */
        sellers?: ProductSeller[] | undefined
        
        /** variations of the product
contains brief information about different product variations */
        variations?: ProductVariation[] | undefined

    [key: string]: any;

    }

export class ProductInfoElement  implements IProductInfoElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank on the product specification page
absolute position among all the elements found on the product specification page */

    rank_absolute?: number | undefined;
    
    /** alignment of the element on the product specification page
can take the following values:
right, left */

    position?: string | undefined;
    
    /** product_id received in a POST array
ilearn more about the parameter in this help center guide */

    product_id?: string | undefined;
    
    /** title of the product */

    title?: string | undefined;
    
    /** description of the product */

    description?: string | undefined;
    
    /** product url
url of the product on Google Shopping */

    url?: string | undefined;
    
    /** product images
contains urls to product images */

    images?: string[] | undefined;
    
    /** product features
contains snippets with the description of product features */

    features?: string[] | undefined;
    
    /** product rating 
the popularity rate based on reviews */

    rating?: RatingElement | undefined;
    
    /** number of seller reviews
number of reviews on the product seller’s account */

    seller_reviews_count?: number | undefined;
    
    /** sellers of the product
number of reviews on the product seller’s account */

    sellers?: ProductSeller[] | undefined;
    
    /** variations of the product
contains brief information about different product variations */

    variations?: ProductVariation[] | undefined;

    [key: string]: any;


    constructor(data?: IProductInfoElement) {

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
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.product_id = data["product_id"];
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.images = data["images"];
            this.features = data["features"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.seller_reviews_count = data["seller_reviews_count"];
            if (Array.isArray(data["sellers"])) {
                this.sellers = [];
                for (let item of data["sellers"]) {
                    this.sellers.push(ProductSeller.fromJS(item));
                }
            }
            if (Array.isArray(data["variations"])) {
                this.variations = [];
                for (let item of data["variations"]) {
                    this.variations.push(ProductVariation.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ProductInfoElement {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInfoElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["product_id"] = this.product_id;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["images"] = this.images;
        data["features"] = this.features;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["seller_reviews_count"] = this.seller_reviews_count;
        data["sellers"] = null;
        if (Array.isArray(this.sellers)) {
            data["sellers"] = [];
            for (let item of this.sellers) {
                if (item && typeof item.toJSON === "function") {
                    data["sellers"].push(item?.toJSON());
                }
            }
        }
        data["variations"] = null;
        if (Array.isArray(this.variations)) {
            data["variations"] = [];
            for (let item of this.variations) {
                if (item && typeof item.toJSON === "function") {
                    data["variations"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}