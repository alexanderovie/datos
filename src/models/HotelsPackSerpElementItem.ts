import { HotelsPackElement, IHotelsPackElement } from "./HotelsPackElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IHotelsPackSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the row */
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
        
        /** contains arrays of specific images */
        items?: HotelsPackElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class HotelsPackSerpElementItem  extends BaseSerpElementItem   implements IHotelsPackSerpElementItem {
    
    /** title of the row */

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
    
    /** contains arrays of specific images */

    items?: HotelsPackElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IHotelsPackSerpElementItem) {
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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(HotelsPackElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): HotelsPackSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new HotelsPackSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
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