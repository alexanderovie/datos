import { Rectangle, IRectangle } from "./Rectangle";
import { BaseGoogleImagesSerpElementItem, IBaseGoogleImagesSerpElementItem } from "./BaseGoogleImagesSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleImageRelatedSearchesSerpElementItem  extends IBaseGoogleImagesSerpElementItem    {
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined
        
        /** items of the element */
        items?: string[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class GoogleImageRelatedSearchesSerpElementItem  extends BaseGoogleImagesSerpElementItem   implements IGoogleImageRelatedSearchesSerpElementItem {
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;
    
    /** items of the element */

    items?: string[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IGoogleImageRelatedSearchesSerpElementItem) {
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
            this.items = data["items"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): GoogleImageRelatedSearchesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleImageRelatedSearchesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["position"] = this.position;
        data["items"] = this.items;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}