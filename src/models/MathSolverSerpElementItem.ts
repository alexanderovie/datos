import { MathSolverElement, IMathSolverElement } from "./MathSolverElement";
import { LinkElement, ILinkElement } from "./LinkElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IMathSolverSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the row */
        title?: string | undefined
        
        /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */
        result?: string | undefined
        
        /** contains arrays of specific images */
        items?: MathSolverElement[] | undefined
        
        /** link of the element */
        links?: LinkElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class MathSolverSerpElementItem  extends BaseSerpElementItem   implements IMathSolverSerpElementItem {
    
    /** title of the row */

    title?: string | undefined;
    
    /** solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task */

    result?: string | undefined;
    
    /** contains arrays of specific images */

    items?: MathSolverElement[] | undefined;
    
    /** link of the element */

    links?: LinkElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IMathSolverSerpElementItem) {
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
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): MathSolverSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new MathSolverSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}