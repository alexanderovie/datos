import { LocalServicesElement, ILocalServicesElement } from "./LocalServicesElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface ILocalServicesDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** elements of search results found in SERP */
        items?: LocalServicesElement[] | undefined

    [key: string]: any;

    }

export class LocalServicesDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements ILocalServicesDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: LocalServicesElement[] | undefined;

    [key: string]: any;


    constructor(data?: ILocalServicesDataforseoLabsSerpElementItem) {
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
            this.domain = data["domain"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(LocalServicesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): LocalServicesDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new LocalServicesDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
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