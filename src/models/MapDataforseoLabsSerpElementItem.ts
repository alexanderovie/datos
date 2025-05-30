import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IMapDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined

    [key: string]: any;

    }

export class MapDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IMapDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IMapDataforseoLabsSerpElementItem) {
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
        }
    }

    static fromJS(data: any): MapDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MapDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}