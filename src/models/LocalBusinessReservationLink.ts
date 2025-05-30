import { BaseLocalBusinessLink, IBaseLocalBusinessLink } from "./BaseLocalBusinessLink";
import { ApiException, throwException } from "./ApiException"

export interface ILocalBusinessReservationLink  extends IBaseLocalBusinessLink    {
        
        /** title of the element
domain of the reservation software */
        title?: string | undefined
        
        /** URL to make a reservation */
        url?: string | undefined

    [key: string]: any;

    }

export class LocalBusinessReservationLink  extends BaseLocalBusinessLink   implements ILocalBusinessReservationLink {
    
    /** title of the element
domain of the reservation software */

    title?: string | undefined;
    
    /** URL to make a reservation */

    url?: string | undefined;

    [key: string]: any;


    constructor(data?: ILocalBusinessReservationLink) {
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

    static fromJS(data: any): LocalBusinessReservationLink {
        data = typeof data === 'object' ? data : {};


        let result = new LocalBusinessReservationLink();
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