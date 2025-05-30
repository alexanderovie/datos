import { PopularProductsElement, IPopularProductsElement } from "./PopularProductsElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IPopularProductsDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** elements of search results found in SERP */
        items?: PopularProductsElement[] | undefined

    [key: string]: any;

    }

export class PopularProductsDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IPopularProductsDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: PopularProductsElement[] | undefined;

    [key: string]: any;


    constructor(data?: IPopularProductsDataforseoLabsSerpElementItem) {
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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(PopularProductsElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): PopularProductsDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PopularProductsDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
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