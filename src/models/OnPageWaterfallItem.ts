import { WaterfallResourceInfo, IWaterfallResourceInfo } from "./WaterfallResourceInfo";

export interface IOnPageWaterfallItem   {
        
        /** URL of the page */
        page_url?: string
        
        /** Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds) */
        time_to_interactive?: number
        
        /** time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds) */
        dom_complete?: number
        
        /** time to connect to a server
the time it takes until the connection with a server is established (in milliseconds) */
        connection_time?: number
        
        /** time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds) */
        time_to_secure_connection?: number
        
        /** time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds) */
        request_sent_time?: number
        
        /** time to first byte (TTFB) in milliseconds */
        waiting_time?: number
        
        /** time it takes for a browser to receive a response (in milliseconds) */
        download_time?: number
        
        /** total time it takes until a browser receives a complete response from a server (in milliseconds) */
        duration_time?: number
        
        /** time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page */
        fetch_start?: number
        
        /** time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page */
        fetch_end?: number
        
        /** resource-specific timing
contains separate arrays with timing for each resource found on the page */
        resources?: WaterfallResourceInfo[]

    [key: string]: any;

    }

export class OnPageWaterfallItem  implements IOnPageWaterfallItem {
    
    /** URL of the page */

    page_url?: string;
    
    /** Time To Interactive (TTI) metric
the time it takes until the user can interact with a page (in milliseconds) */

    time_to_interactive?: number;
    
    /** time to load resources
the time it takes until the page and all of its subresources are downloaded (in milliseconds) */

    dom_complete?: number;
    
    /** time to connect to a server
the time it takes until the connection with a server is established (in milliseconds) */

    connection_time?: number;
    
    /** time to establish a secure connection
the time it takes until the secure connection with a server is established (in milliseconds) */

    time_to_secure_connection?: number;
    
    /** time to send a request to a server
the time it takes until the request to a server is sent (in milliseconds) */

    request_sent_time?: number;
    
    /** time to first byte (TTFB) in milliseconds */

    waiting_time?: number;
    
    /** time it takes for a browser to receive a response (in milliseconds) */

    download_time?: number;
    
    /** total time it takes until a browser receives a complete response from a server (in milliseconds) */

    duration_time?: number;
    
    /** time to start downloading the HTML resource
the amount of time the browser needs to start downloading a page */

    fetch_start?: number;
    
    /** time to complete downloading the HTML resource
the amount of time the browser needs to complete downloading a page */

    fetch_end?: number;
    
    /** resource-specific timing
contains separate arrays with timing for each resource found on the page */

    resources?: WaterfallResourceInfo[];

    [key: string]: any;


    constructor(data?: IOnPageWaterfallItem) {

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
            this.page_url = data["page_url"];
            this.time_to_interactive = data["time_to_interactive"];
            this.dom_complete = data["dom_complete"];
            this.connection_time = data["connection_time"];
            this.time_to_secure_connection = data["time_to_secure_connection"];
            this.request_sent_time = data["request_sent_time"];
            this.waiting_time = data["waiting_time"];
            this.download_time = data["download_time"];
            this.duration_time = data["duration_time"];
            this.fetch_start = data["fetch_start"];
            this.fetch_end = data["fetch_end"];
            if (Array.isArray(data["resources"])) {
                this.resources = [];
                for (let item of data["resources"]) {
                    this.resources.push(WaterfallResourceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageWaterfallItem {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageWaterfallItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["page_url"] = this.page_url;
        data["time_to_interactive"] = this.time_to_interactive;
        data["dom_complete"] = this.dom_complete;
        data["connection_time"] = this.connection_time;
        data["time_to_secure_connection"] = this.time_to_secure_connection;
        data["request_sent_time"] = this.request_sent_time;
        data["waiting_time"] = this.waiting_time;
        data["download_time"] = this.download_time;
        data["duration_time"] = this.duration_time;
        data["fetch_start"] = this.fetch_start;
        data["fetch_end"] = this.fetch_end;
        data["resources"] = null;
        if (Array.isArray(this.resources)) {
            data["resources"] = [];
            for (let item of this.resources) {
                if (item && typeof item.toJSON === "function") {
                    data["resources"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}