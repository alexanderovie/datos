import { BaseGoogleImagesSerpElementItem, IBaseGoogleImagesSerpElementItem } from "./BaseGoogleImagesSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleImageImagesSearchSerpElementItem  extends IBaseGoogleImagesSerpElementItem    {
        
        /** title of the result in SERP */
        title?: string | undefined
        
        /** subtitle of the result in SERP */
        subtitle?: string | undefined
        
        /** the alt tag of the image */
        alt?: string | undefined
        
        /** search URL with refinement parameters */
        url?: string | undefined
        
        /** the URL of the source image */
        source_url?: string | undefined
        
        /** the URL of the cached version of the image stored on Google’s servers */
        encoded_url?: string | undefined

    [key: string]: any;

    }

export class GoogleImageImagesSearchSerpElementItem  extends BaseGoogleImagesSerpElementItem   implements IGoogleImageImagesSearchSerpElementItem {
    
    /** title of the result in SERP */

    title?: string | undefined;
    
    /** subtitle of the result in SERP */

    subtitle?: string | undefined;
    
    /** the alt tag of the image */

    alt?: string | undefined;
    
    /** search URL with refinement parameters */

    url?: string | undefined;
    
    /** the URL of the source image */

    source_url?: string | undefined;
    
    /** the URL of the cached version of the image stored on Google’s servers */

    encoded_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleImageImagesSearchSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.title = data["title"];
            this.subtitle = data["subtitle"];
            this.alt = data["alt"];
            this.url = data["url"];
            this.source_url = data["source_url"];
            this.encoded_url = data["encoded_url"];
        }
    }

    static fromJS(data: any): GoogleImageImagesSearchSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleImageImagesSearchSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["subtitle"] = this.subtitle;
        data["alt"] = this.alt;
        data["url"] = this.url;
        data["source_url"] = this.source_url;
        data["encoded_url"] = this.encoded_url;
        return data;
    }
}