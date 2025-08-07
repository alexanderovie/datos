export interface IShoppingSpecification   {
        
        /** type of element */
        type?: string | undefined
        
        /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank on the product specification page
absolute position among all the elements found on the product specification page */
        rank_absolute?: number | undefined
        
        /** alignment of the element on the product specification page
can take the following values:
right */
        position?: string | undefined
        
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

export class ShoppingSpecification  implements IShoppingSpecification {
    
    /** type of element */

    type?: string | undefined;
    
    /** position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank on the product specification page
absolute position among all the elements found on the product specification page */

    rank_absolute?: number | undefined;
    
    /** alignment of the element on the product specification page
can take the following values:
right */

    position?: string | undefined;
    
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


    constructor(data?: IShoppingSpecification) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.block_name = data["block_name"];
            this.specification_name = data["specification_name"];
            this.specification_value = data["specification_value"];
        }
    }

    static fromJS(data: any): ShoppingSpecification {
        data = typeof data === 'object' ? data : {};


        let result = new ShoppingSpecification();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["block_name"] = this.block_name;
        data["specification_name"] = this.specification_name;
        data["specification_value"] = this.specification_value;
        return data;
    }
}