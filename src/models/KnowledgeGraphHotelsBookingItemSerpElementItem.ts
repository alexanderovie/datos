import { KnowledgeGraphHotelsBookingElement, IKnowledgeGraphHotelsBookingElement } from "./KnowledgeGraphHotelsBookingElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphHotelsBookingItemSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of a given link element */
        title?: string | undefined
        
        /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */
        date_from?: string | undefined
        
        /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */
        date_to?: string | undefined
        
        /** google defined data attribute ID
example:
kc:/local:hotel booking */
        data_attrid?: string | undefined
        
        /** additional items present in the element
if there are none, equals null */
        items?: KnowledgeGraphHotelsBookingElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class KnowledgeGraphHotelsBookingItemSerpElementItem  extends BaseSerpElementItem   implements IKnowledgeGraphHotelsBookingItemSerpElementItem {
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** starting date of stay
in the format “year-month-date”
example:
2019-11-15 */

    date_from?: string | undefined;
    
    /** ending date of stay
in the format “year-month-date”
example:
2019-11-17 */

    date_to?: string | undefined;
    
    /** google defined data attribute ID
example:
kc:/local:hotel booking */

    data_attrid?: string | undefined;
    
    /** additional items present in the element
if there are none, equals null */

    items?: KnowledgeGraphHotelsBookingElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphHotelsBookingItemSerpElementItem) {
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
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.data_attrid = data["data_attrid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphHotelsBookingElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KnowledgeGraphHotelsBookingItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphHotelsBookingItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["data_attrid"] = this.data_attrid;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}