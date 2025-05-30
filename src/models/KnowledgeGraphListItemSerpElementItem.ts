import { LinkElement, ILinkElement } from "./LinkElement";
import { KnowledgeGraphListElement, IKnowledgeGraphListElement } from "./KnowledgeGraphListElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphListItemSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the link element */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
ss:/webfacts:net_worth */
        data_attrid?: string | undefined
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** additional items present in the element
if there are none, equals null */
        items?: KnowledgeGraphListElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class KnowledgeGraphListItemSerpElementItem  extends BaseSerpElementItem   implements IKnowledgeGraphListItemSerpElementItem {
    
    /** title of the link element */

    title?: string | undefined;
    
    /** google defined data attribute ID
example:
ss:/webfacts:net_worth */

    data_attrid?: string | undefined;
    
    /** link of the element */

    link?: LinkElement | undefined;
    
    /** additional items present in the element
if there are none, equals null */

    items?: KnowledgeGraphListElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphListItemSerpElementItem) {
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
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphListElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KnowledgeGraphListItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphListItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["link"] = this.link ? LinkElement.fromJS(this.link)?.toJSON() : <any>undefined;
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