import { FoundOnWebElement, IFoundOnWebElement } from "./FoundOnWebElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IFoundOnWebSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the row */
        title?: string | undefined
        
        /** search queries related to the elment */
        related_searches?: string[] | undefined
        
        /** contains arrays of specific images */
        items?: FoundOnWebElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class FoundOnWebSerpElementItem  extends BaseSerpElementItem   implements IFoundOnWebSerpElementItem {
    
    /** title of the row */

    title?: string | undefined;
    
    /** search queries related to the elment */

    related_searches?: string[] | undefined;
    
    /** contains arrays of specific images */

    items?: FoundOnWebElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IFoundOnWebSerpElementItem) {
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
            this.related_searches = data["related_searches"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(FoundOnWebElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): FoundOnWebSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new FoundOnWebSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["related_searches"] = this.related_searches;
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