import { BaseMerchantSerpElementItem, IBaseMerchantSerpElementItem } from "./BaseMerchantSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleShoppingPaidMerchantSerpElementItem  extends IBaseMerchantSerpElementItem    {
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** product title */
        title?: string | undefined
        
        /** description of the product in Google Shopping SERP */
        description?: string | undefined
        
        /** URL to the product page on the seller’s website */
        url?: string | undefined
        
        /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */
        shop_ad_aclk?: string | undefined

    [key: string]: any;

    }

export class GoogleShoppingPaidMerchantSerpElementItem  extends BaseMerchantSerpElementItem   implements IGoogleShoppingPaidMerchantSerpElementItem {
    
    /** XPath of the element */

    xpath?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** product title */

    title?: string | undefined;
    
    /** description of the product in Google Shopping SERP */

    description?: string | undefined;
    
    /** URL to the product page on the seller’s website */

    url?: string | undefined;
    
    /** unique ad click referral parameter
using this parameter you can get a URL of the advertisement in Google Shopping Sellers Ad URL */

    shop_ad_aclk?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleShoppingPaidMerchantSerpElementItem) {
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
            this.description = data["description"];
            this.url = data["url"];
            this.shop_ad_aclk = data["shop_ad_aclk"];
        }
    }

    static fromJS(data: any): GoogleShoppingPaidMerchantSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleShoppingPaidMerchantSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["shop_ad_aclk"] = this.shop_ad_aclk;
        return data;
    }
}