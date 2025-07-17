export interface IProductCategoryInfo   {
        
        /** product category name */
        category?: string | undefined
        
        /** product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon) */
        url?: string | undefined

    [key: string]: any;

    }

export class ProductCategoryInfo  implements IProductCategoryInfo {
    
    /** product category name */

    category?: string | undefined;
    
    /** product category URL
indicates the browse path on Amazon with the unique browse node ID (product category ID on Amazon) */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: IProductCategoryInfo) {

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
            this.category = data["category"];
            this.url = data["url"];
        }
    }

    static fromJS(data: any): ProductCategoryInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ProductCategoryInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["category"] = this.category;
        data["url"] = this.url;
        return data;
    }
}