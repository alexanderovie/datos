import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IPeopleAlsoSearchDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** elements of search results found in SERP */
        items?: string[] | undefined

    [key: string]: any;

    }

export class PeopleAlsoSearchDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IPeopleAlsoSearchDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IPeopleAlsoSearchDataforseoLabsSerpElementItem) {
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
            this.items = data["items"];
        }
    }

    static fromJS(data: any): PeopleAlsoSearchDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PeopleAlsoSearchDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["items"] = this.items;
        return data;
    }
}