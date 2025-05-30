import { BaseMerchantSerpElementItem, IBaseMerchantSerpElementItem } from "./BaseMerchantSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IRelatedSearchesMerchantSerpElementItem  extends IBaseMerchantSerpElementItem    {
        
        /** XPath of the element */
        xpath?: string | undefined
        
        /** additional items present in the element
if there are none, equals null */
        items?: string[] | undefined

    [key: string]: any;

    }

export class RelatedSearchesMerchantSerpElementItem  extends BaseMerchantSerpElementItem   implements IRelatedSearchesMerchantSerpElementItem {
    
    /** XPath of the element */

    xpath?: string | undefined;
    
    /** additional items present in the element
if there are none, equals null */

    items?: string[] | undefined;

    [key: string]: any;


    constructor(data?: IRelatedSearchesMerchantSerpElementItem) {
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
            this.items = data["items"];
        }
    }

    static fromJS(data: any): RelatedSearchesMerchantSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new RelatedSearchesMerchantSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["xpath"] = this.xpath;
        data["items"] = this.items;
        return data;
    }
}