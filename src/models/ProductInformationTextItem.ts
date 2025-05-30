import { BaseProductInformationItem, IBaseProductInformationItem } from "./BaseProductInformationItem";
import { ApiException, throwException } from "./ApiException"

export interface IProductInformationTextItem  extends IBaseProductInformationItem    {
        
        /** text specified under the given title within the section_name */
        text?: string | undefined

    [key: string]: any;

    }

export class ProductInformationTextItem  extends BaseProductInformationItem   implements IProductInformationTextItem {
    
    /** text specified under the given title within the section_name */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationTextItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.text = data["text"];
        }
    }

    static fromJS(data: any): ProductInformationTextItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationTextItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["text"] = this.text;
        return data;
    }
}