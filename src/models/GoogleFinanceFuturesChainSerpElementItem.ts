import { GoogleFinanceFuturesChainMarkets, IGoogleFinanceFuturesChainMarkets } from "./GoogleFinanceFuturesChainMarkets";
import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceFuturesChainSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** financial markets data
array of items containing market indexes and other financial information related to these indexes */
        markets?: GoogleFinanceFuturesChainMarkets[] | undefined

    [key: string]: any;

    }

export class GoogleFinanceFuturesChainSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceFuturesChainSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** financial markets data
array of items containing market indexes and other financial information related to these indexes */

    markets?: GoogleFinanceFuturesChainMarkets[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceFuturesChainSerpElementItem) {
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
            if (Array.isArray(data["markets"])) {
                this.markets = [];
                for (let item of data["markets"]) {
                    this.markets.push(GoogleFinanceFuturesChainMarkets.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFinanceFuturesChainSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceFuturesChainSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["markets"] = null;
        if (Array.isArray(this.markets)) {
            data["markets"] = [];
            for (let item of this.markets) {
                if (item && typeof item.toJSON === "function") {
                    data["markets"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}