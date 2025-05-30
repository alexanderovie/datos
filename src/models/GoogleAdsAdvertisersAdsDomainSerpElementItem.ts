import { BaseGoogleAdsAdvertisersSerpElementItem, IBaseGoogleAdsAdvertisersSerpElementItem } from "./BaseGoogleAdsAdvertisersSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleAdsAdvertisersAdsDomainSerpElementItem  extends IBaseGoogleAdsAdvertisersSerpElementItem    {
        
        /** domain in SERP */
        domain?: string | undefined

    [key: string]: any;

    }

export class GoogleAdsAdvertisersAdsDomainSerpElementItem  extends BaseGoogleAdsAdvertisersSerpElementItem   implements IGoogleAdsAdvertisersAdsDomainSerpElementItem {
    
    /** domain in SERP */

    domain?: string | undefined;

    [key: string]: any;


    constructor(data?: IGoogleAdsAdvertisersAdsDomainSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.domain = data["domain"];
        }
    }

    static fromJS(data: any): GoogleAdsAdvertisersAdsDomainSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleAdsAdvertisersAdsDomainSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["domain"] = this.domain;
        return data;
    }
}