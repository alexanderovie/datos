import { ApiException, throwException } from "./ApiException"

export interface IBaseOnPageLinkItemInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** referring domain
the link was found on this domain */
        domain_from?: string | undefined
        
        /** referenced domain
the link is pointing to this domain */
        domain_to?: string | undefined
        
        /** referring page
relative URL of the page on which the link was found */
        page_from?: string | undefined
        
        /** referenced page
relative URL of the page to which the link is pointing */
        page_to?: string | undefined
        
        /** referring page
absolute URL of the page on which the link was found */
        link_from?: string | undefined
        
        /** referenced page
absolute URL of the page to which the link is pointing */
        link_to?: string | undefined
        
        /** indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel='nofollow' attribute */
        dofollow?: boolean | undefined
        
        /** url scheme of the referring page */
        page_from_scheme?: string | undefined
        
        /** url scheme of the referenced page */
        page_to_scheme?: string | undefined
        
        /** direction of the link
possible values: internal, external */
        direction?: string | undefined
        
        /** link is broken
indicates whether a link is directing to a broken page or resource */
        is_broken?: boolean | undefined
        
        /** indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel='nofollow' attribute and at least one is dofollow */
        is_link_relation_conflict?: boolean | undefined
        
        /** status code of the referenced page
status code of the page to which the link is pointing */
        page_to_status_code?: number | undefined

    [key: string]: any;

    }

export class BaseOnPageLinkItemInfo  implements IBaseOnPageLinkItemInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** referring domain
the link was found on this domain */

    domain_from?: string | undefined;
    
    /** referenced domain
the link is pointing to this domain */

    domain_to?: string | undefined;
    
    /** referring page
relative URL of the page on which the link was found */

    page_from?: string | undefined;
    
    /** referenced page
relative URL of the page to which the link is pointing */

    page_to?: string | undefined;
    
    /** referring page
absolute URL of the page on which the link was found */

    link_from?: string | undefined;
    
    /** referenced page
absolute URL of the page to which the link is pointing */

    link_to?: string | undefined;
    
    /** indicates whether the link is dofollow
if the value is true, the link doesn’t have a rel='nofollow' attribute */

    dofollow?: boolean | undefined;
    
    /** url scheme of the referring page */

    page_from_scheme?: string | undefined;
    
    /** url scheme of the referenced page */

    page_to_scheme?: string | undefined;
    
    /** direction of the link
possible values: internal, external */

    direction?: string | undefined;
    
    /** link is broken
indicates whether a link is directing to a broken page or resource */

    is_broken?: boolean | undefined;
    
    /** indicates that the link may have a conflict with another link
if true, at least one link pointing to link_to has a rel='nofollow' attribute and at least one is dofollow */

    is_link_relation_conflict?: boolean | undefined;
    
    /** status code of the referenced page
status code of the page to which the link is pointing */

    page_to_status_code?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseOnPageLinkItemInfo) {

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
            this.domain_from = data["domain_from"];
            this.domain_to = data["domain_to"];
            this.page_from = data["page_from"];
            this.page_to = data["page_to"];
            this.link_from = data["link_from"];
            this.link_to = data["link_to"];
            this.dofollow = data["dofollow"];
            this.page_from_scheme = data["page_from_scheme"];
            this.page_to_scheme = data["page_to_scheme"];
            this.direction = data["direction"];
            this.is_broken = data["is_broken"];
            this.is_link_relation_conflict = data["is_link_relation_conflict"];
            this.page_to_status_code = data["page_to_status_code"];
        }
    }

    static fromJS(data: any): BaseOnPageLinkItemInfo {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "anchor") {

            const { AnchorLinkElementItem } = require('./AnchorLinkElementItem');
            let result = new AnchorLinkElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "image") {

            const { ImageLinkElementItem } = require('./ImageLinkElementItem');
            let result = new ImageLinkElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "canonical") {

            const { CanonicalLinkElementItem } = require('./CanonicalLinkElementItem');
            let result = new CanonicalLinkElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "alternate") {

            const { AlternateLinkElementItem } = require('./AlternateLinkElementItem');
            let result = new AlternateLinkElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "link") {

            const { LinkLinkElementItem } = require('./LinkLinkElementItem');
            let result = new LinkLinkElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "redirect") {

            const { RedirectLinkElementItem } = require('./RedirectLinkElementItem');
            let result = new RedirectLinkElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "meta") {

            const { MetaLinkElementItem } = require('./MetaLinkElementItem');
            let result = new MetaLinkElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseOnPageLinkItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["domain_from"] = this.domain_from;
        data["domain_to"] = this.domain_to;
        data["page_from"] = this.page_from;
        data["page_to"] = this.page_to;
        data["link_from"] = this.link_from;
        data["link_to"] = this.link_to;
        data["dofollow"] = this.dofollow;
        data["page_from_scheme"] = this.page_from_scheme;
        data["page_to_scheme"] = this.page_to_scheme;
        data["direction"] = this.direction;
        data["is_broken"] = this.is_broken;
        data["is_link_relation_conflict"] = this.is_link_relation_conflict;
        data["page_to_status_code"] = this.page_to_status_code;
        return data;
    }
}