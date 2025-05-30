import { KnowledgeGraphLinkElementInfo, IKnowledgeGraphLinkElementInfo } from "./KnowledgeGraphLinkElementInfo";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** description content */
        text?: string | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: KnowledgeGraphLinkElementInfo[] | undefined

    [key: string]: any;

    }

export class KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem {
    
    /** description content */

    text?: string | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: KnowledgeGraphLinkElementInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(KnowledgeGraphLinkElementInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphDescriptionItemDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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