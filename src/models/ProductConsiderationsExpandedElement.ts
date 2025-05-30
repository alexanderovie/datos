import { AboutThisResultElement, IAboutThisResultElement } from "./AboutThisResultElement";
import { ApiException, throwException } from "./ApiException"

export interface IProductConsiderationsExpandedElement   {
        
        /** type of element */
        type?: string | undefined
        
        /** title of the carousel item */
        title?: string | undefined
        
        /** the title of the featured snippets source page */
        featured_title?: string | undefined
        
        /** breadcrumb of the Ad element in SERP */
        breadcrumb?: string | undefined
        
        /** text alongside the link title */
        snippet?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** URL of element */
        url?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** search queries related to the elment */
        related_searches?: string[] | undefined
        
        /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */
        about_this_result?: AboutThisResultElement | undefined

    [key: string]: any;

    }

export class ProductConsiderationsExpandedElement  implements IProductConsiderationsExpandedElement {
    
    /** type of element */

    type?: string | undefined;
    
    /** title of the carousel item */

    title?: string | undefined;
    
    /** the title of the featured snippets source page */

    featured_title?: string | undefined;
    
    /** breadcrumb of the Ad element in SERP */

    breadcrumb?: string | undefined;
    
    /** text alongside the link title */

    snippet?: string | undefined;
    
    /** domain where a link points */

    domain?: string | undefined;
    
    /** URL of element */

    url?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** search queries related to the elment */

    related_searches?: string[] | undefined;
    
    /** contains information from the ‘About this result’ panel
‘About this result’ panel provides additional context about why Google returned this result for the given query;
this feature appears after clicking on the three dots next to most results */

    about_this_result?: AboutThisResultElement | undefined;

    [key: string]: any;


    constructor(data?: IProductConsiderationsExpandedElement) {

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
            this.title = data["title"];
            this.featured_title = data["featured_title"];
            this.breadcrumb = data["breadcrumb"];
            this.snippet = data["snippet"];
            this.domain = data["domain"];
            this.url = data["url"];
            this.timestamp = data["timestamp"];
            this.related_searches = data["related_searches"];
            this.about_this_result = data["about_this_result"] ? AboutThisResultElement.fromJS(data["about_this_result"]) : <any>undefined;
        }
    }

    static fromJS(data: any): ProductConsiderationsExpandedElement {
        data = typeof data === 'object' ? data : {};


        let result = new ProductConsiderationsExpandedElement();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["title"] = this.title;
        data["featured_title"] = this.featured_title;
        data["breadcrumb"] = this.breadcrumb;
        data["snippet"] = this.snippet;
        data["domain"] = this.domain;
        data["url"] = this.url;
        data["timestamp"] = this.timestamp;
        data["related_searches"] = this.related_searches;
        data["about_this_result"] = this.about_this_result ? AboutThisResultElement.fromJS(this.about_this_result)?.toJSON() : <any>undefined;
        return data;
    }
}