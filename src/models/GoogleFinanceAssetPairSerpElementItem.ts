import { BaseGoogleFinanceTickerSearchSerpElementItem, IBaseGoogleFinanceTickerSearchSerpElementItem } from "./BaseGoogleFinanceTickerSearchSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceAssetPairSerpElementItem  extends IBaseGoogleFinanceTickerSearchSerpElementItem    {
        
        /** identifier of the base asset in a pair
example: EUR */
        base_symbol?: string | undefined
        
        /** identifier of the quote asset in a pair
example: USD */
        quote_symbol?: string | undefined
        
        /** full name of the base asset in a pair
example: Euro */
        base_display_name?: string | undefined
        
        /** full name of the base asset in a pair
example: Euro */
        quote_display_name?: string | undefined
        
        /** value of the base asset compared to the quote asset */
        price?: number | undefined
        
        /** change in price
change in price at a given timestamp */
        price_delta?: number | undefined

    [key: string]: any;

    }

export class GoogleFinanceAssetPairSerpElementItem  extends BaseGoogleFinanceTickerSearchSerpElementItem   implements IGoogleFinanceAssetPairSerpElementItem {
    
    /** identifier of the base asset in a pair
example: EUR */

    base_symbol?: string | undefined;
    
    /** identifier of the quote asset in a pair
example: USD */

    quote_symbol?: string | undefined;
    
    /** full name of the base asset in a pair
example: Euro */

    base_display_name?: string | undefined;
    
    /** full name of the base asset in a pair
example: Euro */

    quote_display_name?: string | undefined;
    
    /** value of the base asset compared to the quote asset */

    price?: number | undefined;
    
    /** change in price
change in price at a given timestamp */

    price_delta?: number | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceAssetPairSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.base_symbol = data["base_symbol"];
            this.quote_symbol = data["quote_symbol"];
            this.base_display_name = data["base_display_name"];
            this.quote_display_name = data["quote_display_name"];
            this.price = data["price"];
            this.price_delta = data["price_delta"];
        }
    }

    static fromJS(data: any): GoogleFinanceAssetPairSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceAssetPairSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["base_symbol"] = this.base_symbol;
        data["quote_symbol"] = this.quote_symbol;
        data["base_display_name"] = this.base_display_name;
        data["quote_display_name"] = this.quote_display_name;
        data["price"] = this.price;
        data["price_delta"] = this.price_delta;
        return data;
    }
}