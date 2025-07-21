export interface IKeywordsDataIdListResultInfo   {
        
        /** id of the task */
        id?: string
        
        /** URL of the task
URL you used for making an API call */
        url?: string
        
        /** date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00 */
        datetime_posted?: string
        
        /** date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00 */
        datetime_done?: string
        
        /** informational message of the task
you can find the full list of general informational messages here */
        status?: string
        
        /** cost of the task, USD */
        cost?: number
        
        /** contains parameters you specified in the POST request */
        metadata?: { [key: string]: any; }

    [key: string]: any;

    }

export class KeywordsDataIdListResultInfo  implements IKeywordsDataIdListResultInfo {
    
    /** id of the task */

    id?: string;
    
    /** URL of the task
URL you used for making an API call */

    url?: string;
    
    /** date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00 */

    datetime_posted?: string;
    
    /** date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00 */

    datetime_done?: string;
    
    /** informational message of the task
you can find the full list of general informational messages here */

    status?: string;
    
    /** cost of the task, USD */

    cost?: number;
    
    /** contains parameters you specified in the POST request */

    metadata?: { [key: string]: any; };

    [key: string]: any;


    constructor(data?: IKeywordsDataIdListResultInfo) {

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
            this.url = data["url"];
            this.datetime_posted = data["datetime_posted"];
            this.datetime_done = data["datetime_done"];
            this.status = data["status"];
            this.cost = data["cost"];
            this.metadata = data["metadata"];
        }
    }

    static fromJS(data: any): KeywordsDataIdListResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataIdListResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["id"] = this.id;
        data["url"] = this.url;
        data["datetime_posted"] = this.datetime_posted;
        data["datetime_done"] = this.datetime_done;
        data["status"] = this.status;
        data["cost"] = this.cost;
        data["metadata"] = this.metadata;
        return data;
    }
}