import { AiModeImagesElement, IAiModeImagesElement } from "./AiModeImagesElement";
import { InformationAndTicketsElement, IInformationAndTicketsElement } from "./InformationAndTicketsElement";
import { AiAiOverviewReferenceInfo, IAiAiOverviewReferenceInfo } from "./AiAiOverviewReferenceInfo";

export interface IAiModeAiOverviewExpandedComponent   {
        
        /** type of element */
        type?: string
        
        /** reference page title */
        title?: string
        
        /** additional text of the element in SERP */
        text?: string
        
        /** content of the element in markdown format */
        markdown?: string
        
        /** images of the component
if there are none, equals null */
        images?: AiModeImagesElement[]
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: InformationAndTicketsElement[]
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiAiOverviewReferenceInfo[]

    [key: string]: any;

    }

export class AiModeAiOverviewExpandedComponent  implements IAiModeAiOverviewExpandedComponent {
    
    /** type of element */

    type?: string;
    
    /** reference page title */

    title?: string;
    
    /** additional text of the element in SERP */

    text?: string;
    
    /** content of the element in markdown format */

    markdown?: string;
    
    /** images of the component
if there are none, equals null */

    images?: AiModeImagesElement[];
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: InformationAndTicketsElement[];
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiAiOverviewReferenceInfo[];

    [key: string]: any;


    constructor(data?: IAiModeAiOverviewExpandedComponent) {

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
                    this.links.push(InformationAndTicketsElement.fromJS(item));
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

    static fromJS(data: any): AiModeAiOverviewExpandedComponent {
        data = typeof data === 'object' ? data : {};


        let result = new AiModeAiOverviewExpandedComponent();
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