import { ApiException, throwException } from "./ApiException"

export interface IBaseProductInformationItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** name of the section related to product information specified in the contents */
        section_name?: string | undefined

    [key: string]: any;

    }

export class BaseProductInformationItem  implements IBaseProductInformationItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** name of the section related to product information specified in the contents */

    section_name?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseProductInformationItem) {

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
            this.section_name = data["section_name"];
        }
    }

    static fromJS(data: any): BaseProductInformationItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "product_information_details_item") {

            const { ProductInformationDetailsItem } = require('./ProductInformationDetailsItem');
            let result = new ProductInformationDetailsItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_information_text_item") {

            const { ProductInformationTextItem } = require('./ProductInformationTextItem');
            let result = new ProductInformationTextItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "product_information_extended_item") {

            const { ProductInformationExtendedItem } = require('./ProductInformationExtendedItem');
            let result = new ProductInformationExtendedItem();
            result.init(data);
            return result;
        }

        let result = new BaseProductInformationItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["section_name"] = this.section_name;
        return data;
    }
}