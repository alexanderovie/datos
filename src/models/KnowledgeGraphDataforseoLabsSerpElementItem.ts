import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** subtitle of the item */
        sub_title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** card id */
        card_id?: string | undefined
        
        /** sitelink URL */
        url?: string | undefined
        
        /** URL of the image */
        image_url?: string | undefined
        
        /** URL of the logo from knowledge graph */
        logo_url?: string | undefined
        
        /** google-defined client id */
        cid?: string | undefined
        
        /** elements of search results found in SERP */
        items?: BaseDataforseoLabsSerpElementItem[] | undefined

    [key: string]: any;

    }

export class KnowledgeGraphDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IKnowledgeGraphDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** subtitle of the item */

    sub_title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** card id */

    card_id?: string | undefined;
    
    /** sitelink URL */

    url?: string | undefined;
    
    /** URL of the image */

    image_url?: string | undefined;
    
    /** URL of the logo from knowledge graph */

    logo_url?: string | undefined;
    
    /** google-defined client id */

    cid?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: BaseDataforseoLabsSerpElementItem[] | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphDataforseoLabsSerpElementItem) {
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
            this.sub_title = data["sub_title"];
            this.description = data["description"];
            this.card_id = data["card_id"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.logo_url = data["logo_url"];
            this.cid = data["cid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseDataforseoLabsSerpElementItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["sub_title"] = this.sub_title;
        data["description"] = this.description;
        data["card_id"] = this.card_id;
        data["url"] = this.url;
        data["image_url"] = this.image_url;
        data["logo_url"] = this.logo_url;
        data["cid"] = this.cid;
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