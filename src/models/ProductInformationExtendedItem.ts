import { ProductInformationRows, IProductInformationRows } from "./ProductInformationRows";
import { BaseProductInformationItem, IBaseProductInformationItem } from "./BaseProductInformationItem";
import { ApiException, throwException } from "./ApiException"

export interface IProductInformationExtendedItem  extends IBaseProductInformationItem    {
        
        /** contains information specified about the product within the section_name */
        contents?: ProductInformationRows[] | undefined

    [key: string]: any;

    }

export class ProductInformationExtendedItem  extends BaseProductInformationItem   implements IProductInformationExtendedItem {
    
    /** contains information specified about the product within the section_name */

    contents?: ProductInformationRows[] | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationExtendedItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["contents"])) {
                this.contents = [];
                for (let item of data["contents"]) {
                    this.contents.push(ProductInformationRows.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): ProductInformationExtendedItem {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationExtendedItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["contents"] = null;
        if (Array.isArray(this.contents)) {
            data["contents"] = [];
            for (let item of this.contents) {
                if (item && typeof item.toJSON === "function") {
                    data["contents"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}