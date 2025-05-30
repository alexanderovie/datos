import { News, INews } from "./News";
import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceNewsSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** title of the news element
example: In the news */
        title?: string | undefined
        
        /** sub-title of the news element
example: Based on Europe, Middle East, and Africa */
        sub_title?: string | undefined
        
        /** market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */
        items?: News[] | undefined

    [key: string]: any;

    }

export class GoogleFinanceNewsSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceNewsSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** title of the news element
example: In the news */

    title?: string | undefined;
    
    /** sub-title of the news element
example: Based on Europe, Middle East, and Africa */

    sub_title?: string | undefined;
    
    /** market indexes data
array of items containing market indexes data;
possible type of items: google_finance_asset_pair_element, google_finance_market_instrument_element, google_finance_market_index_element */

    items?: News[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceNewsSerpElementItem) {
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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(News.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFinanceNewsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceNewsSerpElementItem();
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