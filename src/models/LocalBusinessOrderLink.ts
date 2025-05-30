import { LocalBusinessDeliveryServiceInfo, ILocalBusinessDeliveryServiceInfo } from "./LocalBusinessDeliveryServiceInfo";
import { BaseLocalBusinessLink, IBaseLocalBusinessLink } from "./BaseLocalBusinessLink";
import { ApiException, throwException } from "./ApiException"

export interface ILocalBusinessOrderLink  extends IBaseLocalBusinessLink    {
        
        /** lists available delivery services */
        delivery_services?: LocalBusinessDeliveryServiceInfo[] | undefined

    [key: string]: any;

    }

export class LocalBusinessOrderLink  extends BaseLocalBusinessLink   implements ILocalBusinessOrderLink {
    
    /** lists available delivery services */

    delivery_services?: LocalBusinessDeliveryServiceInfo[] | undefined;

    [key: string]: any;


    constructor(data?: ILocalBusinessOrderLink) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            if (Array.isArray(data["delivery_services"])) {
                this.delivery_services = [];
                for (let item of data["delivery_services"]) {
                    this.delivery_services.push(LocalBusinessDeliveryServiceInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): LocalBusinessOrderLink {
        data = typeof data === 'object' ? data : {};


        let result = new LocalBusinessOrderLink();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["delivery_services"] = null;
        if (Array.isArray(this.delivery_services)) {
            data["delivery_services"] = [];
            for (let item of this.delivery_services) {
                if (item && typeof item.toJSON === "function") {
                    data["delivery_services"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}