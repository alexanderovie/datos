import { RatingElement, IRatingElement } from "./RatingElement";

export interface ILocalServicesElement   {
        
        /** type of element */
        type?: string
        
        /** title of a given link element */
        title?: string
        
        /** URL */
        url?: string
        
        /** website domain */
        domain?: string
        
        /** description */
        description?: string
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement
        
        /** URL of the image featured in the element */
        profile_image_url?: string

    [key: string]: any;

    }

export class LocalServicesElement  implements ILocalServicesElement {
    
    /** type of element */

    type?: string;
    
    /** title of a given link element */

    title?: string;
    
    /** URL */

    url?: string;
    
    /** website domain */

    domain?: string;
    
    /** description */

    description?: string;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement;
    
    /** URL of the image featured in the element */

    profile_image_url?: string;

    [key: string]: any;


    constructor(data?: ILocalServicesElement) {

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
            this.description = data["description"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.profile_image_url = data["profile_image_url"];
        }
    }

    static fromJS(data: any): LocalServicesElement {
        data = typeof data === 'object' ? data : {};


        let result = new LocalServicesElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["description"] = this.description;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["profile_image_url"] = this.profile_image_url;
        return data;
    }
}