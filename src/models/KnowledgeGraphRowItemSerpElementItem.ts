import { LinkElement, ILinkElement } from "./LinkElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphRowItemSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
kc:/common/topic:social media presence */
        data_attrid?: string | undefined
        
        /** reference text
text snippet from the page that was used to generate the ai_overview_element */
        text?: string | undefined
        
        /** links featured in the faq_box_element */
        links?: LinkElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class KnowledgeGraphRowItemSerpElementItem  extends BaseSerpElementItem   implements IKnowledgeGraphRowItemSerpElementItem {
    
    /** title of the item */

    title?: string | undefined;
    
    /** google defined data attribute ID
example:
kc:/common/topic:social media presence */

    data_attrid?: string | undefined;
    
    /** reference text
text snippet from the page that was used to generate the ai_overview_element */

    text?: string | undefined;
    
    /** links featured in the faq_box_element */

    links?: LinkElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphRowItemSerpElementItem) {
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
            this.data_attrid = data["data_attrid"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KnowledgeGraphRowItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphRowItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}