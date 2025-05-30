import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { Rectangle, IRectangle } from "./Rectangle";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** subtitle of the item */
        subtitle?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** card id */
        card_id?: string | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string | undefined
        
        /** URL of the logo from knowledge graph */
        logo_url?: string | undefined
        
        /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */
        cid?: string | undefined
        
        /** contains results featured in the ‘hotels_pack’ element of SERP */
        items?: BaseSerpElementItem[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class KnowledgeGraphSerpElementItem  extends BaseSerpElementItem   implements IKnowledgeGraphSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** subtitle of the item */

    subtitle?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** card id */

    card_id?: string | undefined;
    
    /** relevant URL in SERP */

    url?: string | undefined;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string | undefined;
    
    /** URL of the logo from knowledge graph */

    logo_url?: string | undefined;
    
    /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */

    cid?: string | undefined;
    
    /** contains results featured in the ‘hotels_pack’ element of SERP */

    items?: BaseSerpElementItem[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.subtitle = data["subtitle"];
            this.description = data["description"];
            this.card_id = data["card_id"];
            this.url = data["url"];
            this.image_url = data["image_url"];
            this.logo_url = data["logo_url"];
            this.cid = data["cid"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(BaseSerpElementItem.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KnowledgeGraphSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["subtitle"] = this.subtitle;
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
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}