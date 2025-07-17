import { AiModeImagesElement, IAiModeImagesElement } from "./AiModeImagesElement";
import { LinkElement, ILinkElement } from "./LinkElement";
import { AiAiOverviewReferenceInfo, IAiAiOverviewReferenceInfo } from "./AiAiOverviewReferenceInfo";


export interface IAiOverviewExpandedComponent   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** reference text
text snippet from the page that was used to generate the ai_overview_element */
        text?: string | undefined
        
        /** content of the element in markdown format */
        markdown?: string | undefined
        
        /** images of the element */
        images?: AiModeImagesElement[] | undefined
        
        /** website links featured in the element */
        links?: LinkElement[] | undefined
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class AiOverviewExpandedComponent  implements IAiOverviewExpandedComponent {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** reference text
text snippet from the page that was used to generate the ai_overview_element */

    text?: string | undefined;
    
    /** content of the element in markdown format */

    markdown?: string | undefined;
    
    /** images of the element */

    images?: AiModeImagesElement[] | undefined;
    
    /** website links featured in the element */

    links?: LinkElement[] | undefined;
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAiOverviewExpandedComponent) {

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
            this.markdown = data["markdown"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElement.fromJS(item));
                }
            }
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AiOverviewExpandedComponent {
        data = typeof data === 'object' ? data : {};


        let result = new AiOverviewExpandedComponent();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["text"] = this.text;
        data["markdown"] = this.markdown;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
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