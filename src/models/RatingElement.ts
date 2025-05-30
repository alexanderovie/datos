import { ApiException, throwException } from "./ApiException"

export interface IRatingElement   {
        
        /** the type of rating
here you can find the following elements: Max5, Percents, CustomMax */
        rating_type?: string | undefined
        
        /** the value of the rating */
        value?: number | undefined
        
        /** the amount of feedbac */
        votes_count?: number | undefined
        
        /** the maximum value for a rating_type */
        rating_max?: number | undefined
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element in Google Shopping SERP
possible values:
left, right */
        position?: string | undefined

    [key: string]: any;

    }

export class RatingElement  implements IRatingElement {
    
    /** the type of rating
here you can find the following elements: Max5, Percents, CustomMax */

    rating_type?: string | undefined;
    
    /** the value of the rating */

    value?: number | undefined;
    
    /** the amount of feedbac */

    votes_count?: number | undefined;
    
    /** the maximum value for a rating_type */

    rating_max?: number | undefined;
    
    /** type of element */

    type?: string | undefined;
    
    /** the alignment of the element in Google Shopping SERP
possible values:
left, right */

    position?: string | undefined;

    [key: string]: any;


    constructor(data?: IRatingElement) {

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
            this.rating_type = data["rating_type"];
            this.value = data["value"];
            this.votes_count = data["votes_count"];
            this.rating_max = data["rating_max"];
            this.type = data["type"];
            this.position = data["position"];
        }
    }

    static fromJS(data: any): RatingElement {
        data = typeof data === 'object' ? data : {};


        let result = new RatingElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["rating_type"] = this.rating_type;
        data["value"] = this.value;
        data["votes_count"] = this.votes_count;
        data["rating_max"] = this.rating_max;
        data["type"] = this.type;
        data["position"] = this.position;
        return data;
    }
}