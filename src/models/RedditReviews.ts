export interface IRedditReviews   {
        
        /** the name of the subreddit */
        subreddit?: string
        
        /** nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL */
        author_name?: string
        
        /** title of the subreddit post */
        title?: string
        
        /** URL to the subreddit post */
        permalink?: string
        
        /** number of subreddit members */
        subreddit_members?: number

    [key: string]: any;

    }

export class RedditReviews  implements IRedditReviews {
    
    /** the name of the subreddit */

    subreddit?: string;
    
    /** nickname of the author
nicknname of the user who published the post in the subreddit and shared the URL */

    author_name?: string;
    
    /** title of the subreddit post */

    title?: string;
    
    /** URL to the subreddit post */

    permalink?: string;
    
    /** number of subreddit members */

    subreddit_members?: number;

    [key: string]: any;


    constructor(data?: IRedditReviews) {

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
            this.subreddit = data["subreddit"];
            this.author_name = data["author_name"];
            this.title = data["title"];
            this.permalink = data["permalink"];
            this.subreddit_members = data["subreddit_members"];
        }
    }

    static fromJS(data: any): RedditReviews {
        data = typeof data === 'object' ? data : {};


        let result = new RedditReviews();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["subreddit"] = this.subreddit;
        data["author_name"] = this.author_name;
        data["title"] = this.title;
        data["permalink"] = this.permalink;
        data["subreddit_members"] = this.subreddit_members;
        return data;
    }
}