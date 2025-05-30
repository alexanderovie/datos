import { Rectangle, IRectangle } from "./Rectangle";
import { ApiException, throwException } from "./ApiException"

export interface IBaseGoogleNewsSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** title of the element */
        title?: string | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class BaseGoogleNewsSerpElementItem  implements IBaseGoogleNewsSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;
    
    /** title of the element */

    title?: string | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseGoogleNewsSerpElementItem) {

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
            this.title = data["title"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): BaseGoogleNewsSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "news_search") {

            const { GoogleNewsNewsSearchSerpElementItem } = require('./GoogleNewsNewsSearchSerpElementItem');
            let result = new GoogleNewsNewsSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "top_stories") {

            const { GoogleNewsTopStoriesSerpElementItem } = require('./GoogleNewsTopStoriesSerpElementItem');
            let result = new GoogleNewsTopStoriesSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGoogleNewsSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["xpath"] = this.xpath;
        data["title"] = this.title;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}