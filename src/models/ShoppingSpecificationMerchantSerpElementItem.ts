import { BaseMerchantSerpElementItem, IBaseMerchantSerpElementItem } from "./BaseMerchantSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IShoppingSpecificationMerchantSerpElementItem  extends IBaseMerchantSerpElementItem    {
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** name of the block of product attributes
indicates the name of the product specification section in which the related element is listed */
        block_name?: string | undefined
        
        /** product attribute
attribute name of the product data specification */
        specification_name?: string | undefined
        
        /** content of the specification */
        specification_value?: string | undefined

    [key: string]: any;

    }

export class ShoppingSpecificationMerchantSerpElementItem  extends BaseMerchantSerpElementItem   implements IShoppingSpecificationMerchantSerpElementItem {
    
    /** XPath of the element */

    xpath?: string | undefined;
    
    /** name of the block of product attributes
indicates the name of the product specification section in which the related element is listed */

    block_name?: string | undefined;
    
    /** product attribute
attribute name of the product data specification */

    specification_name?: string | undefined;
    
    /** content of the specification */

    specification_value?: string | undefined;

    [key: string]: any;


    constructor(data?: IShoppingSpecificationMerchantSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.xpath = data["xpath"];
            this.block_name = data["block_name"];
            this.specification_name = data["specification_name"];
            this.specification_value = data["specification_value"];
        }
    }

    static fromJS(data: any): ShoppingSpecificationMerchantSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ShoppingSpecificationMerchantSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["xpath"] = this.xpath;
        data["block_name"] = this.block_name;
        data["specification_name"] = this.specification_name;
        data["specification_value"] = this.specification_value;
        return data;
    }
}