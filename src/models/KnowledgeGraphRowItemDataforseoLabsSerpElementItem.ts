import { LinkElement, ILinkElement } from "./LinkElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphRowItemDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** title of the item */
        title?: string | undefined
        
        /** google defined data attribute ID
example:
action:listen_artist */
        data_attrid?: string | undefined
        
        /** row content */
        text?: string | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class KnowledgeGraphRowItemDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IKnowledgeGraphRowItemDataforseoLabsSerpElementItem {
    
    /** title of the item */

    title?: string | undefined;
    
    /** google defined data attribute ID
example:
action:listen_artist */

    data_attrid?: string | undefined;
    
    /** row content */

    text?: string | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphRowItemDataforseoLabsSerpElementItem) {
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
        }
    }

    static fromJS(data: any): KnowledgeGraphRowItemDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphRowItemDataforseoLabsSerpElementItem();
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
        return data;
    }
}