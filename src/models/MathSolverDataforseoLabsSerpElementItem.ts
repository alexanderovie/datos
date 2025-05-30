import { MathSolverElement, IMathSolverElement } from "./MathSolverElement";
import { LinkElement, ILinkElement } from "./LinkElement";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IMathSolverDataforseoLabsSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */
        result?: string | undefined
        
        /** elements of search results found in SERP */
        items?: MathSolverElement[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined

    [key: string]: any;

    }

export class MathSolverDataforseoLabsSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IMathSolverDataforseoLabsSerpElementItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */

    result?: string | undefined;
    
    /** elements of search results found in SERP */

    items?: MathSolverElement[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;

    [key: string]: any;


    constructor(data?: IMathSolverDataforseoLabsSerpElementItem) {
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
            this.result = data["result"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(MathSolverElement.fromJS(item));
                }
            }
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): MathSolverDataforseoLabsSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MathSolverDataforseoLabsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["se_type"] = this.se_type;
        data["title"] = this.title;
        data["result"] = this.result;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
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