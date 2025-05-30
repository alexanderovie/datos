import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGooglePostsDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** the identifier of the google_posts feature */
        posts_id?: string | undefined
        
        /** the additional feature of the review */
        feature?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined

    [key: string]: any;

    }

export class GooglePostsDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IGooglePostsDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** the identifier of the google_posts feature */

    posts_id?: string | undefined;
    
    /** the additional feature of the review */

    feature?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;

    [key: string]: any;


    constructor(data?: IGooglePostsDataforseoLabsSerpElementItem) {
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
            this.posts_id = data["posts_id"];
            this.feature = data["feature"];
            this.cid = data["cid"];
        }
    }

    static fromJS(data: any): GooglePostsDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GooglePostsDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["posts_id"] = this.posts_id;
        data["feature"] = this.feature;
        data["cid"] = this.cid;
        return data;
    }
}