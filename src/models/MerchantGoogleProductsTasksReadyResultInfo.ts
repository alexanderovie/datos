export interface IMerchantGoogleProductsTasksReadyResultInfo   {
        
        /** task identifier of the completed task
unique task identifier in our system in the UUID format */
        id?: string
        
        /** search engine specified when setting the task */
        se?: string
        
        /** type of search engine
example: products */
        se_type?: string
        
        /** date when the task was posted (in the UTC format) */
        date_posted?: string
        
        /** user-defined task identifier */
        tag?: string
        
        /** URL for collecting the results of Google Shopping Products Advanced task */
        endpoint_advanced?: string
        
        /** URL for collecting the results of Google Shopping Products HTML task */
        endpoint_html?: string

    [key: string]: any;

    }

export class MerchantGoogleProductsTasksReadyResultInfo  implements IMerchantGoogleProductsTasksReadyResultInfo {
    
    /** task identifier of the completed task
unique task identifier in our system in the UUID format */

    id?: string;
    
    /** search engine specified when setting the task */

    se?: string;
    
    /** type of search engine
example: products */

    se_type?: string;
    
    /** date when the task was posted (in the UTC format) */

    date_posted?: string;
    
    /** user-defined task identifier */

    tag?: string;
    
    /** URL for collecting the results of Google Shopping Products Advanced task */

    endpoint_advanced?: string;
    
    /** URL for collecting the results of Google Shopping Products HTML task */

    endpoint_html?: string;

    [key: string]: any;


    constructor(data?: IMerchantGoogleProductsTasksReadyResultInfo) {

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

    static fromJS(data: any): MerchantGoogleProductsTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new MerchantGoogleProductsTasksReadyResultInfo();
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