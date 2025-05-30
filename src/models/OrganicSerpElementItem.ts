import { ImagesElement, IImagesElement } from "./ImagesElement";
import { RatingInfo, IRatingInfo } from "./RatingInfo";
import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { LinkElement, ILinkElement } from "./LinkElement";
import { FaqBox, IFaqBox } from "./FaqBox";
import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { RelatedResult, IRelatedResult } from "./RelatedResult";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IOrganicSerpElementItem  extends IBaseSerpElementItem    {
        
        /** domain name of the reference */
        domain?: string | undefined
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** relevant URL in SERP */
        url?: string | undefined
        
        /** cached version of the page */
        cache_url?: string | undefined
        
        /** URL to a similar search
URL to a new search for the same keyword(s) on related sites */
        related_search_url?: string | undefined
        
        /** breadcrumb in SERP */
        breadcrumb?: string | undefined
        
        /** name of the website in SERP */
        website_name?: string | undefined
        
        /** indicates whether the element contains an image */
        is_image?: boolean | undefined
        
        /** indicates whether the element contains a video */
        is_video?: boolean | undefined
        
        /** indicates whether the element is a featured_snippet */
        is_featured_snippet?: boolean | undefined
        
        /** indicates whether the element is marked as malicious */
        is_malicious?: boolean | undefined
        
        /** indicates whether the element is marked as Google web story */
        is_web_story?: boolean | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** includes additional information appended before the result description in SERP */
        pre_snippet?: string | undefined
        
        /** includes additional information appended after the result description in SERP */
        extended_snippet?: string | undefined
        
        /** images of the element */
        images?: ImagesElement[] | undefined
        
        /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */
        amp_version?: boolean | undefined
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingInfo | undefined
        
        /** pricing details
contains the pricing details of the product or service featured in the result */
        price?: PriceInfo | undefined
        
        /** words highlighted in bold within the results description */
        highlighted?: string[] | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null */
        faq?: FaqBox | undefined
        
        /** extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results */
        extended_people_also_search?: string[] | undefined
        
        /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement | undefined
        
        /** related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as 'type': 'organic' results by setting the group_organic_results parameter to false in the POST request */
        related_result?: RelatedResult[] | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class OrganicSerpElementItem  extends BaseSerpElementItem   implements IOrganicSerpElementItem {
    
    /** domain name of the reference */

    domain?: string | undefined;
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** relevant URL in SERP */

    url?: string | undefined;
    
    /** cached version of the page */

    cache_url?: string | undefined;
    
    /** URL to a similar search
URL to a new search for the same keyword(s) on related sites */

    related_search_url?: string | undefined;
    
    /** breadcrumb in SERP */

    breadcrumb?: string | undefined;
    
    /** name of the website in SERP */

    website_name?: string | undefined;
    
    /** indicates whether the element contains an image */

    is_image?: boolean | undefined;
    
    /** indicates whether the element contains a video */

    is_video?: boolean | undefined;
    
    /** indicates whether the element is a featured_snippet */

    is_featured_snippet?: boolean | undefined;
    
    /** indicates whether the element is marked as malicious */

    is_malicious?: boolean | undefined;
    
    /** indicates whether the element is marked as Google web story */

    is_web_story?: boolean | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** includes additional information appended before the result description in SERP */

    pre_snippet?: string | undefined;
    
    /** includes additional information appended after the result description in SERP */

    extended_snippet?: string | undefined;
    
    /** images of the element */

    images?: ImagesElement[] | undefined;
    
    /** Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version */

    amp_version?: boolean | undefined;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingInfo | undefined;
    
    /** pricing details
contains the pricing details of the product or service featured in the result */

    price?: PriceInfo | undefined;
    
    /** words highlighted in bold within the results description */

    highlighted?: string[] | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** frequently asked questions
questions and answers extension shown below some of Google’s search results
if there are none, equals null */

    faq?: FaqBox | undefined;
    
    /** extension of the organic element
extension of the organic result containing related search queries
Note: extension appears in SERP upon clicking on the result and then bouncing back to search results */

    extended_people_also_search?: string[] | undefined;
    
    /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement | undefined;
    
    /** related result from the same domain
related result from the same domain appears as a part of the main result snippet;
you can derive the related_result snippets as 'type': 'organic' results by setting the group_organic_results parameter to false in the POST request */

    related_result?: RelatedResult[] | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IOrganicSerpElementItem) {
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
            this.url = data["url"];
            this.cache_url = data["cache_url"];
            this.related_search_url = data["related_search_url"];
            this.breadcrumb = data["breadcrumb"];
            this.website_name = data["website_name"];
            this.is_image = data["is_image"];
            this.is_video = data["is_video"];
            this.is_featured_snippet = data["is_featured_snippet"];
            this.is_malicious = data["is_malicious"];
            this.is_web_story = data["is_web_story"];
            this.description = data["description"];
            this.pre_snippet = data["pre_snippet"];
            this.extended_snippet = data["extended_snippet"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(ImagesElement.fromJS(item));
                }
            }
            this.amp_version = data["amp_version"];
            this.rating = data["rating"] ? RatingInfo.fromJS(data["rating"]) : <any>undefined;
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.highlighted = data["highlighted"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.faq = data["faq"] ? FaqBox.fromJS(data["faq"]) : <any>undefined;
            this.extended_people_also_search = data["extended_people_also_search"];
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
            if (Array.isArray(data["related_result"])) {
                this.related_result = [];
                for (let item of data["related_result"]) {
                    this.related_result.push(RelatedResult.fromJS(item));
                }
            }
            this.timestamp = data["timestamp"];
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): OrganicSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new OrganicSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["url"] = this.url;
        data["cache_url"] = this.cache_url;
        data["related_search_url"] = this.related_search_url;
        data["breadcrumb"] = this.breadcrumb;
        data["website_name"] = this.website_name;
        data["is_image"] = this.is_image;
        data["is_video"] = this.is_video;
        data["is_featured_snippet"] = this.is_featured_snippet;
        data["is_malicious"] = this.is_malicious;
        data["is_web_story"] = this.is_web_story;
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
        data["rating"] = this.rating ? RatingInfo.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["highlighted"] = this.highlighted;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["faq"] = this.faq ? FaqBox.fromJS(this.faq)?.toJSON() : <any>undefined;
        data["extended_people_also_search"] = this.extended_people_also_search;
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        data["related_result"] = null;
        if (Array.isArray(this.related_result)) {
            data["related_result"] = [];
            for (let item of this.related_result) {
                if (item && typeof item.toJSON === "function") {
                    data["related_result"].push(item?.toJSON());
                }
            }
        }
        data["timestamp"] = this.timestamp;
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}