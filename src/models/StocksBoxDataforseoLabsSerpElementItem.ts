import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { Table, ITable } from "./Table";
import { Graph, IGraph } from "./Graph";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IStocksBoxDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** source of the element
indicates the source of information included in the top_stories_element */
        source?: string | undefined
        
        /** text alongside the link title */
        snippet?: string | undefined
        
        /** price indicated in the element */
        price?: PriceInfo | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** table element */
        table?: Table | undefined
        
        /** contains data provided in the graph of the element */
        graph?: Graph | undefined

    [key: string]: any;

    }

export class StocksBoxDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IStocksBoxDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** source of the element
indicates the source of information included in the top_stories_element */

    source?: string | undefined;
    
    /** text alongside the link title */

    snippet?: string | undefined;
    
    /** price indicated in the element */

    price?: PriceInfo | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** table element */

    table?: Table | undefined;
    
    /** contains data provided in the graph of the element */

    graph?: Graph | undefined;

    [key: string]: any;


    constructor(data?: IStocksBoxDataforseoLabsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.se_type = data["se_type"];
            this.title = data["title"];
            this.source = data["source"];
            this.snippet = data["snippet"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.url = data["url"];
            this.domain = data["domain"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.graph = data["graph"] ? Graph.fromJS(data["graph"]) : <any>undefined;
        }
    }

    static fromJS(data: any): StocksBoxDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new StocksBoxDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["source"] = this.source;
        data["snippet"] = this.snippet;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["graph"] = this.graph ? Graph.fromJS(this.graph)?.toJSON() : <any>undefined;
        return data;
    }
}