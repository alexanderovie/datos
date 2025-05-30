import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { BaseAppDataSerpElementItem, IBaseAppDataSerpElementItem } from "./BaseAppDataSerpElementItem";
import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppDataAppStoreSearchOrganicSerpElementItem  extends IBaseAppDataSerpElementItem    {
        
        /** id of the app */
        app_id?: string | undefined
        
        /** URL to the app page on App Store */
        url?: string | undefined
        
        /** URL to the app icon */
        icon?: string | undefined
        
        /** the total number of reviews of the app */
        reviews_count?: number | undefined
        
        /** indicates whether the app is free */
        is_free?: boolean | undefined
        
        /** price of the app */
        price?: PriceInfo | undefined

    [key: string]: any;

    }

export class AppDataAppStoreSearchOrganicSerpElementItem  extends BaseAppDataSerpElementItem   implements IAppDataAppStoreSearchOrganicSerpElementItem {
    
    /** id of the app */

    app_id?: string | undefined;
    
    /** URL to the app page on App Store */

    url?: string | undefined;
    
    /** URL to the app icon */

    icon?: string | undefined;
    
    /** the total number of reviews of the app */

    reviews_count?: number | undefined;
    
    /** indicates whether the app is free */

    is_free?: boolean | undefined;
    
    /** price of the app */

    price?: PriceInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppStoreSearchOrganicSerpElementItem) {
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
        }
    }

    static fromJS(data: any): AppDataAppStoreSearchOrganicSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppStoreSearchOrganicSerpElementItem();
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
        return data;
    }
}