import { ApiException, throwException } from "./ApiException"

export interface IMultiCarouselSnippet   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the link element */
        title?: string | undefined

    [key: string]: any;

    }

export class MultiCarouselSnippet  implements IMultiCarouselSnippet {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the link element */

    title?: string | undefined;

    [key: string]: any;


    constructor(data?: IMultiCarouselSnippet) {

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
        }
    }

    static fromJS(data: any): MultiCarouselSnippet {
        data = typeof data === 'object' ? data : {};


        let result = new MultiCarouselSnippet();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        return data;
    }
}