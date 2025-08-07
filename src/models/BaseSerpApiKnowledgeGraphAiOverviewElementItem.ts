import { LinkElement, ILinkElement } from "./LinkElement";
import { AiModeImagesElementInfo, IAiModeImagesElementInfo } from "./AiModeImagesElementInfo";
import { AiModeAiOverviewReferenceInfo, IAiModeAiOverviewReferenceInfo } from "./AiModeAiOverviewReferenceInfo";
import { AiOverviewExpandedComponent, IAiOverviewExpandedComponent } from "./AiOverviewExpandedComponent";
import { Table, ITable } from "./Table";


export interface IBaseSerpApiKnowledgeGraphAiOverviewElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element in SERP
can take the following values:
left, right */
        position?: string | undefined

    [key: string]: any;

    }

export class BaseSerpApiKnowledgeGraphAiOverviewElementItem  implements IBaseSerpApiKnowledgeGraphAiOverviewElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** the alignment of the element in SERP
can take the following values:
left, right */

    position?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseSerpApiKnowledgeGraphAiOverviewElementItem) {

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

    static fromJS(data: any): BaseSerpApiKnowledgeGraphAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "ai_overview_element") {

            let result = new SerpApiKnowledgeGraphAiOverviewElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_expanded_element") {

            let result = new SerpApiKnowledgeGraphAiOverviewExpandedElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_video_element") {

            let result = new SerpApiKnowledgeGraphAiOverviewVideoElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ai_overview_table_element") {

            let result = new SerpApiKnowledgeGraphAiOverviewTableElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseSerpApiKnowledgeGraphAiOverviewElementItem();
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

 
export interface ISerpApiKnowledgeGraphAiOverviewElementItem  extends IBaseSerpApiKnowledgeGraphAiOverviewElementItem    {
        
        /** title of the element */
        title?: string | undefined
        
        /** additional text of the element in SERP */
        text?: string | undefined
        
        /** content of the element in markdown format */
        markdown?: string | undefined
        
        /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */
        links?: LinkElement[] | undefined
        
        /** images of the element */
        images?: AiModeImagesElementInfo[] | undefined
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphAiOverviewElementItem  extends BaseSerpApiKnowledgeGraphAiOverviewElementItem   implements ISerpApiKnowledgeGraphAiOverviewElementItem {
    
    /** title of the element */

    title?: string | undefined;
    
    /** additional text of the element in SERP */

    text?: string | undefined;
    
    /** content of the element in markdown format */

    markdown?: string | undefined;
    
    /** sitelinks
the links shown below some of Google’s search results
if there are none, equals null */

    links?: LinkElement[] | undefined;
    
    /** images of the element */

    images?: AiModeImagesElementInfo[] | undefined;
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphAiOverviewElementItem) {
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
                    this.images.push(AiModeImagesElementInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["references"])) {
                this.references = [];
                for (let item of data["references"]) {
                    this.references.push(AiModeAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiKnowledgeGraphAiOverviewElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphAiOverviewElementItem();
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

 
export interface ISerpApiKnowledgeGraphAiOverviewExpandedElementItem  extends IBaseSerpApiKnowledgeGraphAiOverviewElementItem    {
        
        /** title of the element */
        title?: string | undefined
        
        /** additional text of the element in SERP */
        text?: string | undefined
        
        /** array of components of the element */
        components?: AiOverviewExpandedComponent[] | undefined
        
        /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */
        references?: AiModeAiOverviewReferenceInfo[] | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphAiOverviewExpandedElementItem  extends BaseSerpApiKnowledgeGraphAiOverviewElementItem   implements ISerpApiKnowledgeGraphAiOverviewExpandedElementItem {
    
    /** title of the element */

    title?: string | undefined;
    
    /** additional text of the element in SERP */

    text?: string | undefined;
    
    /** array of components of the element */

    components?: AiOverviewExpandedComponent[] | undefined;
    
    /** references relevant to the element
includes references to webpages that were used to generate the ai_overview_element */

    references?: AiModeAiOverviewReferenceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphAiOverviewExpandedElementItem) {
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
                    this.references.push(AiModeAiOverviewReferenceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): SerpApiKnowledgeGraphAiOverviewExpandedElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphAiOverviewExpandedElementItem();
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

 
export interface ISerpApiKnowledgeGraphAiOverviewVideoElementItem  extends IBaseSerpApiKnowledgeGraphAiOverviewElementItem    {
        
        /** title of the element */
        title?: string | undefined
        
        /** additional information for the video */
        snippet?: string | undefined
        
        /** relevant URL */
        url?: string | undefined
        
        /** domain name of the reference */
        domain?: string | undefined
        
        /** URL of the image */
        image_url?: string | undefined
        
        /** reference source name or title */
        source?: string | undefined
        
        /** date when the video was published or indexed
example:
Apr 26, 2024 */
        date?: string | undefined
        
        /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphAiOverviewVideoElementItem  extends BaseSerpApiKnowledgeGraphAiOverviewElementItem   implements ISerpApiKnowledgeGraphAiOverviewVideoElementItem {
    
    /** title of the element */

    title?: string | undefined;
    
    /** additional information for the video */

    snippet?: string | undefined;
    
    /** relevant URL */

    url?: string | undefined;
    
    /** domain name of the reference */

    domain?: string | undefined;
    
    /** URL of the image */

    image_url?: string | undefined;
    
    /** reference source name or title */

    source?: string | undefined;
    
    /** date when the video was published or indexed
example:
Apr 26, 2024 */

    date?: string | undefined;
    
    /** date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphAiOverviewVideoElementItem) {
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

    static fromJS(data: any): SerpApiKnowledgeGraphAiOverviewVideoElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphAiOverviewVideoElementItem();
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

 
export interface ISerpApiKnowledgeGraphAiOverviewTableElementItem  extends IBaseSerpApiKnowledgeGraphAiOverviewElementItem    {
        
        /** content of the element in markdown format */
        markdown?: string | undefined
        
        /** table element */
        table?: Table | undefined

    [key: string]: any;

    }

export class SerpApiKnowledgeGraphAiOverviewTableElementItem  extends BaseSerpApiKnowledgeGraphAiOverviewElementItem   implements ISerpApiKnowledgeGraphAiOverviewTableElementItem {
    
    /** content of the element in markdown format */

    markdown?: string | undefined;
    
    /** table element */

    table?: Table | undefined;

    [key: string]: any;


    constructor(data?: ISerpApiKnowledgeGraphAiOverviewTableElementItem) {
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

    static fromJS(data: any): SerpApiKnowledgeGraphAiOverviewTableElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new SerpApiKnowledgeGraphAiOverviewTableElementItem();
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