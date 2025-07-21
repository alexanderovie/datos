export interface IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo   {
        
        /** charge type
can take the following values:
per_result – charge for every row in the result array
per_request – charge for a GET or POST request */
        cost_type?: string
        
        /** cost, USD */
        cost?: number

    [key: string]: any;

    }

export class AppendixPriorityTasksReadyKeywordsDataPriceDataInfo  implements IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo {
    
    /** charge type
can take the following values:
per_result – charge for every row in the result array
per_request – charge for a GET or POST request */

    cost_type?: string;
    
    /** cost, USD */

    cost?: number;

    [key: string]: any;


    constructor(data?: IAppendixPriorityTasksReadyKeywordsDataPriceDataInfo) {

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
            this.cost_type = data["cost_type"];
            this.cost = data["cost"];
        }
    }

    static fromJS(data: any): AppendixPriorityTasksReadyKeywordsDataPriceDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixPriorityTasksReadyKeywordsDataPriceDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["cost_type"] = this.cost_type;
        data["cost"] = this.cost;
        return data;
    }
}