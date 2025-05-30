import { LinkElement, ILinkElement } from "./LinkElement";
import { KnowledgeGraphImagesElement, IKnowledgeGraphImagesElement } from "./KnowledgeGraphImagesElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** link of the element */
        link?: LinkElement | undefined
        
        /** additional items present in the element
if there are none, equals null */
        items?: KnowledgeGraphImagesElement[] | undefined

    [key: string]: any;

    }

export class KnowledgeGraphImagesItemDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem {
    
    /** link of the element */

    link?: LinkElement | undefined;
    
    /** additional items present in the element
if there are none, equals null */

    items?: KnowledgeGraphImagesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphImagesItemDataforseoLabsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.link = data["link"] ? LinkElement.fromJS(data["link"]) : <any>undefined;
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(KnowledgeGraphImagesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphImagesItemDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphImagesItemDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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
        return data;
    }
}