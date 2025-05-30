import { HotelsPackElement, IHotelsPackElement } from "./HotelsPackElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IHotelsPackDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
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
        
        /** elements of search results found in SERP */
        items?: HotelsPackElement[] | undefined

    [key: string]: any;

    }

export class HotelsPackDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IHotelsPackDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

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
    
    /** elements of search results found in SERP */

    items?: HotelsPackElement[] | undefined;

    [key: string]: any;


    constructor(data?: IHotelsPackDataforseoLabsSerpElementItem) {
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
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(HotelsPackElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): HotelsPackDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new HotelsPackDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
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
        return data;
    }
}