import { RecipesElement, IRecipesElement } from "./RecipesElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IRecipesDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** elements of search results found in SERP */
        items?: RecipesElement[] | undefined

    [key: string]: any;

    }

export class RecipesDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IRecipesDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: RecipesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IRecipesDataforseoLabsSerpElementItem) {
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
                    this.items.push(RecipesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): RecipesDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RecipesDataforseoLabsSerpElementItem();
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