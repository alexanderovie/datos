import { BaseProductInformationRowItem, IBaseProductInformationRowItem } from "./BaseProductInformationRowItem";
import { ApiException, throwException } from "./ApiException"

export interface IProductInformationImageRow  extends IBaseProductInformationRowItem    {
        
        /** alternative text of the related product image */
        alt?: string | undefined
        
        /** URL of the image */
        url?: string | undefined

    [key: string]: any;

    }

export class ProductInformationImageRow  extends BaseProductInformationRowItem   implements IProductInformationImageRow {
    
    /** alternative text of the related product image */

    alt?: string | undefined;
    
    /** URL of the image */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductInformationImageRow) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.alt = data["alt"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): ProductInformationImageRow {
        data = typeof data === 'object' ? data : {};


        let result = new ProductInformationImageRow();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["alt"] = this.alt;
        data["url"] = this.url;
        return data;
    }
}