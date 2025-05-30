import { ImagesElement, IImagesElement } from "./ImagesElement";
import { AiOverviewReference, IAiOverviewReference } from "./AiOverviewReference";
import { ApiException, throwException } from "./ApiException"

export interface IAiOverviewElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** description content */
        text?: string | undefined
        
        /** images of the element */
        images?: ImagesElement[] | undefined
        
        /** references relevant to the element */
        references?: AiOverviewReference[] | undefined

    [key: string]: any;

    }

export class AiOverviewElement  implements IAiOverviewElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** description content */

    text?: string | undefined;
    
    /** images of the element */

    images?: ImagesElement[] | undefined;
    
    /** references relevant to the element */

    references?: AiOverviewReference[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOverviewElement) {

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
            this.text = data["text"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(ImagesElement.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiOverviewReference.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOverviewElement {
        data = typeof data === 'object' ? data : {};


        let result = new AiOverviewElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["text"] = this.text;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
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
        return data;
    }
}