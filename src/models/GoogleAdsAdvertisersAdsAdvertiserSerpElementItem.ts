import { BaseGoogleAdsAdvertisersSerpElementItem, IBaseGoogleAdsAdvertisersSerpElementItem } from "./BaseGoogleAdsAdvertisersSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem  extends IBaseGoogleAdsAdvertisersSerpElementItem    {
        
        /** title of the element */
        title?: string | undefined
        
        /** unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint */
        advertiser_id?: string | undefined
        
        /** advertiser location */
        location?: string | undefined
        
        /** verified advertiser account
equals true if advertiser account is verified by Google Ads */
        verified?: boolean | undefined
        
        /** ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms */
        approx_ads_count?: number | undefined

    [key: string]: any;

    }

export class GoogleAdsAdvertisersAdsAdvertiserSerpElementItem  extends BaseGoogleAdsAdvertisersSerpElementItem   implements IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem {
    
    /** title of the element */

    title?: string | undefined;
    
    /** unique identifier of the advertiser account
can be used to obtain data on advertising campaigns from the Google Ads Search endpoint */

    advertiser_id?: string | undefined;
    
    /** advertiser location */

    location?: string | undefined;
    
    /** verified advertiser account
equals true if advertiser account is verified by Google Ads */

    verified?: boolean | undefined;
    
    /** ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms */

    approx_ads_count?: number | undefined;

    [key: string]: any;


    constructor(data?: IGoogleAdsAdvertisersAdsAdvertiserSerpElementItem) {
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
            this.advertiser_id = data["advertiser_id"];
            this.location = data["location"];
            this.verified = data["verified"];
            this.approx_ads_count = data["approx_ads_count"];
        }
    }

    static fromJS(data: any): GoogleAdsAdvertisersAdsAdvertiserSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleAdsAdvertisersAdsAdvertiserSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["advertiser_id"] = this.advertiser_id;
        data["location"] = this.location;
        data["verified"] = this.verified;
        data["approx_ads_count"] = this.approx_ads_count;
        return data;
    }
}