import { BaseOnPageLinkItemInfo, IBaseOnPageLinkItemInfo } from "./BaseOnPageLinkItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAnchorLinkElementItem  extends IBaseOnPageLinkItemInfo    {
        
        /** link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
['ugc','noopener'] */
        link_attribute?: string[] | undefined
        
        /** anchor text */
        text?: string | undefined

    [key: string]: any;

    }

export class AnchorLinkElementItem  extends BaseOnPageLinkItemInfo   implements IAnchorLinkElementItem {
    
    /** link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
['ugc','noopener'] */

    link_attribute?: string[] | undefined;
    
    /** anchor text */

    text?: string | undefined;

    [key: string]: any;


    constructor(data?: IAnchorLinkElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.link_attribute = data["link_attribute"];
            this.text = data["text"];
        }
    }

    static fromJS(data: any): AnchorLinkElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AnchorLinkElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["link_attribute"] = this.link_attribute;
        data["text"] = this.text;
        return data;
    }
}