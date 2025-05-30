import { TopStoriesElement, ITopStoriesElement } from "./TopStoriesElement";
import { BaseGoogleNewsSerpElementItem, IBaseGoogleNewsSerpElementItem } from "./BaseGoogleNewsSerpElementItem";
import { Rectangle, IRectangle } from "./Rectangle";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleNewsTopStoriesSerpElementItem  extends IBaseGoogleNewsSerpElementItem    {
        
        /** the alignment of the element in SERP
can take the following values:
left */
        position?: string | undefined
        
        /** items of the element */
        items?: TopStoriesElement[] | undefined

    [key: string]: any;

    }

export class GoogleNewsTopStoriesSerpElementItem  extends BaseGoogleNewsSerpElementItem   implements IGoogleNewsTopStoriesSerpElementItem {
    
    /** the alignment of the element in SERP
can take the following values:
left */

    position?: string | undefined;
    
    /** items of the element */

    items?: TopStoriesElement[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleNewsTopStoriesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.position = data["position"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(TopStoriesElement.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleNewsTopStoriesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleNewsTopStoriesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}