import { ApiException, throwException } from "./ApiException"

export interface IFacebook   {
        
        /** type of element */
        type?: string | undefined
        
        like_count?: number | undefined

    [key: string]: any;

    }

export class Facebook  implements IFacebook {
    
    /** type of element */

    type?: string | undefined;

    like_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IFacebook) {

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
            this.like_count = data["like_count"];
        }
    }

    static fromJS(data: any): Facebook {
        data = typeof data === 'object' ? data : {};


        let result = new Facebook();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["like_count"] = this.like_count;
        return data;
    }
}