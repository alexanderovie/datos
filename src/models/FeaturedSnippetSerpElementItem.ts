import { ImagesElement, IImagesElement } from "./ImagesElement";
import { Table, ITable } from "./Table";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IFeaturedSnippetSerpElementItem  extends IBaseSerpElementItem    {
        
        /** domain of the ad element in SERP */
        domain?: string | undefined
        
        /** title of the ad element in SERP */
        title?: string | undefined
        
        /** description of the ad element in SERP */
        description?: string | undefined
        
        /** relevant URL of the ad element in SERP */
        url?: string | undefined
        
        /** breadcrumb of the ad element in SERP */
        breadcrumb?: string | undefined
        
        /** title */
        featured_title?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** images of the element */
        images?: ImagesElement[] | undefined
        
        /** results table
if there are none, equals null */
        table?: Table | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class FeaturedSnippetSerpElementItem  extends BaseSerpElementItem   implements IFeaturedSnippetSerpElementItem {
    
    /** domain of the ad element in SERP */

    domain?: string | undefined;
    
    /** title of the ad element in SERP */

    title?: string | undefined;
    
    /** description of the ad element in SERP */

    description?: string | undefined;
    
    /** relevant URL of the ad element in SERP */

    url?: string | undefined;
    
    /** breadcrumb of the ad element in SERP */

    breadcrumb?: string | undefined;
    
    /** title */

    featured_title?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** images of the element */

    images?: ImagesElement[] | undefined;
    
    /** results table
if there are none, equals null */

    table?: Table | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IFeaturedSnippetSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            this.url = data["url"];
            this.breadcrumb = data["breadcrumb"];
            this.featured_title = data["featured_title"];
            this.timestamp = data["timestamp"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(ImagesElement.fromJS(item));
                }
            }
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): FeaturedSnippetSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new FeaturedSnippetSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["url"] = this.url;
        data["breadcrumb"] = this.breadcrumb;
        data["featured_title"] = this.featured_title;
        data["timestamp"] = this.timestamp;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}