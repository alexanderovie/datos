import { BaseProductInformationItem, IBaseProductInformationItem } from "./BaseProductInformationItem";
import { ApiException, throwException } from "./ApiException"

export interface IProductInformationDetailsItem  extends IBaseProductInformationItem    {
        
        /** contains information specified about the product within the section_name */
        body?: { [key: string]: string; } | undefined

    [key: string]: any;

    }

export class ProductInformationDetailsItem  extends BaseProductInformationItem   implements IProductInformationDetailsItem {
    
    /** contains information specified about the product within the section_name */

    body?: { [key: string]: string; } | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationDetailsItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.body = data["body"];
        }
    }

    static fromJS(data: any): ProductInformationDetailsItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationDetailsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["body"] = this.body;
        return data;
    }
}