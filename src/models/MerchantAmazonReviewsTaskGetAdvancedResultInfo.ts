import { SpellInfo, ISpellInfo } from "./SpellInfo";
import { AiModeImagesElement, IAiModeImagesElement } from "./AiModeImagesElement";
import { RatingElement, IRatingElement } from "./RatingElement";
import { AmazonReviewItem, IAmazonReviewItem } from "./AmazonReviewItem";


export interface IMerchantAmazonReviewsTaskGetAdvancedResultInfo   {
        
        /** asin received in a POST array */
        asin?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** direct URL to search engine results
you can use it to make sure that we provided accurate results */
        check_url?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection */
        spell?: SpellInfo | undefined
        
        /** title of the product on Amazon
the title of the product for which the reviews are collected */
        title?: string | undefined
        
        /** product image data */
        image?: AiModeImagesElement | undefined
        
        /** rating of the product on Amazon
popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement | undefined
        
        /** the total number of reviews */
        reviews_count?: number | undefined
        
        /** type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item */
        item_types?: string[] | undefined
        
        /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */
        items_count?: number | undefined
        
        /** found reviews
you can get more results by using the depth parameter when setting a task */
        items?: AmazonReviewItem[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonReviewsTaskGetAdvancedResultInfo  implements IMerchantAmazonReviewsTaskGetAdvancedResultInfo {
    
    /** asin received in a POST array */

    asin?: string | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** direct URL to search engine results
you can use it to make sure that we provided accurate results */

    check_url?: string | undefined;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** autocorrection of the search engine
if the search engine provided results for a keyword that was corrected, we will specify the keyword corrected by the search engine and the type of autocorrection */

    spell?: SpellInfo | undefined;
    
    /** title of the product on Amazon
the title of the product for which the reviews are collected */

    title?: string | undefined;
    
    /** product image data */

    image?: AiModeImagesElement | undefined;
    
    /** rating of the product on Amazon
popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement | undefined;
    
    /** the total number of reviews */

    reviews_count?: number | undefined;
    
    /** type of search results in Amazon SERP
contains types of search results (items) found in Amazon SERP;
possible item types:
amazon_review_item */

    item_types?: string[] | undefined;
    
    /** the number of reviews items in the results array
you can get more results by using the depth parameter when setting a task */

    items_count?: number | undefined;
    
    /** found reviews
you can get more results by using the depth parameter when setting a task */

    items?: AmazonReviewItem[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonReviewsTaskGetAdvancedResultInfo) {

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
            this.asin = data["asin"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.check_url = data["check_url"];
            this.datetime = data["datetime"];
            this.spell = data["spell"] ? SpellInfo.fromJS(data["spell"]) : <any>undefined;
            this.title = data["title"];
            this.image = data["image"] ? AiModeImagesElement.fromJS(data["image"]) : <any>undefined;
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.reviews_count = data["reviews_count"];
            this.item_types = data["item_types"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AmazonReviewItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonReviewsTaskGetAdvancedResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonReviewsTaskGetAdvancedResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["asin"] = this.asin;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["check_url"] = this.check_url;
        data["datetime"] = this.datetime;
        data["spell"] = this.spell ? SpellInfo.fromJS(this.spell)?.toJSON() : <any>undefined;
        data["title"] = this.title;
        data["image"] = this.image ? AiModeImagesElement.fromJS(this.image)?.toJSON() : <any>undefined;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["reviews_count"] = this.reviews_count;
        data["item_types"] = this.item_types;
        data["items_count"] = this.items_count;
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