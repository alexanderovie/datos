import { LinkElement, ILinkElement } from "./LinkElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAnswerBoxDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** text
if there is none, equals null */
        text?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class AnswerBoxDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IAnswerBoxDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** text
if there is none, equals null */

    text?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IAnswerBoxDataforseoLabsSerpElementItem) {
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
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AnswerBoxDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AnswerBoxDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
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