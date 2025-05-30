import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceAssetPairElementSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** identifier of the base asset in a pair
example: EUR */
        base_symbol?: string | undefined
        
        /** identifier of the quote asset in a pair
example: USD */
        quote_symbol?: string | undefined
        
        /** full name of the base asset in a pair
example: Euro */
        base_display_name?: string | undefined
        
        /** full name of the base asset in a pair
example: Euro */
        quote_display_name?: string | undefined
        
        /** value of the base asset compared to the quote asset */
        price?: number | undefined
        
        /** change in price
change in price at a given timestamp */
        price_delta?: number | undefined
        
        /** identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB */
        identifier?: string | undefined
        
        /** name of the market index as displayed on Google Finance
example: CAC 40 */
        displayed_name?: string | undefined
        
        /** URL to the page of the market index on Google Finance */
        url?: string | undefined
        
        /** location of the market index
example: Europe/Paris */
        location?: string | undefined
        
        /** growth trend of the market index
possible values: up, down, stable */
        trend?: string | undefined
        
        /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined
        
        /** percentage of change in value of the market index */
        percentage_delta?: number | undefined

    [key: string]: any;

    }

export class GoogleFinanceAssetPairElementSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceAssetPairElementSerpElementItem {
    
    /** identifier of the base asset in a pair
example: EUR */

    base_symbol?: string | undefined;
    
    /** identifier of the quote asset in a pair
example: USD */

    quote_symbol?: string | undefined;
    
    /** full name of the base asset in a pair
example: Euro */

    base_display_name?: string | undefined;
    
    /** full name of the base asset in a pair
example: Euro */

    quote_display_name?: string | undefined;
    
    /** value of the base asset compared to the quote asset */

    price?: number | undefined;
    
    /** change in price
change in price at a given timestamp */

    price_delta?: number | undefined;
    
    /** identifier of the element
full identifier of the element that consists from ticker and market_identifier
example: PX1:INDEXDB */

    identifier?: string | undefined;
    
    /** name of the market index as displayed on Google Finance
example: CAC 40 */

    displayed_name?: string | undefined;
    
    /** URL to the page of the market index on Google Finance */

    url?: string | undefined;
    
    /** location of the market index
example: Europe/Paris */

    location?: string | undefined;
    
    /** growth trend of the market index
possible values: up, down, stable */

    trend?: string | undefined;
    
    /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;
    
    /** percentage of change in value of the market index */

    percentage_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceAssetPairElementSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.base_symbol = data["base_symbol"];
            this.quote_symbol = data["quote_symbol"];
            this.base_display_name = data["base_display_name"];
            this.quote_display_name = data["quote_display_name"];
            this.price = data["price"];
            this.price_delta = data["price_delta"];
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): GoogleFinanceAssetPairElementSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceAssetPairElementSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["base_symbol"] = this.base_symbol;
        data["quote_symbol"] = this.quote_symbol;
        data["base_display_name"] = this.base_display_name;
        data["quote_display_name"] = this.quote_display_name;
        data["price"] = this.price;
        data["price_delta"] = this.price_delta;
        data["identifier"] = this.identifier;
        data["displayed_name"] = this.displayed_name;
        data["url"] = this.url;
        data["location"] = this.location;
        data["trend"] = this.trend;
        data["timestamp"] = this.timestamp;
        data["percentage_delta"] = this.percentage_delta;
        return data;
    }
}