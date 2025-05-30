import { AppUserProfileInfo, IAppUserProfileInfo } from "./AppUserProfileInfo";
import { BaseAppDataSerpElementItem, IBaseAppDataSerpElementItem } from "./BaseAppDataSerpElementItem";
import { BusinessDataRatingInfo, IBusinessDataRatingInfo } from "./BusinessDataRatingInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppDataAppStoreReviewsSearchSerpElementItem  extends IBaseAppDataSerpElementItem    {
        
        /** version of the app
version of the app for which the review is submitted */
        version?: string | undefined
        
        /** date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */
        timestamp?: string | undefined
        
        /** id of the review */
        id?: string | undefined
        
        /** content of the review */
        review_text?: string | undefined
        
        /** user profile of the reviewer */
        user_profile?: AppUserProfileInfo | undefined

    [key: string]: any;

    }

export class AppDataAppStoreReviewsSearchSerpElementItem  extends BaseAppDataSerpElementItem   implements IAppDataAppStoreReviewsSearchSerpElementItem {
    
    /** version of the app
version of the app for which the review is submitted */

    version?: string | undefined;
    
    /** date and time when the review was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00 */

    timestamp?: string | undefined;
    
    /** id of the review */

    id?: string | undefined;
    
    /** content of the review */

    review_text?: string | undefined;
    
    /** user profile of the reviewer */

    user_profile?: AppUserProfileInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppDataAppStoreReviewsSearchSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.version = data["version"];
            this.timestamp = data["timestamp"];
            this.id = data["id"];
            this.review_text = data["review_text"];
            this.user_profile = data["user_profile"] ? AppUserProfileInfo.fromJS(data["user_profile"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppDataAppStoreReviewsSearchSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new AppDataAppStoreReviewsSearchSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["version"] = this.version;
        data["timestamp"] = this.timestamp;
        data["id"] = this.id;
        data["review_text"] = this.review_text;
        data["user_profile"] = this.user_profile ? AppUserProfileInfo.fromJS(this.user_profile)?.toJSON() : <any>undefined;
        return data;
    }
}