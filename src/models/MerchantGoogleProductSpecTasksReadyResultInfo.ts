import { ApiException, throwException } from "./ApiException"

export interface IMerchantGoogleProductSpecTasksReadyResultInfo   {
        
        /** task identifier of the completed task
unique task identifier in our system in the UUID format */
        id?: string | undefined
        
        /** search engine specified when setting the task */
        se?: string | undefined
        
        /** type of search engine
can take the following values: shopping_specifications */
        se_type?: string | undefined
        
        /** date when the task was posted (in the UTC format) */
        date_posted?: string | undefined
        
        /** user-defined task identifier */
        tag?: string | undefined
        
        /** URL for collecting the results of the Google Shopping Product Specifications Advanced task */
        endpoint_advanced?: string | undefined
        
        /** URL for collecting the results of the Google Shopping Product Specifications HTML task */
        endpoint_html?: string | undefined

    [key: string]: any;

    }

export class MerchantGoogleProductSpecTasksReadyResultInfo  implements IMerchantGoogleProductSpecTasksReadyResultInfo {
    
    /** task identifier of the completed task
unique task identifier in our system in the UUID format */

    id?: string | undefined;
    
    /** search engine specified when setting the task */

    se?: string | undefined;
    
    /** type of search engine
can take the following values: shopping_specifications */

    se_type?: string | undefined;
    
    /** date when the task was posted (in the UTC format) */

    date_posted?: string | undefined;
    
    /** user-defined task identifier */

    tag?: string | undefined;
    
    /** URL for collecting the results of the Google Shopping Product Specifications Advanced task */

    endpoint_advanced?: string | undefined;
    
    /** URL for collecting the results of the Google Shopping Product Specifications HTML task */

    endpoint_html?: string | undefined;

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductSpecTasksReadyResultInfo) {

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
            this.id = data["id"];
            this.se = data["se"];
            this.se_type = data["se_type"];
            this.date_posted = data["date_posted"];
            this.tag = data["tag"];
            this.endpoint_advanced = data["endpoint_advanced"];
            this.endpoint_html = data["endpoint_html"];
        }
    }

    static fromJS(data: any): MerchantGoogleProductSpecTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductSpecTasksReadyResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["se"] = this.se;
        data["se_type"] = this.se_type;
        data["date_posted"] = this.date_posted;
        data["tag"] = this.tag;
        data["endpoint_advanced"] = this.endpoint_advanced;
        data["endpoint_html"] = this.endpoint_html;
        return data;
    }
}