import { CommercialUnitsElement, ICommercialUnitsElement } from "./CommercialUnitsElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ICommercialUnitsDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** elements of search results found in SERP */
        items?: CommercialUnitsElement[] | undefined

    [key: string]: any;

    }

export class CommercialUnitsDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements ICommercialUnitsDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: CommercialUnitsElement[] | undefined;

    [key: string]: any;


    constructor(data?: ICommercialUnitsDataforseoLabsSerpElementItem) {
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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(CommercialUnitsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): CommercialUnitsDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new CommercialUnitsDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
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