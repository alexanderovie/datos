import { PriceInfo, IPriceInfo } from "./PriceInfo";
import { AppsInfo, IAppsInfo } from "./AppsInfo";
import { BaseAppDataSerpElementItem, IBaseAppDataSerpElementItem } from "./BaseAppDataSerpElementItem";
import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppDataAppStoreInfoOrganicSerpElementItem  extends IBaseAppDataSerpElementItem    {
        
        /** ID of the app */
        app_id?: string | undefined
        
        /** URL to the app page on App Store */
        url?: string | undefined
        
        /** URL to the app icon */
        icon?: string | undefined
        
        /** description of the app */
        description?: string | undefined
        
        /** the total number of reviews of the app */
        reviews_count?: number | undefined
        
        /** price of the app */
        price?: PriceInfo | undefined
        
        /** indicates whether the app is free */
        is_free?: boolean | undefined
        
        /** main category/genre of the app */
        main_category?: string | undefined
        
        /** all relevant categories/genres of the app */
        categories?: string[] | undefined
        
        /** languages supported in the app */
        languages?: string[] | undefined
        
        /** age rating and age-based content advisories */
        advisories?: string[] | undefined
        
        /** name of the app developer */
        developer?: string | undefined
        
        /** ID of the app developer */
        developer_id?: string | undefined
        
        /** URL to the developer page on App Store */
        developer_url?: string | undefined
        
        /** current version of the app */
        version?: string | undefined
        
        /** minimum OS version required to install the app */
        minimum_os_version?: string | undefined
        
        /** size of the app */
        size?: string | undefined
        
        /** date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        released_date?: string | undefined
        
        /** date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        last_update_date?: string | undefined
        
        /** update notes
contains the latest update notes from the developer */
        update_notes?: string | undefined
        
        /** app images
contains URLs to the images used on the app page on App Store */
        images?: string[] | undefined
        
        /** similar apps
displays apps similar to the app in a POST request */
        similar_apps?: AppsInfo[] | undefined
        
        /** similar apps
information about apps built by the same developer */
        more_apps_by_developer?: AppsInfo[] | undefined

    [key: string]: any;

    }

export class AppDataAppStoreInfoOrganicSerpElementItem  extends BaseAppDataSerpElementItem   implements IAppDataAppStoreInfoOrganicSerpElementItem {
    
    /** ID of the app */

    app_id?: string | undefined;
    
    /** URL to the app page on App Store */

    url?: string | undefined;
    
    /** URL to the app icon */

    icon?: string | undefined;
    
    /** description of the app */

    description?: string | undefined;
    
    /** the total number of reviews of the app */

    reviews_count?: number | undefined;
    
    /** price of the app */

    price?: PriceInfo | undefined;
    
    /** indicates whether the app is free */

    is_free?: boolean | undefined;
    
    /** main category/genre of the app */

    main_category?: string | undefined;
    
    /** all relevant categories/genres of the app */

    categories?: string[] | undefined;
    
    /** languages supported in the app */

    languages?: string[] | undefined;
    
    /** age rating and age-based content advisories */

    advisories?: string[] | undefined;
    
    /** name of the app developer */

    developer?: string | undefined;
    
    /** ID of the app developer */

    developer_id?: string | undefined;
    
    /** URL to the developer page on App Store */

    developer_url?: string | undefined;
    
    /** current version of the app */

    version?: string | undefined;
    
    /** minimum OS version required to install the app */

    minimum_os_version?: string | undefined;
    
    /** size of the app */

    size?: string | undefined;
    
    /** date and time when the app was released
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    released_date?: string | undefined;
    
    /** date and time when the app was last updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    last_update_date?: string | undefined;
    
    /** update notes
contains the latest update notes from the developer */

    update_notes?: string | undefined;
    
    /** app images
contains URLs to the images used on the app page on App Store */

    images?: string[] | undefined;
    
    /** similar apps
displays apps similar to the app in a POST request */

    similar_apps?: AppsInfo[] | undefined;
    
    /** similar apps
information about apps built by the same developer */

    more_apps_by_developer?: AppsInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppStoreInfoOrganicSerpElementItem) {
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
            this.description = data["description"];
            this.reviews_count = data["reviews_count"];
            this.price = data["price"] ? PriceInfo.fromJS(data["price"]) : <any>undefined;
            this.is_free = data["is_free"];
            this.main_category = data["main_category"];
            this.categories = data["categories"];
            this.languages = data["languages"];
            this.advisories = data["advisories"];
            this.developer = data["developer"];
            this.developer_id = data["developer_id"];
            this.developer_url = data["developer_url"];
            this.version = data["version"];
            this.minimum_os_version = data["minimum_os_version"];
            this.size = data["size"];
            this.released_date = data["released_date"];
            this.last_update_date = data["last_update_date"];
            this.update_notes = data["update_notes"];
            this.images = data["images"];
            if (Array.isArray(data["similar_apps"])) {
                this.similar_apps = [];
                for (let item of data["similar_apps"]) {
                    this.similar_apps.push(AppsInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["more_apps_by_developer"])) {
                this.more_apps_by_developer = [];
                for (let item of data["more_apps_by_developer"]) {
                    this.more_apps_by_developer.push(AppsInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): AppDataAppStoreInfoOrganicSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppStoreInfoOrganicSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["app_id"] = this.app_id;
        data["url"] = this.url;
        data["icon"] = this.icon;
        data["description"] = this.description;
        data["reviews_count"] = this.reviews_count;
        data["price"] = this.price ? PriceInfo.fromJS(this.price)?.toJSON() : <any>undefined;
        data["is_free"] = this.is_free;
        data["main_category"] = this.main_category;
        data["categories"] = this.categories;
        data["languages"] = this.languages;
        data["advisories"] = this.advisories;
        data["developer"] = this.developer;
        data["developer_id"] = this.developer_id;
        data["developer_url"] = this.developer_url;
        data["version"] = this.version;
        data["minimum_os_version"] = this.minimum_os_version;
        data["size"] = this.size;
        data["released_date"] = this.released_date;
        data["last_update_date"] = this.last_update_date;
        data["update_notes"] = this.update_notes;
        data["images"] = this.images;
        data["similar_apps"] = null;
        if (Array.isArray(this.similar_apps)) {
            data["similar_apps"] = [];
            for (let item of this.similar_apps) {
                if (item && typeof item.toJSON === "function") {
                    data["similar_apps"].push(item?.toJSON());
                }
            }
        }
        data["more_apps_by_developer"] = null;
        if (Array.isArray(this.more_apps_by_developer)) {
            data["more_apps_by_developer"] = [];
            for (let item of this.more_apps_by_developer) {
                if (item && typeof item.toJSON === "function") {
                    data["more_apps_by_developer"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}