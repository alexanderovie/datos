import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { Rectangle, IRectangle } from "./Rectangle";
import { Table, ITable } from "./Table";
import { Graph, IGraph } from "./Graph";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IStocksBoxSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the row */
        title?: string | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** text alongside the link title */
        snippet?: string | undefined
        
        /** price indicated in the element */
        price?: PriceInfo | undefined
        
        /** URL */
        url?: string | undefined
        
        /** domain in the URL */
        domain?: string | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined
        
        /** results table
if there are none, equals null */
        table?: Table | undefined
        
        /** contains data provided in the graph of the element */
        graph?: Graph | undefined

    [key: string]: any;

    }

export class StocksBoxSerpElementItem  extends BaseSerpElementItem   implements IStocksBoxSerpElementItem {
    
    /** title of the row */

    title?: string | undefined;
    
    /** reference source name or title */

    source?: string | undefined;
    
    /** text alongside the link title */

    snippet?: string | undefined;
    
    /** price indicated in the element */

    price?: PriceInfo | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** domain in the URL */

    domain?: string | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;
    
    /** results table
if there are none, equals null */

    table?: Table | undefined;
    
    /** contains data provided in the graph of the element */

    graph?: Graph | undefined;

    [key: string]: any;


    constructor(data?: IStocksBoxSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.source = data["source"];
            this.snippet = data["snippet"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.url = data["url"];
            this.domain = data["domain"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.graph = data["graph"] ? Graph.fromJS(data["graph"]) : <any>undefined;
        }
    }

    static fromJS(data: any): StocksBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new StocksBoxSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["source"] = this.source;
        data["snippet"] = this.snippet;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["graph"] = this.graph ? Graph.fromJS(this.graph)?.toJSON() : <any>undefined;
        return data;
    }
}