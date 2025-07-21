export interface IBusinessDataContactInfo   {
        
        /** type of element */
        type?: string
        
        /** contact displayed in SERP 
example:
'+119797979736' */
        value?: string
        
        /** data source */
        source?: string

    [key: string]: any;

    }

export class BusinessDataContactInfo  implements IBusinessDataContactInfo {
    
    /** type of element */

    type?: string;
    
    /** contact displayed in SERP 
example:
'+119797979736' */

    value?: string;
    
    /** data source */

    source?: string;

    [key: string]: any;


    constructor(data?: IBusinessDataContactInfo) {

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
            this.value = data["value"];
            this.source = data["source"];
        }
    }

    static fromJS(data: any): BusinessDataContactInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataContactInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["value"] = this.value;
        data["source"] = this.source;
        return data;
    }
}