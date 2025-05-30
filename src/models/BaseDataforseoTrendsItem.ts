import { ApiException, throwException } from "./ApiException"

export interface IBaseDataforseoTrendsItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** the alignment of the element
can take the following values: 1, 2, 3, 4, etc. */
        position?: number | undefined
        
        /** relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array */
        keywords?: string[] | undefined

    [key: string]: any;

    }

export class BaseDataforseoTrendsItem  implements IBaseDataforseoTrendsItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** the alignment of the element
can take the following values: 1, 2, 3, 4, etc. */

    position?: number | undefined;
    
    /** relevant keywords
the data included in the dataforseo_trends_graph element is based on the keywords listed in this array */

    keywords?: string[] | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseDataforseoTrendsItem) {

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
            this.keywords = data["keywords"];
        }
    }

    static fromJS(data: any): BaseDataforseoTrendsItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "dataforseo_trends_graph") {

            const { DataforseoTrendsGraphElementItem } = require('./DataforseoTrendsGraphElementItem');
            let result = new DataforseoTrendsGraphElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "subregion_interests") {

            const { DataforseoTrendsSubregionInterestsElementItem } = require('./DataforseoTrendsSubregionInterestsElementItem');
            let result = new DataforseoTrendsSubregionInterestsElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "demography") {

            const { DataforseoTrendsDemographyElementItem } = require('./DataforseoTrendsDemographyElementItem');
            let result = new DataforseoTrendsDemographyElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseDataforseoTrendsItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["position"] = this.position;
        data["keywords"] = this.keywords;
        return data;
    }
}