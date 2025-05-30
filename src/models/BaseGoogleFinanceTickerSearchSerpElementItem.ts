import { ApiException, throwException } from "./ApiException"

export interface IBaseGoogleFinanceTickerSearchSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
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

export class BaseGoogleFinanceTickerSearchSerpElementItem  implements IBaseGoogleFinanceTickerSearchSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
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


    protected discriminator: string;

    constructor(data?: IBaseGoogleFinanceTickerSearchSerpElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

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
            this.identifier = data["identifier"];
            this.displayed_name = data["displayed_name"];
            this.url = data["url"];
            this.location = data["location"];
            this.trend = data["trend"];
            this.timestamp = data["timestamp"];
            this.percentage_delta = data["percentage_delta"];
        }
    }

    static fromJS(data: any): BaseGoogleFinanceTickerSearchSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_finance_asset_pair") {

            const { GoogleFinanceAssetPairSerpElementItem } = require('./GoogleFinanceAssetPairSerpElementItem');
            let result = new GoogleFinanceAssetPairSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_instrument") {

            const { GoogleFinanceMarketInstrumentSerpElementItem } = require('./GoogleFinanceMarketInstrumentSerpElementItem');
            let result = new GoogleFinanceMarketInstrumentSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_index") {

            const { GoogleFinanceMarketIndexSerpElementItem } = require('./GoogleFinanceMarketIndexSerpElementItem');
            let result = new GoogleFinanceMarketIndexSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGoogleFinanceTickerSearchSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
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