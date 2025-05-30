import { News, INews } from "./News";
import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceMarketTrendsSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: News | undefined

    [key: string]: any;

    }

export class GoogleFinanceMarketTrendsSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceMarketTrendsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: News | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceMarketTrendsSerpElementItem) {
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
            this.items = data["items"] ? News.fromJS(data["items"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleFinanceMarketTrendsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceMarketTrendsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["items"] = this.items ? News.fromJS(this.items)?.toJSON() : <any>undefined;
        return data;
    }
}