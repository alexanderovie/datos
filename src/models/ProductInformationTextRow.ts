import { BaseProductInformationRowItem, IBaseProductInformationRowItem } from "./BaseProductInformationRowItem";
import { ApiException, throwException } from "./ApiException"

export interface IProductInformationTextRow  extends IBaseProductInformationRowItem    {
        
        /** text of the voucher */
        text?: string | undefined

    [key: string]: any;

    }

export class ProductInformationTextRow  extends BaseProductInformationRowItem   implements IProductInformationTextRow {
    
    /** text of the voucher */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationTextRow) {
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

    static fromJS(data: any): ProductInformationTextRow {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationTextRow();
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