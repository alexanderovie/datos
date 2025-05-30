import { KnowledgeGraphExpandedElement, IKnowledgeGraphExpandedElement } from "./KnowledgeGraphExpandedElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphExpandedItemSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the link */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
kc:/local:place qa */
        data_attrid?: string | undefined
        
        /** link of the element */
        expanded_element?: KnowledgeGraphExpandedElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class KnowledgeGraphExpandedItemSerpElementItem  extends BaseSerpElementItem   implements IKnowledgeGraphExpandedItemSerpElementItem {
    
    /** title of the link */

    title?: string | undefined;
    
    /** google defined data attribute ID
example:
kc:/local:place qa */

    data_attrid?: string | undefined;
    
    /** link of the element */

    expanded_element?: KnowledgeGraphExpandedElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphExpandedItemSerpElementItem) {
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
            if (Array.isArray(data["expanded_element"])) {
                this.expanded_element = [];
                for (let item of data["expanded_element"]) {
                    this.expanded_element.push(KnowledgeGraphExpandedElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KnowledgeGraphExpandedItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphExpandedItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
        data["expanded_element"] = null;
        if (Array.isArray(this.expanded_element)) {
            data["expanded_element"] = [];
            for (let item of this.expanded_element) {
                if (item && typeof item.toJSON === "function") {
                    data["expanded_element"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}