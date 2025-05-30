import { AiOverviewElement, IAiOverviewElement } from "./AiOverviewElement";
import { AiOverviewReference, IAiOverviewReference } from "./AiOverviewReference";
import { BasePeopleAlsoAskExpandedElementItem, IBasePeopleAlsoAskExpandedElementItem } from "./BasePeopleAlsoAskExpandedElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IPeopleAlsoAskAiOverviewExpandedElementSerpElementItem  extends IBasePeopleAlsoAskExpandedElementItem    {
        
        /** contains arrays of elements available in the list */
        items?: AiOverviewElement[] | undefined
        
        /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */
        references?: AiOverviewReference[] | undefined

    [key: string]: any;

    }

export class PeopleAlsoAskAiOverviewExpandedElementSerpElementItem  extends BasePeopleAlsoAskExpandedElementItem   implements IPeopleAlsoAskAiOverviewExpandedElementSerpElementItem {
    
    /** contains arrays of elements available in the list */

    items?: AiOverviewElement[] | undefined;
    
    /** additional references relevant to the item
includes references to webpages that may have been used to generate the ai_overview */

    references?: AiOverviewReference[] | undefined;

    [key: string]: any;


    constructor(data?: IPeopleAlsoAskAiOverviewExpandedElementSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
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
        }
    }

    static fromJS(data: any): PeopleAlsoAskAiOverviewExpandedElementSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PeopleAlsoAskAiOverviewExpandedElementSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
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
        return data;
    }
}