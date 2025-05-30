import { ApiException, throwException } from "./ApiException"

export interface IKeywordsDataBingAudienceEstimationTasksReadyResultInfo   {
        
        /** task identifier of the completed task
unique task identifier in our system in the UUID format */
        id?: string | undefined
        
        /** search engine specified when setting the task */
        se?: string | undefined
        
        /** type of the task */
        function?: string | undefined
        
        /** date when the task was posted (in the UTC format) */
        date_posted?: string | undefined
        
        /** user-defined task identifier */
        tag?: string | undefined
        
        /** URL for collecting the results of the task */
        endpoint?: string | undefined

    [key: string]: any;

    }

export class KeywordsDataBingAudienceEstimationTasksReadyResultInfo  implements IKeywordsDataBingAudienceEstimationTasksReadyResultInfo {
    
    /** task identifier of the completed task
unique task identifier in our system in the UUID format */

    id?: string | undefined;
    
    /** search engine specified when setting the task */

    se?: string | undefined;
    
    /** type of the task */

    function?: string | undefined;
    
    /** date when the task was posted (in the UTC format) */

    date_posted?: string | undefined;
    
    /** user-defined task identifier */

    tag?: string | undefined;
    
    /** URL for collecting the results of the task */

    endpoint?: string | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingAudienceEstimationTasksReadyResultInfo) {

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
            this.function = data["function"];
            this.date_posted = data["date_posted"];
            this.tag = data["tag"];
            this.endpoint = data["endpoint"];
        }
    }

    static fromJS(data: any): KeywordsDataBingAudienceEstimationTasksReadyResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingAudienceEstimationTasksReadyResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["se"] = this.se;
        data["function"] = this.function;
        data["date_posted"] = this.date_posted;
        data["tag"] = this.tag;
        data["endpoint"] = this.endpoint;
        return data;
    }
}