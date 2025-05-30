import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceMarketIndexElementSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
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

export class GoogleFinanceMarketIndexElementSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceMarketIndexElementSerpElementItem {
    
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


    constructor(data?: IGoogleFinanceMarketIndexElementSerpElementItem) {
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
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): GoogleFinanceMarketIndexElementSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceMarketIndexElementSerpElementItem();
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