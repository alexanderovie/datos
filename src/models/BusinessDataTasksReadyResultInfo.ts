import { ApiException, throwException } from "./ApiException"

export interface IBusinessDataTasksReadyResultInfo   {
        
        /** task identifier of the completed task
unique task identifier in our system in the UUID format */
        id?: string | undefined
        
        /** search engine specified when setting the task
can take the following values: tripadvisor */
        se?: string | undefined
        
        /** search engine type */
        se_type?: string | undefined
        
        /** date when the task was posted (in the UTC format) */
        date_posted?: string | undefined
        
        /** user-defined task identifier */
        tag?: string | undefined
        
        /** URL for collecting the results of the task */
        endpoint?: string | undefined

    [key: string]: any;

    }

export class BusinessDataTasksReadyResultInfo  implements IBusinessDataTasksReadyResultInfo {
    
    /** task identifier of the completed task
unique task identifier in our system in the UUID format */

    id?: string | undefined;
    
    /** search engine specified when setting the task
can take the following values: tripadvisor */

    se?: string | undefined;
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** date when the task was posted (in the UTC format) */

    date_posted?: string | undefined;
    
    /** user-defined task identifier */

    tag?: string | undefined;
    
    /** URL for collecting the results of the task */

    endpoint?: string | undefined;

    [key: string]: any;


    constructor(data?: IBusinessDataTasksReadyResultInfo) {

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
            this.endpoint = data["endpoint"];
        }
    }

    static fromJS(data: any): BusinessDataTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new BusinessDataTasksReadyResultInfo();
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
        data["endpoint"] = this.endpoint;
        return data;
    }
}