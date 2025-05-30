import { ApiException, throwException } from "./ApiException"

export interface IInformationAndTicketsElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** description of the element */
        description?: string | undefined
        
        /** relevant URL */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined

    [key: string]: any;

    }

export class InformationAndTicketsElement  implements IInformationAndTicketsElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** description of the element */

    description?: string | undefined;
    
    /** relevant URL */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;

    [key: string]: any;


    constructor(data?: IInformationAndTicketsElement) {

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
            this.domain = data["domain"];
        }
    }

    static fromJS(data: any): InformationAndTicketsElement {
        data = typeof data === 'object' ? data : {};


        let result = new InformationAndTicketsElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["domain"] = this.domain;
        return data;
    }
}