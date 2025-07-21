export interface IReviewResponseItemInfo   {
        
        /** the title of response */
        title?: string
        
        /** the content of response */
        text?: string
        
        /** language of content */
        language?: string
        
        /** response id */
        response_id?: string
        
        /** the time of publication */
        timestamp?: string

    [key: string]: any;

    }

export class ReviewResponseItemInfo  implements IReviewResponseItemInfo {
    
    /** the title of response */

    title?: string;
    
    /** the content of response */

    text?: string;
    
    /** language of content */

    language?: string;
    
    /** response id */

    response_id?: string;
    
    /** the time of publication */

    timestamp?: string;

    [key: string]: any;


    constructor(data?: IReviewResponseItemInfo) {

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
            this.title = data["title"];
            this.text = data["text"];
            this.language = data["language"];
            this.response_id = data["response_id"];
            this.timestamp = data["timestamp"];
        }
    }

    static fromJS(data: any): ReviewResponseItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new ReviewResponseItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["text"] = this.text;
        data["language"] = this.language;
        data["response_id"] = this.response_id;
        data["timestamp"] = this.timestamp;
        return data;
    }
}