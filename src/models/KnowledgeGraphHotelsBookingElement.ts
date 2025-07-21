import { PriceInfo, IPriceInfo } from "./PriceInfo";

export interface IKnowledgeGraphHotelsBookingElement   {
        
        /** type of element */
        type?: string
        
        /** source of additional information about the result */
        source?: string
        
        /** description of the results element in SERP */
        description?: string
        
        /** relevant URL */
        url?: string
        
        /** domain where a link points */
        domain?: string
        
        /** pricing details
contains the pricing details of the product or service featured in the result */
        price?: PriceInfo
        
        /** indicates whether the element is an ad */
        is_paid?: boolean

    [key: string]: any;

    }

export class KnowledgeGraphHotelsBookingElement  implements IKnowledgeGraphHotelsBookingElement {
    
    /** type of element */

    type?: string;
    
    /** source of additional information about the result */

    source?: string;
    
    /** description of the results element in SERP */

    description?: string;
    
    /** relevant URL */

    url?: string;
    
    /** domain where a link points */

    domain?: string;
    
    /** pricing details
contains the pricing details of the product or service featured in the result */

    price?: PriceInfo;
    
    /** indicates whether the element is an ad */

    is_paid?: boolean;

    [key: string]: any;


    constructor(data?: IKnowledgeGraphHotelsBookingElement) {

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
            this.source = data["source"];
            this.description = data["description"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.is_paid = data["is_paid"];
        }
    }

    static fromJS(data: any): KnowledgeGraphHotelsBookingElement {
        data = typeof data === 'object' ? data : {};


        let result = new KnowledgeGraphHotelsBookingElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["source"] = this.source;
        data["description"] = this.description;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["is_paid"] = this.is_paid;
        return data;
    }
}