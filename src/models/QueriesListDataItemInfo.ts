export interface IQueriesListDataItemInfo   {
        
        /** related query */
        query?: string | undefined
        
        /** search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on. */
        value?: number | undefined

    [key: string]: any;

    }

export class QueriesListDataItemInfo  implements IQueriesListDataItemInfo {
    
    /** related query */

    query?: string | undefined;
    
    /** search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on. */

    value?: number | undefined;

    [key: string]: any;


    constructor(data?: IQueriesListDataItemInfo) {

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
            this.query = data["query"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): QueriesListDataItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new QueriesListDataItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["query"] = this.query;
        data["value"] = this.value;
        return data;
    }
}