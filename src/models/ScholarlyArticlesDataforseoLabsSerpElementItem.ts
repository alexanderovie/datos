import { ScholarlyArticlesElement, IScholarlyArticlesElement } from "./ScholarlyArticlesElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IScholarlyArticlesDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** elements of search results found in SERP */
        items?: ScholarlyArticlesElement[] | undefined

    [key: string]: any;

    }

export class ScholarlyArticlesDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IScholarlyArticlesDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: ScholarlyArticlesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IScholarlyArticlesDataforseoLabsSerpElementItem) {
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
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ScholarlyArticlesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ScholarlyArticlesDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ScholarlyArticlesDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["url"] = this.url;
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