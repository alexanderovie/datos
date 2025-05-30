import { ApiException, throwException } from "./ApiException"

export interface IBaseGoogleAdsAdvertisersSerpElementItem   {
        
        /** type of element */
        type?: string | undefined
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined

    [key: string]: any;

    }

export class BaseGoogleAdsAdvertisersSerpElementItem  implements IBaseGoogleAdsAdvertisersSerpElementItem {
    
    /** type of element */

    type?: string | undefined;
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseGoogleAdsAdvertisersSerpElementItem) {

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
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
        }
    }

    static fromJS(data: any): BaseGoogleAdsAdvertisersSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "ads_multi_account_advertiser") {

            const { GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem } = require('./GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem');
            let result = new GoogleAdsAdvertisersAdsMultiAccountAdvertiserSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ads_advertiser") {

            const { GoogleAdsAdvertisersAdsAdvertiserSerpElementItem } = require('./GoogleAdsAdvertisersAdsAdvertiserSerpElementItem');
            let result = new GoogleAdsAdvertisersAdsAdvertiserSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "ads_domain") {

            const { GoogleAdsAdvertisersAdsDomainSerpElementItem } = require('./GoogleAdsAdvertisersAdsDomainSerpElementItem');
            let result = new GoogleAdsAdvertisersAdsDomainSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGoogleAdsAdvertisersSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        return data;
    }
}