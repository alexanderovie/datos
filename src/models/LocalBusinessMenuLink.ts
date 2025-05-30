import { BaseLocalBusinessLink, IBaseLocalBusinessLink } from "./BaseLocalBusinessLink";
import { ApiException, throwException } from "./ApiException"

export interface ILocalBusinessMenuLink  extends IBaseLocalBusinessLink    {
        
        /** title of the element
domain of the online menu system */
        title?: string | undefined
        
        /** URL to view the menu */
        url?: string | undefined

    [key: string]: any;

    }

export class LocalBusinessMenuLink  extends BaseLocalBusinessLink   implements ILocalBusinessMenuLink {
    
    /** title of the element
domain of the online menu system */

    title?: string | undefined;
    
    /** URL to view the menu */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocalBusinessMenuLink) {
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
            this.url = data["url"];
        }
    }

    static fromJS(data: any): LocalBusinessMenuLink {
        data = typeof data === 'object' ? data : {};


        let result = new LocalBusinessMenuLink();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["url"] = this.url;
        return data;
    }
}