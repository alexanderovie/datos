import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceDetailsSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** google finance badges relevant to the element
example: Futures Contract */
        badges?: string[] | undefined
        
        /** value of the previous close */
        previous_close?: number | undefined
        
        /** value of the start day range */
        start_day_range?: number | undefined
        
        /** value of the end day range */
        end_day_range?: number | undefined
        
        /** value of the start year range */
        start_year_range?: number | undefined
        
        /** value of the end year range */
        end_year_range?: number | undefined
        
        /** market cap value */
        market_cap?: number | undefined
        
        /** total volume value */
        volume?: number | undefined
        
        /** average volume value */
        avg_volume?: number | undefined
        
        /** price-earnings ratio */
        pe_ratio?: number | undefined
        
        /** dividend yield value */
        dividend_yield?: number | undefined
        
        /** primary exchange value */
        primary_exchange?: string | undefined
        
        /** year-to-date return value */
        ytd_return?: number | undefined
        
        /** expense ratio value */
        expense_ratio?: number | undefined
        
        /** category name */
        category?: string | undefined
        
        net_assets?: number | undefined
        
        /** yield value */
        yield?: number | undefined
        
        /** front load value */
        front_load?: number | undefined
        
        /** name of the relevant market segment */
        market_segment?: string | undefined
        
        /** open interest value */
        open_interest?: number | undefined
        
        /** settlement price value */
        settlement_price?: number | undefined
        
        /** climate change score by carbon disclosure project methodology */
        cdp_climate_change_score?: string | undefined
        
        /** currency of the metrics */
        metrics_currency?: string | undefined

    [key: string]: any;

    }

export class GoogleFinanceDetailsSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceDetailsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** google finance badges relevant to the element
example: Futures Contract */

    badges?: string[] | undefined;
    
    /** value of the previous close */

    previous_close?: number | undefined;
    
    /** value of the start day range */

    start_day_range?: number | undefined;
    
    /** value of the end day range */

    end_day_range?: number | undefined;
    
    /** value of the start year range */

    start_year_range?: number | undefined;
    
    /** value of the end year range */

    end_year_range?: number | undefined;
    
    /** market cap value */

    market_cap?: number | undefined;
    
    /** total volume value */

    volume?: number | undefined;
    
    /** average volume value */

    avg_volume?: number | undefined;
    
    /** price-earnings ratio */

    pe_ratio?: number | undefined;
    
    /** dividend yield value */

    dividend_yield?: number | undefined;
    
    /** primary exchange value */

    primary_exchange?: string | undefined;
    
    /** year-to-date return value */

    ytd_return?: number | undefined;
    
    /** expense ratio value */

    expense_ratio?: number | undefined;
    
    /** category name */

    category?: string | undefined;

    net_assets?: number | undefined;
    
    /** yield value */

    yield?: number | undefined;
    
    /** front load value */

    front_load?: number | undefined;
    
    /** name of the relevant market segment */

    market_segment?: string | undefined;
    
    /** open interest value */

    open_interest?: number | undefined;
    
    /** settlement price value */

    settlement_price?: number | undefined;
    
    /** climate change score by carbon disclosure project methodology */

    cdp_climate_change_score?: string | undefined;
    
    /** currency of the metrics */

    metrics_currency?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceDetailsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.badges = data["badges"];
            this.previous_close = data["previous_close"];
            this.start_day_range = data["start_day_range"];
            this.end_day_range = data["end_day_range"];
            this.start_year_range = data["start_year_range"];
            this.end_year_range = data["end_year_range"];
            this.market_cap = data["market_cap"];
            this.volume = data["volume"];
            this.avg_volume = data["avg_volume"];
            this.pe_ratio = data["pe_ratio"];
            this.dividend_yield = data["dividend_yield"];
            this.primary_exchange = data["primary_exchange"];
            this.ytd_return = data["ytd_return"];
            this.expense_ratio = data["expense_ratio"];
            this.category = data["category"];
            this.net_assets = data["net_assets"];
            this.yield = data["yield"];
            this.front_load = data["front_load"];
            this.market_segment = data["market_segment"];
            this.open_interest = data["open_interest"];
            this.settlement_price = data["settlement_price"];
            this.cdp_climate_change_score = data["cdp_climate_change_score"];
            this.metrics_currency = data["metrics_currency"];
        }
    }

    static fromJS(data: any): GoogleFinanceDetailsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceDetailsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["badges"] = this.badges;
        data["previous_close"] = this.previous_close;
        data["start_day_range"] = this.start_day_range;
        data["end_day_range"] = this.end_day_range;
        data["start_year_range"] = this.start_year_range;
        data["end_year_range"] = this.end_year_range;
        data["market_cap"] = this.market_cap;
        data["volume"] = this.volume;
        data["avg_volume"] = this.avg_volume;
        data["pe_ratio"] = this.pe_ratio;
        data["dividend_yield"] = this.dividend_yield;
        data["primary_exchange"] = this.primary_exchange;
        data["ytd_return"] = this.ytd_return;
        data["expense_ratio"] = this.expense_ratio;
        data["category"] = this.category;
        data["net_assets"] = this.net_assets;
        data["yield"] = this.yield;
        data["front_load"] = this.front_load;
        data["market_segment"] = this.market_segment;
        data["open_interest"] = this.open_interest;
        data["settlement_price"] = this.settlement_price;
        data["cdp_climate_change_score"] = this.cdp_climate_change_score;
        data["metrics_currency"] = this.metrics_currency;
        return data;
    }
}