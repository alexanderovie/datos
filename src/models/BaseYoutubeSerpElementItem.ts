import { ApiException, throwException } from "./ApiException"

export interface IBaseYoutubeSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined

    [key: string]: any;

    }

export class BaseYoutubeSerpElementItem  implements IBaseYoutubeSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP for the target domain
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseYoutubeSerpElementItem) {

    if (data) {
        for (var property in data) {
            if (data.hasOwnProperty(property))
                (<any>this)[property] = (<any>data)[property];
        }
    }

    this.discriminator = "BaseSerpElementItem";

    }

    init(data?: any) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.type = data["type"];
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
        }
    }

    static fromJS(data: any): BaseYoutubeSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "youtube_video_info") {

            const { YoutubeVideoInfoSerpElementItem } = require('./YoutubeVideoInfoSerpElementItem');
            let result = new YoutubeVideoInfoSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "youtube_subtitles") {

            const { YoutubeSubtitlesSerpElementItem } = require('./YoutubeSubtitlesSerpElementItem');
            let result = new YoutubeSubtitlesSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "youtube_comment") {

            const { YoutubeCommentSerpElementItem } = require('./YoutubeCommentSerpElementItem');
            let result = new YoutubeCommentSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseYoutubeSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        return data;
    }
}