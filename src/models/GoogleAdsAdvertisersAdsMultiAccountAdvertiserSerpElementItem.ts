import { Advertiser, IAdvertiser } from "./Advertiser";
import { BaseGoogleAdsAdvertisersSerpElementItem, IBaseGoogleAdsAdvertisersSerpElementItem } from "./BaseGoogleAdsAdvertisersSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem  extends IBaseGoogleAdsAdvertisersSerpElementItem    {
        
        /** title of the element */
        title?: string | undefined
        
        /** advertiser location */
        location?: string | undefined
        
        /** ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms */
        approx_ads_count?: number | undefined
        
        /** associated advertiser accounts
contains objects with data on associated advertiser accounts */
        advertisers?: Advertiser[] | undefined

    [key: string]: any;

    }

export class GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem  extends BaseGoogleAdsAdvertisersSerpElementItem   implements IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem {
    
    /** title of the element */

    title?: string | undefined;
    
    /** advertiser location */

    location?: string | undefined;
    
    /** ads count
the approximate number of ads that are run by the advertiser across all available Google Ads platforms */

    approx_ads_count?: number | undefined;
    
    /** associated advertiser accounts
contains objects with data on associated advertiser accounts */

    advertisers?: Advertiser[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem) {
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
            this.location = data["location"];
            this.approx_ads_count = data["approx_ads_count"];
            if (Array.isArray(data["advertisers"])) {
                this.advertisers = [];
                for (let item of data["advertisers"]) {
                    this.advertisers.push(Advertiser.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["title"] = this.title;
        data["location"] = this.location;
        data["approx_ads_count"] = this.approx_ads_count;
        data["advertisers"] = null;
        if (Array.isArray(this.advertisers)) {
            data["advertisers"] = [];
            for (let item of this.advertisers) {
                if (item && typeof item.toJSON === "function") {
                    data["advertisers"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}