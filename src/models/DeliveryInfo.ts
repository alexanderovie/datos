import { PriceInfo, IPriceInfo } from "./PriceInfo";

export interface IDeliveryInfo   {
        
        /** delivery information
message accompanying the delivery information as posted by the seller */
        delivery_message?: string
        
        /** price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null */
        delivery_price?: PriceInfo

    [key: string]: any;

    }

export class DeliveryInfo  implements IDeliveryInfo {
    
    /** delivery information
message accompanying the delivery information as posted by the seller */

    delivery_message?: string;
    
    /** price for the delivery
price of the delivery based on the location you specified in the POST request;
if free delivery is available, the value is null */

    delivery_price?: PriceInfo;

    [key: string]: any;


    constructor(data?: IDeliveryInfo) {

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
            this.delivery_message = data["delivery_message"];
            this.delivery_price = data["delivery_price"] ? PriceInfo.fromJS(data["delivery_price"]) : <any>undefined;
        }
    }

    static fromJS(data: any): DeliveryInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DeliveryInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["delivery_message"] = this.delivery_message;
        data["delivery_price"] = this.delivery_price ? PriceInfo.fromJS(this.delivery_price)?.toJSON() : <any>undefined;
        return data;
    }
}