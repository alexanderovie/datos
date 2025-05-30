import { BaseYoutubeSerpElementItem, IBaseYoutubeSerpElementItem } from "./BaseYoutubeSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IYoutubeSubtitlesSerpElementItem  extends IBaseYoutubeSerpElementItem    {
        
        /** text translated in subtitles */
        text?: string | undefined
        
        /** the second subtitled text starts */
        start_time?: number | undefined
        
        /** the second subtitled text ends */
        end_time?: number | undefined
        
        /** duration of subtitles in seconds */
        duration_time?: number | undefined

    [key: string]: any;

    }

export class YoutubeSubtitlesSerpElementItem  extends BaseYoutubeSerpElementItem   implements IYoutubeSubtitlesSerpElementItem {
    
    /** text translated in subtitles */

    text?: string | undefined;
    
    /** the second subtitled text starts */

    start_time?: number | undefined;
    
    /** the second subtitled text ends */

    end_time?: number | undefined;
    
    /** duration of subtitles in seconds */

    duration_time?: number | undefined;

    [key: string]: any;


    constructor(data?: IYoutubeSubtitlesSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.text = data["text"];
            this.start_time = data["start_time"];
            this.end_time = data["end_time"];
            this.duration_time = data["duration_time"];
        }
    }

    static fromJS(data: any): YoutubeSubtitlesSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new YoutubeSubtitlesSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["text"] = this.text;
        data["start_time"] = this.start_time;
        data["end_time"] = this.end_time;
        data["duration_time"] = this.duration_time;
        return data;
    }
}