import { KnowledgeGraphShoppingElement, IKnowledgeGraphShoppingElement } from "./KnowledgeGraphShoppingElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphShoppingItemSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the place */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers */
        data_attrid?: string | undefined
        
        /** additional items present in the element
if there are none, equals null */
        items?: KnowledgeGraphShoppingElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class KnowledgeGraphShoppingItemSerpElementItem  extends BaseSerpElementItem   implements IKnowledgeGraphShoppingItemSerpElementItem {
    
    /** title of the place */

    title?: string | undefined;
    
    /** google defined data attribute ID
example:
kc:/shopping/gpc:organic-offers */

    data_attrid?: string | undefined;
    
    /** additional items present in the element
if there are none, equals null */

    items?: KnowledgeGraphShoppingElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphShoppingItemSerpElementItem) {
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
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphShoppingElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): KnowledgeGraphShoppingItemSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphShoppingItemSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["data_attrid"] = this.data_attrid;
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