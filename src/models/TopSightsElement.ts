import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface ITopSightsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of a given link element */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** description */
        description?: string | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined

    [key: string]: any;

    }

export class TopSightsElement  implements ITopSightsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of a given link element */

    title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** description */

    description?: string | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;

    [key: string]: any;


    constructor(data?: ITopSightsElement) {

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
            this.description = data["description"];
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
        }
    }

    static fromJS(data: any): TopSightsElement {
        data = typeof data === 'object' ? data : {};


        let result = new TopSightsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["url"] = this.url;
        data["description"] = this.description;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        return data;
    }
}