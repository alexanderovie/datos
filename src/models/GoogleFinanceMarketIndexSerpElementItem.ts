import { BaseGoogleFinanceTickerSearchSerpElementItem, IBaseGoogleFinanceTickerSearchSerpElementItem } from "./BaseGoogleFinanceTickerSearchSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceMarketIndexSerpElementItem  extends IBaseGoogleFinanceTickerSearchSerpElementItem    {
        
        /** ticker of the market index
example: DAX */
        ticker?: string | undefined
        
        /** market identifier
example: INDEXDB */
        market_identifier?: string | undefined
        
        /** value of the market index
numerical value of the index at a given timestamp */
        index_value?: number | undefined
        
        /** change in value of the market index
change in the index_value at a given timestamp */
        index_value_delta?: number | undefined

    [key: string]: any;

    }

export class GoogleFinanceMarketIndexSerpElementItem  extends BaseGoogleFinanceTickerSearchSerpElementItem   implements IGoogleFinanceMarketIndexSerpElementItem {
    
    /** ticker of the market index
example: DAX */

    ticker?: string | undefined;
    
    /** market identifier
example: INDEXDB */

    market_identifier?: string | undefined;
    
    /** value of the market index
numerical value of the index at a given timestamp */

    index_value?: number | undefined;
    
    /** change in value of the market index
change in the index_value at a given timestamp */

    index_value_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceMarketIndexSerpElementItem) {
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
            this.market_identifier = data["market_identifier"];
            this.index_value = data["index_value"];
            this.index_value_delta = data["index_value_delta"];
        }
    }

    static fromJS(data: any): GoogleFinanceMarketIndexSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceMarketIndexSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["ticker"] = this.ticker;
        data["market_identifier"] = this.market_identifier;
        data["index_value"] = this.index_value;
        data["index_value_delta"] = this.index_value_delta;
        return data;
    }
}