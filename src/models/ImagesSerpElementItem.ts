import { ImagesElement, IImagesElement } from "./ImagesElement";
import { RelatedImageSearchesElement, IRelatedImageSearchesElement } from "./RelatedImageSearchesElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IImagesSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the row */
        title?: string | undefined
        
        /** URL */
        url?: string | undefined
        
        /** contains arrays of specific images */
        items?: ImagesElement[] | undefined
        
        /** contains keywords and images related to the specified search term
if there are none, equals null */
        related_image_searches?: RelatedImageSearchesElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class ImagesSerpElementItem  extends BaseSerpElementItem   implements IImagesSerpElementItem {
    
    /** title of the row */

    title?: string | undefined;
    
    /** URL */

    url?: string | undefined;
    
    /** contains arrays of specific images */

    items?: ImagesElement[] | undefined;
    
    /** contains keywords and images related to the specified search term
if there are none, equals null */

    related_image_searches?: RelatedImageSearchesElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IImagesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.url = data["url"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(ImagesElement.fromJS(item));
                }
            }
            if (Array.isArray(data["related_image_searches"])) {
                this.related_image_searches = [];
                for (let item of data["related_image_searches"]) {
                    this.related_image_searches.push(RelatedImageSearchesElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ImagesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new ImagesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        data["related_image_searches"] = null;
        if (Array.isArray(this.related_image_searches)) {
            data["related_image_searches"] = [];
            for (let item of this.related_image_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["related_image_searches"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}