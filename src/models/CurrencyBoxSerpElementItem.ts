import { Table, ITable } from "./Table";
import { Graph, IGraph } from "./Graph";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ICurrencyBoxSerpElementItem  extends IBaseSerpElementItem    {
        
        /** the value of the rating */
        value?: number | undefined
        
        /** value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer */
        converted_value?: number | undefined
        
        /** currency of the listed price
ISO code of the currency applied to the price */
        currency?: string | undefined
        
        /** converted currency */
        converted_currency?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** results table
if there are none, equals null */
        table?: Table | undefined
        
        /** contains data provided in the graph of the element */
        graph?: Graph | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class CurrencyBoxSerpElementItem  extends BaseSerpElementItem   implements ICurrencyBoxSerpElementItem {
    
    /** the value of the rating */

    value?: number | undefined;
    
    /** value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer */

    converted_value?: number | undefined;
    
    /** currency of the listed price
ISO code of the currency applied to the price */

    currency?: string | undefined;
    
    /** converted currency */

    converted_currency?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** results table
if there are none, equals null */

    table?: Table | undefined;
    
    /** contains data provided in the graph of the element */

    graph?: Graph | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: ICurrencyBoxSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.value = data["value"];
            this.converted_value = data["converted_value"];
            this.currency = data["currency"];
            this.converted_currency = data["converted_currency"];
            this.timestamp = data["timestamp"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.graph = data["graph"] ? Graph.fromJS(data["graph"]) : <any>undefined;
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): CurrencyBoxSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CurrencyBoxSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["value"] = this.value;
        data["converted_value"] = this.converted_value;
        data["currency"] = this.currency;
        data["converted_currency"] = this.converted_currency;
        data["timestamp"] = this.timestamp;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["graph"] = this.graph ? Graph.fromJS(this.graph)?.toJSON() : <any>undefined;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}