import { ImagesElement, IImagesElement } from "./ImagesElement";
import { AdLinkElement, IAdLinkElement } from "./AdLinkElement";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IPaidSerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** domain name of the reference */
        domain?: string | undefined
        
        /** name of the website in SERP */
        website_name?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** indicates whether the element contains an image */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video */
        is_video?: boolean | undefined
        
        /** images of the element */
        images?: ImagesElement[] | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** additional information about the result */
        extra?: { [key: string]: string; } | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** extended description
if there is none, equals null */
        description_rows?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: AdLinkElement[] | undefined
        
        /** pricing details
contains the pricing details of the product or service featured in the result */
        price?: PriceInfo | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: BusinessDataRatingInfo | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class PaidSerpElementItem  extends BaseSerpElementItem   implements IPaidSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** domain name of the reference */

    domain?: string | undefined;
    
    /** name of the website in SERP */

    website_name?: string | undefined;
    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;
    
    /** indicates whether the element contains an image */

    is_image?: boolean | undefined;
    
    /** indicates whether the element contains a video */

    is_video?: boolean | undefined;
    
    /** images of the element */

    images?: ImagesElement[] | undefined;
    
    /** relevant URL in SERP */

    url?: string | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;
    
    /** additional information about the result */

    extra?: { [key: string]: string; } | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** extended description
if there is none, equals null */

    description_rows?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: AdLinkElement[] | undefined;
    
    /** pricing details
contains the pricing details of the product or service featured in the result */

    price?: PriceInfo | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: BusinessDataRatingInfo | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IPaidSerpElementItem) {
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
            this.domain = data["domain"];
            this.website_name = data["website_name"];
            this.breadcrumb = data["breadcrumb"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(ImagesElement.fromJS(item));
                }
            }
            this.url = data["url"];
            this.highlighted = data["highlighted"];
            this.extra = data["extra"];
            this.description = data["description"];
            this.description_rows = data["description_rows"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(AdLinkElement.fromJS(item));
                }
            }
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.rating = data["rating"] ? BusinessDataRatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PaidSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PaidSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["domain"] = this.domain;
        data["website_name"] = this.website_name;
        data["breadcrumb"] = this.breadcrumb;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["url"] = this.url;
        data["highlighted"] = this.highlighted;
        data["extra"] = this.extra;
        data["description"] = this.description;
        data["description_rows"] = this.description_rows;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["rating"] = this.rating ? BusinessDataRatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}