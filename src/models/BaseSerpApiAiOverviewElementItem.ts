import { LinkElement, ILinkElement } from "./LinkElement";
import { AiModeImagesElement, IAiModeImagesElement } from "./AiModeImagesElement";
import { AiAiOverviewReferenceInfo, IAiAiOverviewReferenceInfo } from "./AiAiOverviewReferenceInfo";
import { AiOverviewExpandedComponent, IAiOverviewExpandedComponent } from "./AiOverviewExpandedComponent";
import { Table, ITable } from "./Table";

export interface IBaseSerpApiAiOverviewElementItem   {
        
        /** type of element */
        type?: string
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string

    [key: string]: any;

    }

export class BaseSerpApiAiOverviewElementItem  implements IBaseSerpApiAiOverviewElementItem {
    
    /** type of element */

    type?: string;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiAiOverviewElementItem) {

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
            this.position = data["position"];
        }
    }

    static fromJS(data: any): BaseSerpApiAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "ai_overview_element") {

            let result = new SerpApiAiOverviewElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_expanded_element") {

            let result = new SerpApiAiOverviewExpandedElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_video_element") {

            let result = new SerpApiAiOverviewVideoElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_table_element") {

            let result = new SerpApiAiOverviewTableElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiAiOverviewElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        return data;
    }
}

 
export interface ISerpApiAiOverviewElementItem  extends IBaseSerpApiAiOverviewElementItem    {
        
        /** title of a given link element */
        title?: string
        
        /** reference text
text snippet from the page that was used to generate the ai_overview_element */
        text?: string
        
        /** text of the component in the markdwon format */
        markdown?: string
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[]
        
        /** images of the element
if there are none, equals null */
        images?: AiModeImagesElement[]
        
        /** additional references relevant to the item
includes references to webpages that may have been used to generate the product_considerations_ai_overview_expanded_element */
        references?: AiAiOverviewReferenceInfo[]

    [key: string]: any;

    }

export class SerpApiAiOverviewElementItem  extends BaseSerpApiAiOverviewElementItem   implements ISerpApiAiOverviewElementItem {
    
    /** title of a given link element */

    title?: string;
    
    /** reference text
text snippet from the page that was used to generate the ai_overview_element */

    text?: string;
    
    /** text of the component in the markdwon format */

    markdown?: string;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[];
    
    /** images of the element
if there are none, equals null */

    images?: AiModeImagesElement[];
    
    /** additional references relevant to the item
includes references to webpages that may have been used to generate the product_considerations_ai_overview_expanded_element */

    references?: AiAiOverviewReferenceInfo[];

    [key: string]: any;


    constructor(data?: ISerpApiAiOverviewElementItem) {
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
            this.text = data["text"];
            this.markdown = data["markdown"];
            if (Array.isArray(data["links"])) {
                this.links = [];
                for (let item of data["links"]) {
                    this.links.push(LinkElement.fromJS(item));
                }
            }
            if (Array.isArray(data["images"])) {
                this.images = [];
                for (let item of data["images"]) {
                    this.images.push(AiModeImagesElement.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiOverviewElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["text"] = this.text;
        data["markdown"] = this.markdown;
        data["links"] = null;
        if (Array.isArray(this.links)) {
            data["links"] = [];
            for (let item of this.links) {
                if (item && typeof item.toJSON === "function") {
                    data["links"].push(item?.toJSON());
                }
            }
        }
        data["images"] = null;
        if (Array.isArray(this.images)) {
            data["images"] = [];
            for (let item of this.images) {
                if (item && typeof item.toJSON === "function") {
                    data["images"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiAiOverviewExpandedElementItem  extends IBaseSerpApiAiOverviewElementItem    {
        
        /** title of the result in SERP */
        title?: string
        
        /** text or description of the element in SERP */
        text?: string
        
        /** array of components of the element */
        components?: AiOverviewExpandedComponent[]
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiAiOverviewReferenceInfo[]

    [key: string]: any;

    }

export class SerpApiAiOverviewExpandedElementItem  extends BaseSerpApiAiOverviewElementItem   implements ISerpApiAiOverviewExpandedElementItem {
    
    /** title of the result in SERP */

    title?: string;
    
    /** text or description of the element in SERP */

    text?: string;
    
    /** array of components of the element */

    components?: AiOverviewExpandedComponent[];
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiAiOverviewReferenceInfo[];

    [key: string]: any;


    constructor(data?: ISerpApiAiOverviewExpandedElementItem) {
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
            this.text = data["text"];
            if (Array.isArray(data["components"])) {
                this.components = [];
                for (let item of data["components"]) {
                    this.components.push(AiOverviewExpandedComponent.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiAiOverviewExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiOverviewExpandedElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["text"] = this.text;
        data["components"] = null;
        if (Array.isArray(this.components)) {
            data["components"] = [];
            for (let item of this.components) {
                if (item && typeof item.toJSON === "function") {
                    data["components"].push(item?.toJSON());
                }
            }
        }
        data["references"] = null;
        if (Array.isArray(this.references)) {
            data["references"] = [];
            for (let item of this.references) {
                if (item && typeof item.toJSON === "function") {
                    data["references"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}

 
export interface ISerpApiAiOverviewVideoElementItem  extends IBaseSerpApiAiOverviewElementItem    {
        
        /** reference page title */
        title?: string
        
        /** additional information for the video */
        snippet?: string
        
        /** original URL of the featured image
the URL leading to the image on the original resource */
        url?: string
        
        /** domain in SERP */
        domain?: string
        
        /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */
        image_url?: string
        
        /** source of the element */
        source?: string
        
        /** date and time
in the yyyy-mm-ddThh:mm:ss ISO 8601 format
indicates the date and time for which the value field provides previous close price
for example, 'date': '2020-10-28T15:45:00' and 'value': 11080.2857 mean the stock was traded at 11080.2857 on Oct. 27, 2020 at 15:45:00 */
        date?: string
        
        /** date and time when the video was published or indexed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string

    [key: string]: any;

    }

export class SerpApiAiOverviewVideoElementItem  extends BaseSerpApiAiOverviewElementItem   implements ISerpApiAiOverviewVideoElementItem {
    
    /** reference page title */

    title?: string;
    
    /** additional information for the video */

    snippet?: string;
    
    /** original URL of the featured image
the URL leading to the image on the original resource */

    url?: string;
    
    /** domain in SERP */

    domain?: string;
    
    /** URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available) */

    image_url?: string;
    
    /** source of the element */

    source?: string;
    
    /** date and time
in the yyyy-mm-ddThh:mm:ss ISO 8601 format
indicates the date and time for which the value field provides previous close price
for example, 'date': '2020-10-28T15:45:00' and 'value': 11080.2857 mean the stock was traded at 11080.2857 on Oct. 27, 2020 at 15:45:00 */

    date?: string;
    
    /** date and time when the video was published or indexed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string;

    [key: string]: any;


    constructor(data?: ISerpApiAiOverviewVideoElementItem) {
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
            this.snippet = data["snippet"];
            this.url = data["url"];
            this.domain = data["domain"];
            this.image_url = data["image_url"];
            this.source = data["source"];
            this.date = data["date"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): SerpApiAiOverviewVideoElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiOverviewVideoElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["snippet"] = this.snippet;
        data["url"] = this.url;
        data["domain"] = this.domain;
        data["image_url"] = this.image_url;
        data["source"] = this.source;
        data["date"] = this.date;
        data["timestamp"] = this.timestamp;
        return data;
    }
}

 
export interface ISerpApiAiOverviewTableElementItem  extends IBaseSerpApiAiOverviewElementItem    {
        
        /** content of the element in markdown format */
        markdown?: string
        
        /** results table
if there are none, equals null */
        table?: Table

    [key: string]: any;

    }

export class SerpApiAiOverviewTableElementItem  extends BaseSerpApiAiOverviewElementItem   implements ISerpApiAiOverviewTableElementItem {
    
    /** content of the element in markdown format */

    markdown?: string;
    
    /** results table
if there are none, equals null */

    table?: Table;

    [key: string]: any;


    constructor(data?: ISerpApiAiOverviewTableElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.markdown = data["markdown"];
            this.table = data["table"] ? Table.fromJS(data["table"]) : <any>undefined;
        }
    }

    static fromJS(data: any): SerpApiAiOverviewTableElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiAiOverviewTableElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["markdown"] = this.markdown;
        data["table"] = this.table ? Table.fromJS(this.table)?.toJSON() : <any>undefined;
        return data;
    }
}