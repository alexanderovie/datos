import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IRelatedSearchesDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** elements of search results found in SERP */
        items?: string[] | undefined

    [key: string]: any;

    }

export class RelatedSearchesDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IRelatedSearchesDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IRelatedSearchesDataforseoLabsSerpElementItem) {
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
            this.items = data["items"];
        }
    }

    static fromJS(data: any): RelatedSearchesDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RelatedSearchesDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["items"] = this.items;
        return data;
    }
}