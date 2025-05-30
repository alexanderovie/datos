import { ApiException, throwException } from "./ApiException"

export interface IBaseGoogleTrendsItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc. */
        position?: number | undefined
        
        /** title of the element in Google Trends */
        title?: string | undefined
        
        /** relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array */
        keywords?: string[] | undefined

    [key: string]: any;

    }

export class BaseGoogleTrendsItem  implements IBaseGoogleTrendsItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** the alignment of the element in Google Trends
can take the following values: 1, 2, 3, 4, etc. */

    position?: number | undefined;
    
    /** title of the element in Google Trends */

    title?: string | undefined;
    
    /** relevant keywords
the data included in the google_trends_graph element is based on the keywords listed in this array */

    keywords?: string[] | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseGoogleTrendsItem) {

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
            this.title = data["title"];
            this.keywords = data["keywords"];
        }
    }

    static fromJS(data: any): BaseGoogleTrendsItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_trends_graph") {

            const { GoogleTrendsGraphElementItem } = require('./GoogleTrendsGraphElementItem');
            let result = new GoogleTrendsGraphElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_trends_map") {

            const { GoogleTrendsMapElementItem } = require('./GoogleTrendsMapElementItem');
            let result = new GoogleTrendsMapElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_trends_queries_list") {

            const { GoogleTrendsQueriesListElementItem } = require('./GoogleTrendsQueriesListElementItem');
            let result = new GoogleTrendsQueriesListElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_trends_topics_list") {

            const { GoogleTrendsTopicsListElementItem } = require('./GoogleTrendsTopicsListElementItem');
            let result = new GoogleTrendsTopicsListElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGoogleTrendsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["title"] = this.title;
        data["keywords"] = this.keywords;
        return data;
    }
}