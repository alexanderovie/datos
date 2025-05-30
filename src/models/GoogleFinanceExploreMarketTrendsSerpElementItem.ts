import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceExploreMarketTrendsSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the market trends element
example: Europe, Middle East, and Africa */
        title?: string | undefined
        
        /** sub-title of the market trends element */
        sub_title?: string | undefined
        
        /** URL to finance pair on Google Finance */
        url?: string | undefined
        
        /** market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: BaseGoogleFinanceSerpElementItem[] | undefined

    [key: string]: any;

    }

export class GoogleFinanceExploreMarketTrendsSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceExploreMarketTrendsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** title of the market trends element
example: Europe, Middle East, and Africa */

    title?: string | undefined;
    
    /** sub-title of the market trends element */

    sub_title?: string | undefined;
    
    /** URL to finance pair on Google Finance */

    url?: string | undefined;
    
    /** market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: BaseGoogleFinanceSerpElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceExploreMarketTrendsSerpElementItem) {
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
            this.title = data["title"];
            this.sub_title = data["sub_title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseGoogleFinanceSerpElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFinanceExploreMarketTrendsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceExploreMarketTrendsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        data["url"] = this.url;
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