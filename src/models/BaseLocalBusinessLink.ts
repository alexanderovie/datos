import { ApiException, throwException } from "./ApiException"

export interface IBaseLocalBusinessLink   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseLocalBusinessLink  implements IBaseLocalBusinessLink {
    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseLocalBusinessLink) {

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
        }
    }

    static fromJS(data: any): BaseLocalBusinessLink {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "reservation") {

            const { LocalBusinessReservationLink } = require('./LocalBusinessReservationLink');
            let result = new LocalBusinessReservationLink();
            result.init(data);
            return result;
        }
        if (data["type"] === "order") {

            const { LocalBusinessOrderLink } = require('./LocalBusinessOrderLink');
            let result = new LocalBusinessOrderLink();
            result.init(data);
            return result;
        }
        if (data["type"] === "menu") {

            const { LocalBusinessMenuLink } = require('./LocalBusinessMenuLink');
            let result = new LocalBusinessMenuLink();
            result.init(data);
            return result;
        }

        let result = new BaseLocalBusinessLink();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}