import { LicensesElement, ILicensesElement } from "./LicensesElement";

export interface IRefinementChipsElement   {
        
        /** type of element */
        type?: string
        
        /** title of the element */
        title?: string
        
        /** search URL with refinement parameters */
        url?: string
        
        /** domain in SERP */
        domain?: string
        
        /** further search refinement options */
        options?: LicensesElement[]

    [key: string]: any;

    }

export class RefinementChipsElement  implements IRefinementChipsElement {
    
    /** type of element */

    type?: string;
    
    /** title of the element */

    title?: string;
    
    /** search URL with refinement parameters */

    url?: string;
    
    /** domain in SERP */

    domain?: string;
    
    /** further search refinement options */

    options?: LicensesElement[];

    [key: string]: any;


    constructor(data?: IRefinementChipsElement) {

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
            this.url = data["url"];
            this.domain = data["domain"];
            if (Array.isArray(data["options"])) {
                this.options = [];
                for (let item of data["options"]) {
                    this.options.push(LicensesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): RefinementChipsElement {
        data = typeof data === 'object' ? data : {};


        let result = new RefinementChipsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["options"] = null;
        if (Array.isArray(this.options)) {
            data["options"] = [];
            for (let item of this.options) {
                if (item && typeof item.toJSON === "function") {
                    data["options"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}