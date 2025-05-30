import { LinkElement, ILinkElement } from "./LinkElement";
import { Rectangle, IRectangle } from "./Rectangle";
import { BaseSerpElementItem, IBaseSerpElementItem } from "./BaseSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IDictionarySerpElementItem  extends IBaseSerpElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** relevant URL of the Ad element in SERP */
        url?: string | undefined
        
        /** domain in SERP */
        domain?: string | undefined
        
        /** breadcrumb of the Ad element in SERP */
        breadcrumb?: string | undefined
        
        /** keyword highlighted in the result */
        keyword?: string | undefined
        
        /** snippet of the element */
        snippet?: string | undefined
        
        /** description of the results element in SERP */
        text?: string | undefined
        
        /** sitelinks
the links shown below some of search results
if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null */
        rectangle?: Rectangle | undefined

    [key: string]: any;

    }

export class DictionarySerpElementItem  extends BaseSerpElementItem   implements IDictionarySerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** relevant URL of the Ad element in SERP */

    url?: string | undefined;
    
    /** domain in SERP */

    domain?: string | undefined;
    
    /** breadcrumb of the Ad element in SERP */

    breadcrumb?: string | undefined;
    
    /** keyword highlighted in the result */

    keyword?: string | undefined;
    
    /** snippet of the element */

    snippet?: string | undefined;
    
    /** description of the results element in SERP */

    text?: string | undefined;
    
    /** sitelinks
the links shown below some of search results
if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null */

    rectangle?: Rectangle | undefined;

    [key: string]: any;


    constructor(data?: IDictionarySerpElementItem) {
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
            this.domain = data["domain"];
            this.breadcrumb = data["breadcrumb"];
            this.keyword = data["keyword"];
            this.snippet = data["snippet"];
            this.text = data["text"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            this.rectangle = data["rectangle"] ? Rectangle.fromJS(data["rectangle"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DictionarySerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new DictionarySerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["breadcrumb"] = this.breadcrumb;
        data["keyword"] = this.keyword;
        data["snippet"] = this.snippet;
        data["text"] = this.text;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["rectangle"] = this.rectangle ? Rectangle.fromJS(this.rectangle)?.toJSON() : <any>undefined;
        return data;
    }
}