import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceMarketInstrumentElementSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** ticker of the market index
example: DAX */
        ticker?: string | undefined
        
        /** value of the base asset compared to the quote asset */
        price?: number | undefined
        
        /** change in price
change in price at a given timestamp */
        price_delta?: number | undefined
        
        /** price currency
example: USD */
        price_currency?: string | undefined
        
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

export class GoogleFinanceMarketInstrumentElementSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceMarketInstrumentElementSerpElementItem {
    
    /** ticker of the market index
example: DAX */

    ticker?: string | undefined;
    
    /** value of the base asset compared to the quote asset */

    price?: number | undefined;
    
    /** change in price
change in price at a given timestamp */

    price_delta?: number | undefined;
    
    /** price currency
example: USD */

    price_currency?: string | undefined;
    
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


    constructor(data?: IGoogleFinanceMarketInstrumentElementSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.ticker = data["ticker"];
            this.price = data["price"];
            this.price_delta = data["price_delta"];
            this.price_currency = data["price_currency"];
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): GoogleFinanceMarketInstrumentElementSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceMarketInstrumentElementSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["ticker"] = this.ticker;
        data["price"] = this.price;
        data["price_delta"] = this.price_delta;
        data["price_currency"] = this.price_currency;
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