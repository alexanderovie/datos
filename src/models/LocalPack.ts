import { RatingElement, IRatingElement } from "./RatingElement";

export interface ILocalPack   {
        
        /** type of element */
        type?: string
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string
        
        /** the XPath of the element */
        xpath?: string
        
        /** title of the element */
        title?: string
        
        /** description of the results element in SERP */
        description?: string
        
        /** domain in SERP */
        domain?: string
        
        /** phone number */
        phone?: string
        
        /** search URL with refinement parameters */
        url?: string
        
        /** indicates whether the element is an ad */
        is_paid?: boolean
        
        /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */
        rating?: RatingElement
        
        /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */
        cid?: string
        
        /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
in this case, will equal null */
        rectangle?: any

    [key: string]: any;

    }

export class LocalPack  implements ILocalPack {
    
    /** type of element */

    type?: string;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string;
    
    /** the XPath of the element */

    xpath?: string;
    
    /** title of the element */

    title?: string;
    
    /** description of the results element in SERP */

    description?: string;
    
    /** domain in SERP */

    domain?: string;
    
    /** phone number */

    phone?: string;
    
    /** search URL with refinement parameters */

    url?: string;
    
    /** indicates whether the element is an ad */

    is_paid?: boolean;
    
    /** the item’s rating 
the popularity rate based on reviews and displayed in SERP */

    rating?: RatingElement;
    
    /** google-defined client id
unique id of a local establishment;
can be used with Google Reviews API to get a full list of reviews */

    cid?: string;
    
    /** rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
in this case, will equal null */

    rectangle?: any;

    [key: string]: any;


    constructor(data?: ILocalPack) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            this.position = data["position"];
            this.xpath = data["xpath"];
            this.title = data["title"];
            this.description = data["description"];
            this.domain = data["domain"];
            this.phone = data["phone"];
            this.url = data["url"];
            this.is_paid = data["is_paid"];
            this.rating = data["rating"] ? RatingElement.fromJS(data["rating"]) : <any>undefined;
            this.cid = data["cid"];
            this.rectangle = data["rectangle"];
        }
    }

    static fromJS(data: any): LocalPack {
        data = typeof data === 'object' ? data : {};


        let result = new LocalPack();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["position"] = this.position;
        data["xpath"] = this.xpath;
        data["title"] = this.title;
        data["description"] = this.description;
        data["domain"] = this.domain;
        data["phone"] = this.phone;
        data["url"] = this.url;
        data["is_paid"] = this.is_paid;
        data["rating"] = this.rating ? RatingElement.fromJS(this.rating)?.toJSON() : <any>undefined;
        data["cid"] = this.cid;
        data["rectangle"] = this.rectangle;
        return data;
    }
}