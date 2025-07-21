import { BacklinksRedirectInfo, IBacklinksRedirectInfo } from "./BacklinksRedirectInfo";

export interface IBacklinksPageIntersection   {
        
        /** type of element */
        type?: string
        
        /** domain referring to the target domain or webpage */
        domain_from?: string
        
        /** URL of the page where the backlink is found */
        url_from?: string
        
        /** indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS */
        url_from_https?: boolean
        
        /** domain the backlink is pointing to */
        domain_to?: string
        
        /** URL the backlink is pointing to */
        url_to?: string
        
        /** indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS */
        url_to_https?: boolean
        
        /** top-level domain of the referring URL */
        tld_from?: string
        
        /** indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it */
        is_new?: boolean
        
        /** indicates whether the backlink was removed
if true, the backlink or the entire page was removed */
        is_lost?: boolean
        
        /** spam score of the backlink
learn more about how the metric is calculated on this help center page */
        backlink_spam_score?: number
        
        /** backlink rank
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        rank?: number
        
        /** page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        page_from_rank?: number
        
        /** domain rank of the referring domain
indicates the rank of the domain at the time our crawler last saw the backlink;
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */
        domain_from_rank?: number
        
        /** platform types of the referring domain
possible values: cms, blogs, ecommerce, message-boards, wikis, news, organization */
        domain_from_platform_type?: string[]
        
        /** indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name */
        domain_from_is_ip?: boolean
        
        /** IP address of the referring domain */
        domain_from_ip?: string
        
        /** ISO country code of the referring domain */
        domain_from_country?: string
        
        /** number of external links found on the referring page */
        page_from_external_links?: number
        
        /** number of internal links found on the referring page */
        page_from_internal_links?: number
        
        /** size of the referring page, in bytes
example:
63357 */
        page_from_size?: number
        
        /** character encoding of the referring page
example:
utf-8 */
        page_from_encoding?: string
        
        /** language of the referring page
in ISO 639-1 format
example:
en */
        page_from_language?: string
        
        /** title of the referring page */
        page_from_title?: string
        
        /** HTTP status code returned by the referring page
example:
200 */
        page_from_status_code?: number
        
        /** date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        first_seen?: string
        
        /** previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        prev_seen?: string
        
        /** most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        last_seen?: string
        
        /** link type
possible values:
anchor, image, link, meta, canonical, alternate, redirect */
        item_type?: string
        
        /** link attributes of the referring links
example:
nofollow */
        attributes?: string[]
        
        /** indicates whether the backlink is dofollow
if false, the backlink is nofollow */
        dofollow?: boolean
        
        /** indicates whether the backlink was present on the referring page when our crawler first visited it */
        original?: boolean
        
        /** alternative text of the image
this field will be null if backlink type is not image */
        alt?: string
        
        /** anchor text of the backlink */
        anchor?: string
        
        /** text snippet before the anchor text */
        text_pre?: string
        
        /** snippet after the anchor text */
        text_post?: string
        
        /** indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary */
        semantic_location?: string
        
        /** number of identical backlinks found on the referring page */
        links_count?: number
        
        /** indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain */
        group_count?: number
        
        /** indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code */
        is_broken?: boolean
        
        /** status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200 */
        url_to_status_code?: number
        
        /** spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
learn more about how the metric is calculated on this help center page */
        url_to_spam_score?: number
        
        /** target url of the redirect
target page the redirect is pointing to */
        url_to_redirect_target?: string
        
        /** indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page */
        is_indirect_link?: boolean
        
        /** indirect link path
indicates a URL or a sequence of URLs that lead to url_to */
        indirect_link_path?: BacklinksRedirectInfo[]

    [key: string]: any;

    }

export class BacklinksPageIntersection  implements IBacklinksPageIntersection {
    
    /** type of element */

    type?: string;
    
    /** domain referring to the target domain or webpage */

    domain_from?: string;
    
    /** URL of the page where the backlink is found */

    url_from?: string;
    
    /** indicates whether the referring URL is secured with HTTPS
if true, the referring URL is secured with HTTPS */

    url_from_https?: boolean;
    
    /** domain the backlink is pointing to */

    domain_to?: string;
    
    /** URL the backlink is pointing to */

    url_to?: string;
    
    /** indicates if the URL the backlink is pointing to is secured with HTTPS
if true, the URL is secured with HTTPS */

    url_to_https?: boolean;
    
    /** top-level domain of the referring URL */

    tld_from?: string;
    
    /** indicates whether the backlink is new
if true, the backlink was found on the page last time our crawler visited it */

    is_new?: boolean;
    
    /** indicates whether the backlink was removed
if true, the backlink or the entire page was removed */

    is_lost?: boolean;
    
    /** spam score of the backlink
learn more about how the metric is calculated on this help center page */

    backlink_spam_score?: number;
    
    /** backlink rank
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    rank?: number;
    
    /** page rank of the referring page
page_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    page_from_rank?: number;
    
    /** domain rank of the referring domain
indicates the rank of the domain at the time our crawler last saw the backlink;
domain_from_rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article */

    domain_from_rank?: number;
    
    /** platform types of the referring domain
possible values: cms, blogs, ecommerce, message-boards, wikis, news, organization */

    domain_from_platform_type?: string[];
    
    /** indicates if the domain is IP
if true, the domain functions as an IP address and does not have a domain name */

    domain_from_is_ip?: boolean;
    
    /** IP address of the referring domain */

    domain_from_ip?: string;
    
    /** ISO country code of the referring domain */

    domain_from_country?: string;
    
    /** number of external links found on the referring page */

    page_from_external_links?: number;
    
    /** number of internal links found on the referring page */

    page_from_internal_links?: number;
    
    /** size of the referring page, in bytes
example:
63357 */

    page_from_size?: number;
    
    /** character encoding of the referring page
example:
utf-8 */

    page_from_encoding?: string;
    
    /** language of the referring page
in ISO 639-1 format
example:
en */

    page_from_language?: string;
    
    /** title of the referring page */

    page_from_title?: string;
    
    /** HTTP status code returned by the referring page
example:
200 */

    page_from_status_code?: number;
    
    /** date and time when our crawler found the backlink for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    first_seen?: string;
    
    /** previous to the most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    prev_seen?: string;
    
    /** most recent date when our crawler visited the backlink
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    last_seen?: string;
    
    /** link type
possible values:
anchor, image, link, meta, canonical, alternate, redirect */

    item_type?: string;
    
    /** link attributes of the referring links
example:
nofollow */

    attributes?: string[];
    
    /** indicates whether the backlink is dofollow
if false, the backlink is nofollow */

    dofollow?: boolean;
    
    /** indicates whether the backlink was present on the referring page when our crawler first visited it */

    original?: boolean;
    
    /** alternative text of the image
this field will be null if backlink type is not image */

    alt?: string;
    
    /** anchor text of the backlink */

    anchor?: string;
    
    /** text snippet before the anchor text */

    text_pre?: string;
    
    /** snippet after the anchor text */

    text_post?: string;
    
    /** indicates semantic element in HTML where the backlink is found
you can get the full list of semantic elements here
examples:
article, section, summary */

    semantic_location?: string;
    
    /** number of identical backlinks found on the referring page */

    links_count?: number;
    
    /** indicates total number of backlinks from this domain
for example, if mode is set to one_per_domain, this field will indicate the total number of backlinks coming from this domain */

    group_count?: number;
    
    /** indicates whether the backlink is broken
if true, the backlink is pointing to a page responding with a 4xx or 5xx status code */

    is_broken?: boolean;
    
    /** status code of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
example:
200 */

    url_to_status_code?: number;
    
    /** spam score of the referenced page
if the value is null, our crawler hasn’t yet visited the webpage the link is pointing to
learn more about how the metric is calculated on this help center page */

    url_to_spam_score?: number;
    
    /** target url of the redirect
target page the redirect is pointing to */

    url_to_redirect_target?: string;
    
    /** indicates whether the backlink is an indirect link
if true, the backlink is an indirect link pointing to a page that either redirects to url_to, or points to a canonical page */

    is_indirect_link?: boolean;
    
    /** indirect link path
indicates a URL or a sequence of URLs that lead to url_to */

    indirect_link_path?: BacklinksRedirectInfo[];

    [key: string]: any;


    constructor(data?: IBacklinksPageIntersection) {

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
            this.type = data["type"];
            this.domain_from = data["domain_from"];
            this.url_from = data["url_from"];
            this.url_from_https = data["url_from_https"];
            this.domain_to = data["domain_to"];
            this.url_to = data["url_to"];
            this.url_to_https = data["url_to_https"];
            this.tld_from = data["tld_from"];
            this.is_new = data["is_new"];
            this.is_lost = data["is_lost"];
            this.backlink_spam_score = data["backlink_spam_score"];
            this.rank = data["rank"];
            this.page_from_rank = data["page_from_rank"];
            this.domain_from_rank = data["domain_from_rank"];
            this.domain_from_platform_type = data["domain_from_platform_type"];
            this.domain_from_is_ip = data["domain_from_is_ip"];
            this.domain_from_ip = data["domain_from_ip"];
            this.domain_from_country = data["domain_from_country"];
            this.page_from_external_links = data["page_from_external_links"];
            this.page_from_internal_links = data["page_from_internal_links"];
            this.page_from_size = data["page_from_size"];
            this.page_from_encoding = data["page_from_encoding"];
            this.page_from_language = data["page_from_language"];
            this.page_from_title = data["page_from_title"];
            this.page_from_status_code = data["page_from_status_code"];
            this.first_seen = data["first_seen"];
            this.prev_seen = data["prev_seen"];
            this.last_seen = data["last_seen"];
            this.item_type = data["item_type"];
            this.attributes = data["attributes"];
            this.dofollow = data["dofollow"];
            this.original = data["original"];
            this.alt = data["alt"];
            this.anchor = data["anchor"];
            this.text_pre = data["text_pre"];
            this.text_post = data["text_post"];
            this.semantic_location = data["semantic_location"];
            this.links_count = data["links_count"];
            this.group_count = data["group_count"];
            this.is_broken = data["is_broken"];
            this.url_to_status_code = data["url_to_status_code"];
            this.url_to_spam_score = data["url_to_spam_score"];
            this.url_to_redirect_target = data["url_to_redirect_target"];
            this.is_indirect_link = data["is_indirect_link"];
            if (Array.isArray(data["indirect_link_path"])) {
                this.indirect_link_path = [];
                for (let item of data["indirect_link_path"]) {
                    this.indirect_link_path.push(BacklinksRedirectInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): BacklinksPageIntersection {
        data = typeof data === 'object' ? data : {};


        let result = new BacklinksPageIntersection();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["domain_from"] = this.domain_from;
        data["url_from"] = this.url_from;
        data["url_from_https"] = this.url_from_https;
        data["domain_to"] = this.domain_to;
        data["url_to"] = this.url_to;
        data["url_to_https"] = this.url_to_https;
        data["tld_from"] = this.tld_from;
        data["is_new"] = this.is_new;
        data["is_lost"] = this.is_lost;
        data["backlink_spam_score"] = this.backlink_spam_score;
        data["rank"] = this.rank;
        data["page_from_rank"] = this.page_from_rank;
        data["domain_from_rank"] = this.domain_from_rank;
        data["domain_from_platform_type"] = this.domain_from_platform_type;
        data["domain_from_is_ip"] = this.domain_from_is_ip;
        data["domain_from_ip"] = this.domain_from_ip;
        data["domain_from_country"] = this.domain_from_country;
        data["page_from_external_links"] = this.page_from_external_links;
        data["page_from_internal_links"] = this.page_from_internal_links;
        data["page_from_size"] = this.page_from_size;
        data["page_from_encoding"] = this.page_from_encoding;
        data["page_from_language"] = this.page_from_language;
        data["page_from_title"] = this.page_from_title;
        data["page_from_status_code"] = this.page_from_status_code;
        data["first_seen"] = this.first_seen;
        data["prev_seen"] = this.prev_seen;
        data["last_seen"] = this.last_seen;
        data["item_type"] = this.item_type;
        data["attributes"] = this.attributes;
        data["dofollow"] = this.dofollow;
        data["original"] = this.original;
        data["alt"] = this.alt;
        data["anchor"] = this.anchor;
        data["text_pre"] = this.text_pre;
        data["text_post"] = this.text_post;
        data["semantic_location"] = this.semantic_location;
        data["links_count"] = this.links_count;
        data["group_count"] = this.group_count;
        data["is_broken"] = this.is_broken;
        data["url_to_status_code"] = this.url_to_status_code;
        data["url_to_spam_score"] = this.url_to_spam_score;
        data["url_to_redirect_target"] = this.url_to_redirect_target;
        data["is_indirect_link"] = this.is_indirect_link;
        data["indirect_link_path"] = null;
        if (Array.isArray(this.indirect_link_path)) {
            data["indirect_link_path"] = [];
            for (let item of this.indirect_link_path) {
                if (item && typeof item.toJSON === "function") {
                    data["indirect_link_path"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}