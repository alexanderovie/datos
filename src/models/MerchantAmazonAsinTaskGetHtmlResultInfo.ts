import { SerpHtmlItemInfo, ISerpHtmlItemInfo } from "./SerpHtmlItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface IMerchantAmazonAsinTaskGetHtmlResultInfo   {
        
        /** ASIN received in a POST array */
        product_id?: string | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** search engine domain in a POST array */
        se_domain?: string | undefined
        
        /** location code in a POST array */
        location_code?: number | undefined
        
        /** language code in a POST array */
        language_code?: string | undefined
        
        /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        datetime?: string | undefined
        
        /** the number of results returned in the items array */
        items_count?: number | undefined
        
        /** HTML pages and related data */
        items?: SerpHtmlItemInfo[] | undefined

    [key: string]: any;

    }

export class MerchantAmazonAsinTaskGetHtmlResultInfo  implements IMerchantAmazonAsinTaskGetHtmlResultInfo {
    
    /** ASIN received in a POST array */

    product_id?: string | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** search engine domain in a POST array */

    se_domain?: string | undefined;
    
    /** location code in a POST array */

    location_code?: number | undefined;
    
    /** language code in a POST array */

    language_code?: string | undefined;
    
    /** date and time when the result was received
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    datetime?: string | undefined;
    
    /** the number of results returned in the items array */

    items_count?: number | undefined;
    
    /** HTML pages and related data */

    items?: SerpHtmlItemInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IMerchantAmazonAsinTaskGetHtmlResultInfo) {

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
            this.product_id = data["product_id"];
            this.type = data["type"];
            this.se_domain = data["se_domain"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.datetime = data["datetime"];
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(SerpHtmlItemInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MerchantAmazonAsinTaskGetHtmlResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantAmazonAsinTaskGetHtmlResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["product_id"] = this.product_id;
        data["type"] = this.type;
        data["se_domain"] = this.se_domain;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["datetime"] = this.datetime;
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