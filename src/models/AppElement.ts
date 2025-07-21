import { PriceInfo, IPriceInfo } from "./PriceInfo";

export interface IAppElement   {
        
        /** type of element */
        type?: string
        
        /** title of a given link element */
        title?: string
        
        /** description */
        description?: string
        
        /** URL */
        url?: string
        
        /** price indicated in the element */
        price?: PriceInfo

    [key: string]: any;

    }

export class AppElement  implements IAppElement {
    
    /** type of element */

    type?: string;
    
    /** title of a given link element */

    title?: string;
    
    /** description */

    description?: string;
    
    /** URL */

    url?: string;
    
    /** price indicated in the element */

    price?: PriceInfo;

    [key: string]: any;


    constructor(data?: IAppElement) {

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
            this.description = data["description"];
            this.url = data["url"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppElement {
        data = typeof data === 'object' ? data : {};


        let result = new AppElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        return data;
    }
}