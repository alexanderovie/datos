import { ProductConsiderationsExpandedElement, IProductConsiderationsExpandedElement } from "./ProductConsiderationsExpandedElement";
import { ApiException, throwException } from "./ApiException"

export interface IProductConsiderationsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** category of the consideration element
the category is indicated just above the title fo the consideration element */
        consideration_category?: string | undefined
        
        /** expanded element */
        expanded_element?: ProductConsiderationsExpandedElement | undefined

    [key: string]: any;

    }

export class ProductConsiderationsElement  implements IProductConsiderationsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** category of the consideration element
the category is indicated just above the title fo the consideration element */

    consideration_category?: string | undefined;
    
    /** expanded element */

    expanded_element?: ProductConsiderationsExpandedElement | undefined;

    [key: string]: any;


    constructor(data?: IProductConsiderationsElement) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.title = data["title"];
            this.consideration_category = data["consideration_category"];
            this.expanded_element = data["expanded_element"] ? ProductConsiderationsExpandedElement.fromJS(data["expanded_element"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductConsiderationsElement {
        data = typeof data === 'object' ? data : {};


        let result = new ProductConsiderationsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["consideration_category"] = this.consideration_category;
        data["expanded_element"] = this.expanded_element ? ProductConsiderationsExpandedElement.fromJS(this.expanded_element)?.toJSON() : <any>undefined;
        return data;
    }
}