import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { BaseAppDataSerpElementItem, IBaseAppDataSerpElementItem } from "./BaseAppDataSerpElementItem";
import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppDataGooglePlaySearchOrganicSerpElementItem  extends IBaseAppDataSerpElementItem    {
        
        /** id of the app */
        app_id?: string | undefined
        
        /** URL to the app page on Google Play */
        url?: string | undefined
        
        /** URL to the app icon */
        icon?: string | undefined
        
        /** the total number of reviews of the app */
        reviews_count?: number | undefined
        
        /** indicates whether the app is free */
        is_free?: boolean | undefined
        
        /** price of the app */
        price?: PriceInfo | undefined
        
        /** name of the app developer */
        developer?: string | undefined
        
        /** URL to the developer page on Google Play */
        developer_url?: string | undefined

    [key: string]: any;

    }

export class AppDataGooglePlaySearchOrganicSerpElementItem  extends BaseAppDataSerpElementItem   implements IAppDataGooglePlaySearchOrganicSerpElementItem {
    
    /** id of the app */

    app_id?: string | undefined;
    
    /** URL to the app page on Google Play */

    url?: string | undefined;
    
    /** URL to the app icon */

    icon?: string | undefined;
    
    /** the total number of reviews of the app */

    reviews_count?: number | undefined;
    
    /** indicates whether the app is free */

    is_free?: boolean | undefined;
    
    /** price of the app */

    price?: PriceInfo | undefined;
    
    /** name of the app developer */

    developer?: string | undefined;
    
    /** URL to the developer page on Google Play */

    developer_url?: string | undefined;

    [key: string]: any;


    constructor(data?: IAppDataGooglePlaySearchOrganicSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.app_id = data["app_id"];
            this.url = data["url"];
            this.icon = data["icon"];
            this.reviews_count = data["reviews_count"];
            this.is_free = data["is_free"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.developer = data["developer"];
            this.developer_url = data["developer_url"];
        }
    }

    static fromJS(data: any): AppDataGooglePlaySearchOrganicSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataGooglePlaySearchOrganicSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["app_id"] = this.app_id;
        data["url"] = this.url;
        data["icon"] = this.icon;
        data["reviews_count"] = this.reviews_count;
        data["is_free"] = this.is_free;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["developer"] = this.developer;
        data["developer_url"] = this.developer_url;
        return data;
    }
}