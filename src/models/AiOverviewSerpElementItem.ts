import { AiOverviewElement, IAiOverviewElement } from "./AiOverviewElement";
import { AiOverviewReference, IAiOverviewReference } from "./AiOverviewReference";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IAiOverviewSerpElementItem  extends IBaseSerpElementItem    {
        
        /** indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache; */
        asynchronous_ai_overview?: boolean | undefined
        
        /** contains arrays of specific images */
        items?: AiOverviewElement[] | undefined
        
        /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */
        references?: AiOverviewReference[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class AiOverviewSerpElementItem  extends BaseSerpElementItem   implements IAiOverviewSerpElementItem {
    
    /** indicates whether the element is loaded asynchronically
if true, the ai_overview element is loaded asynchronically;
if false, the ai_overview element is loaded from cache; */

    asynchronous_ai_overview?: boolean | undefined;
    
    /** contains arrays of specific images */

    items?: AiOverviewElement[] | undefined;
    
    /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */

    references?: AiOverviewReference[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IAiOverviewSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.asynchronous_ai_overview = data["asynchronous_ai_overview"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(AiOverviewElement.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiOverviewReference.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AiOverviewSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AiOverviewSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["asynchronous_ai_overview"] = this.asynchronous_ai_overview;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}