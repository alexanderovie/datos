import { ApiException, throwException } from "./ApiException"

export interface IBaseProductInformationRowItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseProductInformationRowItem  implements IBaseProductInformationRowItem {
    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseProductInformationRowItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
        }
    }

    static fromJS(data: any): BaseProductInformationRowItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "product_information_image_row") {

            const { ProductInformationImageRow } = require('./ProductInformationImageRow');
            let result = new ProductInformationImageRow();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_information_text_row") {

            const { ProductInformationTextRow } = require('./ProductInformationTextRow');
            let result = new ProductInformationTextRow();
            result.init(data);
            return result;
        }

        let result = new BaseProductInformationRowItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}