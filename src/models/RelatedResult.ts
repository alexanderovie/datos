import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { RatingElement, IRatingElement } from "./RatingElement";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";


export interface IRelatedResult   {
        
        /** type of element */
        type?: string | undefined
        
        /** the XPath of the element */
        xpath?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** title of the link */
        title?: string | undefined
        
        /** reference page URL */
        url?: string | undefined
        
        /** cached version of the page */
        cache_url?: string | undefined
        
        /** URL to a similar search
URL to a new search for the same keyword(s) on related sites */
        related_search_url?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** name of the website in the ad element */
        website_name?: string | undefined
        
        /** indicates whether the element contains an image */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video */
        is_video?: boolean | undefined
        
        /** description of the hotel booking element */
        description?: string | undefined
        
        /** includes additional information appended before the result description in SERP */
        pre_snippet?: string | undefined
        
        /** includes additional information appended after the result description in SERP */
        extended_snippet?: string | undefined
        
        /** images of the component
if there are none, equals null */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement | undefined
        
        /** price of booking a place for the specified dates of stay */
        price?: PriceInfo | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement | undefined
        
        /** date and time when the video was published or indexed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class RelatedResult  implements IRelatedResult {
    
    /** type of element */

    type?: string | undefined;
    
    /** the XPath of the element */

    xpath?: string | undefined;
    
    /** domain where a link points */

    domain?: string | undefined;
    
    /** title of the link */

    title?: string | undefined;
    
    /** reference page URL */

    url?: string | undefined;
    
    /** cached version of the page */

    cache_url?: string | undefined;
    
    /** URL to a similar search
URL to a new search for the same keyword(s) on related sites */

    related_search_url?: string | undefined;
    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;
    
    /** name of the website in the ad element */

    website_name?: string | undefined;
    
    /** indicates whether the element contains an image */

    is_image?: boolean | undefined;
    
    /** indicates whether the element contains a video */

    is_video?: boolean | undefined;
    
    /** description of the hotel booking element */

    description?: string | undefined;
    
    /** includes additional information appended before the result description in SERP */

    pre_snippet?: string | undefined;
    
    /** includes additional information appended after the result description in SERP */

    extended_snippet?: string | undefined;
    
    /** images of the component
if there are none, equals null */

    images?: AiModeImagesElementInfo[] | undefined;
    
    /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement | undefined;
    
    /** price of booking a place for the specified dates of stay */

    price?: PriceInfo | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;
    
    /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement | undefined;
    
    /** date and time when the video was published or indexed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: IRelatedResult) {

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
            this.type = data["type"];
            this.xpath = data["xpath"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.url = data["url"];
            this.cache_url = data["cache_url"];
            this.related_search_url = data["related_search_url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            this.description = data["description"];
            this.pre_snippet = data["pre_snippet"];
            this.extended_snippet = data["extended_snippet"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            this.amp_version = data["amp_version"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.highlighted = data["highlighted"];
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): RelatedResult {
        data = typeof data === 'object' ? data : {};


        let result = new RelatedResult();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["xpath"] = this.xpath;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["cache_url"] = this.cache_url;
        data["related_search_url"] = this.related_search_url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["description"] = this.description;
        data["pre_snippet"] = this.pre_snippet;
        data["extended_snippet"] = this.extended_snippet;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["amp_version"] = this.amp_version;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["highlighted"] = this.highlighted;
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        data["timestamp"] = this.timestamp;
        return data;
    }
}