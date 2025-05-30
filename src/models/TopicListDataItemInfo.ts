import { ApiException, throwException } from "./ApiException"

export interface ITopicListDataItemInfo   {
        
        /** unique topic identifier in Google Trends */
        topic_id?: string | undefined
        
        /** title of the topic */
        topic_title?: string | undefined
        
        /** type of the topic
represents the general type of the topic */
        topic_type?: string | undefined
        
        /** search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on. */
        value?: number | undefined

    [key: string]: any;

    }

export class TopicListDataItemInfo  implements ITopicListDataItemInfo {
    
    /** unique topic identifier in Google Trends */

    topic_id?: string | undefined;
    
    /** title of the topic */

    topic_title?: string | undefined;
    
    /** type of the topic
represents the general type of the topic */

    topic_type?: string | undefined;
    
    /** search term popularity
represents the popularity of the topic. Scoring is on a relative scale where a value of 100 is the most commonly searched topic and a value of 50 is a topic searched half as often as the most popular term, and so on. */

    value?: number | undefined;

    [key: string]: any;


    constructor(data?: ITopicListDataItemInfo) {

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
            this.topic_id = data["topic_id"];
            this.topic_title = data["topic_title"];
            this.topic_type = data["topic_type"];
            this.value = data["value"];
        }
    }

    static fromJS(data: any): TopicListDataItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new TopicListDataItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["topic_id"] = this.topic_id;
        data["topic_title"] = this.topic_title;
        data["topic_type"] = this.topic_type;
        data["value"] = this.value;
        return data;
    }
}