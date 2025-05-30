import { CarouselElement, ICarouselElement } from "./CarouselElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseGoogleImagesSerpElementItem, IBaseGoogleImagesSerpElementItem } from "./BaseGoogleImagesSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleImageCarouselSerpElementItem  extends IBaseGoogleImagesSerpElementItem    {
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** items of the element */
        items?: CarouselElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class GoogleImageCarouselSerpElementItem  extends BaseGoogleImagesSerpElementItem   implements IGoogleImageCarouselSerpElementItem {
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** items of the element */

    items?: CarouselElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IGoogleImageCarouselSerpElementItem) {
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
            this.title = data["title"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(CarouselElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleImageCarouselSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleImageCarouselSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["title"] = this.title;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}