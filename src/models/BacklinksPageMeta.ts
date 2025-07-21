export interface IBacklinksPageMeta   {
        
        /** page title */
        title?: string
        
        /** canonical page */
        canonical?: string
        
        /** number of internal links on the page */
        internal_links_count?: number
        
        /** number of external links on the page */
        external_links_count?: number
        
        /** number of images on the page */
        images_count?: number
        
        /** number of words on the page */
        words_count?: number
        
        /** spam score of the page
learn more about how the metric is calculated on this help center page */
        page_spam_score?: number
        
        /** array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card */
        social_media_tags?: { [key: string]: string; }
        
        /** h1 tag
content of h1 tags */
        h_1?: string[]
        
        /** h2 tag
content of h2 tags */
        h_2?: string[]
        
        /** h3 tag
content of h3 tags */
        h_3?: string[]
        
        /** content of alt tags */
        images_alt?: string[]
        
        /** CMS details */
        powered_by?: string[]
        
        /** page content language
example:
en */
        language?: string
        
        /** character encoding
examples:
utf-8 */
        charset?: string
        
        /** type of a platform */
        platform_type?: string[]
        
        /** website technologies */
        technologies?: { [key: string]: string; }

    [key: string]: any;

    }

export class BacklinksPageMeta  implements IBacklinksPageMeta {
    
    /** page title */

    title?: string;
    
    /** canonical page */

    canonical?: string;
    
    /** number of internal links on the page */

    internal_links_count?: number;
    
    /** number of external links on the page */

    external_links_count?: number;
    
    /** number of images on the page */

    images_count?: number;
    
    /** number of words on the page */

    words_count?: number;
    
    /** spam score of the page
learn more about how the metric is calculated on this help center page */

    page_spam_score?: number;
    
    /** array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card */

    social_media_tags?: { [key: string]: string; };
    
    /** h1 tag
content of h1 tags */

    h_1?: string[];
    
    /** h2 tag
content of h2 tags */

    h_2?: string[];
    
    /** h3 tag
content of h3 tags */

    h_3?: string[];
    
    /** content of alt tags */

    images_alt?: string[];
    
    /** CMS details */

    powered_by?: string[];
    
    /** page content language
example:
en */

    language?: string;
    
    /** character encoding
examples:
utf-8 */

    charset?: string;
    
    /** type of a platform */

    platform_type?: string[];
    
    /** website technologies */

    technologies?: { [key: string]: string; };

    [key: string]: any;


    constructor(data?: IBacklinksPageMeta) {

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
            this.canonical = data["canonical"];
            this.internal_links_count = data["internal_links_count"];
            this.external_links_count = data["external_links_count"];
            this.images_count = data["images_count"];
            this.words_count = data["words_count"];
            this.page_spam_score = data["page_spam_score"];
            this.social_media_tags = data["social_media_tags"];
            this.h_1 = data["h1"];
            this.h_2 = data["h2"];
            this.h_3 = data["h3"];
            this.images_alt = data["images_alt"];
            this.powered_by = data["powered_by"];
            this.language = data["language"];
            this.charset = data["charset"];
            this.platform_type = data["platform_type"];
            this.technologies = data["technologies"];
        }
    }

    static fromJS(data: any): BacklinksPageMeta {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksPageMeta();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["title"] = this.title;
        data["canonical"] = this.canonical;
        data["internal_links_count"] = this.internal_links_count;
        data["external_links_count"] = this.external_links_count;
        data["images_count"] = this.images_count;
        data["words_count"] = this.words_count;
        data["page_spam_score"] = this.page_spam_score;
        data["social_media_tags"] = this.social_media_tags;
        data["h1"] = this.h_1;
        data["h2"] = this.h_2;
        data["h3"] = this.h_3;
        data["images_alt"] = this.images_alt;
        data["powered_by"] = this.powered_by;
        data["language"] = this.language;
        data["charset"] = this.charset;
        data["platform_type"] = this.platform_type;
        data["technologies"] = this.technologies;
        return data;
    }
}