import { ImagesElement, IImagesElement } from "./ImagesElement";
import { Table, ITable } from "./Table";
import { BaseDataforseoLabsSerpElementItem, IBaseDataforseoLabsSerpElementItem } from "./BaseDataforseoLabsSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IPeopleAlsoAskExpandedElementSerpElementItem  extends IBaseDataforseoLabsSerpElementItem    {
        
        /** the title of the featured snippets source page */
        featured_title?: string | undefined
        
        /** URL of element */
        url?: string | undefined
        
        /** domain where a link points */
        domain?: string | undefined
        
        /** title of the carousel item */
        title?: string | undefined
        
        /** description of the results element in SERP */
        description?: string | undefined
        
        /** images of the element */
        images?: ImagesElement[] | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** results table
if there are none, equals null */
        table?: Table | undefined

    [key: string]: any;

    }

export class PeopleAlsoAskExpandedElementSerpElementItem  extends BaseDataforseoLabsSerpElementItem   implements IPeopleAlsoAskExpandedElementSerpElementItem {
    
    /** the title of the featured snippets source page */

    featured_title?: string | undefined;
    
    /** URL of element */

    url?: string | undefined;
    
    /** domain where a link points */

    domain?: string | undefined;
    
    /** title of the carousel item */

    title?: string | undefined;
    
    /** description of the results element in SERP */

    description?: string | undefined;
    
    /** images of the element */

    images?: ImagesElement[] | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** results table
if there are none, equals null */

    table?: Table | undefined;

    [key: string]: any;


    constructor(data?: IPeopleAlsoAskExpandedElementSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.featured_title = data["featured_title"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.title = data["title"];
            this.description = data["description"];
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(ImagesElement.fromJS(item));
                }
            }
            this.timestamp = data["timestamp"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
        }
    }

    static fromJS(data: any): PeopleAlsoAskExpandedElementSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new PeopleAlsoAskExpandedElementSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["featured_title"] = this.featured_title;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["title"] = this.title;
        data["description"] = this.description;
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["timestamp"] = this.timestamp;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        return data;
    }
}