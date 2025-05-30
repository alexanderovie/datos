import { ApiException, throwException } from "./ApiException"

export interface IBaseGoogleImagesSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined

    [key: string]: any;

    }

export class BaseGoogleImagesSerpElementItem  implements IBaseGoogleImagesSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseGoogleImagesSerpElementItem) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.xpath = data["xpath"];
        }
    }

    static fromJS(data: any): BaseGoogleImagesSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "carousel") {

            const { GoogleImageCarouselSerpElementItem } = require('./GoogleImageCarouselSerpElementItem');
            let result = new GoogleImageCarouselSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "images_search") {

            const { GoogleImageImagesSearchSerpElementItem } = require('./GoogleImageImagesSearchSerpElementItem');
            let result = new GoogleImageImagesSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "related_searches") {

            const { GoogleImageRelatedSearchesSerpElementItem } = require('./GoogleImageRelatedSearchesSerpElementItem');
            let result = new GoogleImageRelatedSearchesSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGoogleImagesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["xpath"] = this.xpath;
        return data;
    }
}