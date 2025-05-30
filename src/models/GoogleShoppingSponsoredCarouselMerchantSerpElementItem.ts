import { GoogleShoppingSponsoredCarouselElement, IGoogleShoppingSponsoredCarouselElement } from "./GoogleShoppingSponsoredCarouselElement";
import { BaseMerchantSerpElementItem, IBaseMerchantSerpElementItem } from "./BaseMerchantSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleShoppingSponsoredCarouselMerchantSerpElementItem  extends IBaseMerchantSerpElementItem    {
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** product title */
        title?: string | undefined
        
        /** items in SERP */
        items?: GoogleShoppingSponsoredCarouselElement[] | undefined

    [key: string]: any;

    }

export class GoogleShoppingSponsoredCarouselMerchantSerpElementItem  extends BaseMerchantSerpElementItem   implements IGoogleShoppingSponsoredCarouselMerchantSerpElementItem {
    
    /** XPath of the element */

    xpath?: string | undefined;
    
    /** product title */

    title?: string | undefined;
    
    /** items in SERP */

    items?: GoogleShoppingSponsoredCarouselElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleShoppingSponsoredCarouselMerchantSerpElementItem) {
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
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(GoogleShoppingSponsoredCarouselElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleShoppingSponsoredCarouselMerchantSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleShoppingSponsoredCarouselMerchantSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["xpath"] = this.xpath;
        data["title"] = this.title;
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