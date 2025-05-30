import { BaseGoogleFinanceTickerSearchSerpElementItem, IBaseGoogleFinanceTickerSearchSerpElementItem } from "./BaseGoogleFinanceTickerSearchSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceMarketInstrumentSerpElementItem  extends IBaseGoogleFinanceTickerSearchSerpElementItem    {
        
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

    [key: string]: any;

    }

export class GoogleFinanceMarketInstrumentSerpElementItem  extends BaseGoogleFinanceTickerSearchSerpElementItem   implements IGoogleFinanceMarketInstrumentSerpElementItem {
    
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

    [key: string]: any;


    constructor(data?: IGoogleFinanceMarketInstrumentSerpElementItem) {
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
        }
    }

    static fromJS(data: any): GoogleFinanceMarketInstrumentSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceMarketInstrumentSerpElementItem();
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
        return data;
    }
}