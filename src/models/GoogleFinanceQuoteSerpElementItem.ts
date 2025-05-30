import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { GraphItems, IGraphItems } from "./GraphItems";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceQuoteSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** quoted market indexes */
        quote?: BaseGoogleFinanceSerpElementItem | undefined
        
        /** values on graph */
        graph_items?: GraphItems[] | undefined

    [key: string]: any;

    }

export class GoogleFinanceQuoteSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceQuoteSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** quoted market indexes */

    quote?: BaseGoogleFinanceSerpElementItem | undefined;
    
    /** values on graph */

    graph_items?: GraphItems[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceQuoteSerpElementItem) {
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
            this.quote = data["quote"] ? BaseGoogleFinanceSerpElementItem.fromJS(data["quote"]) : <any>undefined;
            if (Array.isArray(data["graph_items"])) {
                this.graph_items = [];
                for (let item of data["graph_items"]) {
                    this.graph_items.push(GraphItems.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFinanceQuoteSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceQuoteSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["quote"] = this.quote ? BaseGoogleFinanceSerpElementItem.fromJS(this.quote)?.toJSON() : <any>undefined;
        data["graph_items"] = null;
        if (Array.isArray(this.graph_items)) {
            data["graph_items"] = [];
            for (let item of this.graph_items) {
                if (item && typeof item.toJSON === "function") {
                    data["graph_items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}