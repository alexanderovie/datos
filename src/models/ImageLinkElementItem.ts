import { BaseOnPageLinkItemInfo, IBaseOnPageLinkItemInfo } from "./BaseOnPageLinkItemInfo";
import { ApiException, throwException } from "./ApiException"

export interface IImageLinkElementItem  extends IBaseOnPageLinkItemInfo    {
        
        /** link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
['ugc','noopener'] */
        link_attribute?: string[] | undefined
        
        /** anchor text */
        text?: string | undefined
        
        /** alternative text for the image */
        image_alt?: string | undefined
        
        /** url of the image */
        image_src?: string | undefined

    [key: string]: any;

    }

export class ImageLinkElementItem  extends BaseOnPageLinkItemInfo   implements IImageLinkElementItem {
    
    /** link attribute added to external link
indicates link attributes added to the link_to on the page_from
example:
['ugc','noopener'] */

    link_attribute?: string[] | undefined;
    
    /** anchor text */

    text?: string | undefined;
    
    /** alternative text for the image */

    image_alt?: string | undefined;
    
    /** url of the image */

    image_src?: string | undefined;

    [key: string]: any;


    constructor(data?: IImageLinkElementItem) {
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
            this.image_alt = data["image_alt"];
            this.image_src = data["image_src"];
        }
    }

    static fromJS(data: any): ImageLinkElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ImageLinkElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["link_attribute"] = this.link_attribute;
        data["text"] = this.text;
        data["image_alt"] = this.image_alt;
        data["image_src"] = this.image_src;
        return data;
    }
}