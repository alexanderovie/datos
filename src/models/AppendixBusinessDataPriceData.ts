import { AppendixBusinessListingsBusinessDataPriceData, IAppendixBusinessListingsBusinessDataPriceData } from "./AppendixBusinessListingsBusinessDataPriceData";
import { AppendixTaskKeywordsDataPriceDataInfo, IAppendixTaskKeywordsDataPriceDataInfo } from "./AppendixTaskKeywordsDataPriceDataInfo";
import { AppendixGoogleBusinessDataPriceData, IAppendixGoogleBusinessDataPriceData } from "./AppendixGoogleBusinessDataPriceData";
import { AppendixSocialMediaBusinessDataPriceData, IAppendixSocialMediaBusinessDataPriceData } from "./AppendixSocialMediaBusinessDataPriceData";
import { AppendixTrBusinessDataPriceDataInfo, IAppendixTrBusinessDataPriceDataInfo } from "./AppendixTrBusinessDataPriceDataInfo";

export interface IAppendixBusinessDataPriceData   {
        
        business_listings?: AppendixBusinessListingsBusinessDataPriceData
        
        errors?: AppendixTaskKeywordsDataPriceDataInfo
        
        google?: AppendixGoogleBusinessDataPriceData
        
        social_media?: AppendixSocialMediaBusinessDataPriceData
        
        languages?: AppendixTaskKeywordsDataPriceDataInfo
        
        locations?: AppendixTaskKeywordsDataPriceDataInfo
        
        tripadvisor?: AppendixTrBusinessDataPriceDataInfo
        
        trustpilot?: AppendixTrBusinessDataPriceDataInfo
        
        yelp?: AppendixTrBusinessDataPriceDataInfo
        
        tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo

    [key: string]: any;

    }

export class AppendixBusinessDataPriceData  implements IAppendixBusinessDataPriceData {

    business_listings?: AppendixBusinessListingsBusinessDataPriceData;

    errors?: AppendixTaskKeywordsDataPriceDataInfo;

    google?: AppendixGoogleBusinessDataPriceData;

    social_media?: AppendixSocialMediaBusinessDataPriceData;

    languages?: AppendixTaskKeywordsDataPriceDataInfo;

    locations?: AppendixTaskKeywordsDataPriceDataInfo;

    tripadvisor?: AppendixTrBusinessDataPriceDataInfo;

    trustpilot?: AppendixTrBusinessDataPriceDataInfo;

    yelp?: AppendixTrBusinessDataPriceDataInfo;

    tasks_ready?: AppendixTaskKeywordsDataPriceDataInfo;

    [key: string]: any;


    constructor(data?: IAppendixBusinessDataPriceData) {

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
            this.business_listings = data["business_listings"] ? AppendixBusinessListingsBusinessDataPriceData.fromJS(data["business_listings"]) : <any>undefined;
            this.errors = data["errors"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["errors"]) : <any>undefined;
            this.google = data["google"] ? AppendixGoogleBusinessDataPriceData.fromJS(data["google"]) : <any>undefined;
            this.social_media = data["social_media"] ? AppendixSocialMediaBusinessDataPriceData.fromJS(data["social_media"]) : <any>undefined;
            this.languages = data["languages"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["languages"]) : <any>undefined;
            this.locations = data["locations"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["locations"]) : <any>undefined;
            this.tripadvisor = data["tripadvisor"] ? AppendixTrBusinessDataPriceDataInfo.fromJS(data["tripadvisor"]) : <any>undefined;
            this.trustpilot = data["trustpilot"] ? AppendixTrBusinessDataPriceDataInfo.fromJS(data["trustpilot"]) : <any>undefined;
            this.yelp = data["yelp"] ? AppendixTrBusinessDataPriceDataInfo.fromJS(data["yelp"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"] ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(data["tasks_ready"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBusinessDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBusinessDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["business_listings"] = this.business_listings ? AppendixBusinessListingsBusinessDataPriceData.fromJS(this.business_listings)?.toJSON() : <any>undefined;
        data["errors"] = this.errors ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.errors)?.toJSON() : <any>undefined;
        data["google"] = this.google ? AppendixGoogleBusinessDataPriceData.fromJS(this.google)?.toJSON() : <any>undefined;
        data["social_media"] = this.social_media ? AppendixSocialMediaBusinessDataPriceData.fromJS(this.social_media)?.toJSON() : <any>undefined;
        data["languages"] = this.languages ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.languages)?.toJSON() : <any>undefined;
        data["locations"] = this.locations ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.locations)?.toJSON() : <any>undefined;
        data["tripadvisor"] = this.tripadvisor ? AppendixTrBusinessDataPriceDataInfo.fromJS(this.tripadvisor)?.toJSON() : <any>undefined;
        data["trustpilot"] = this.trustpilot ? AppendixTrBusinessDataPriceDataInfo.fromJS(this.trustpilot)?.toJSON() : <any>undefined;
        data["yelp"] = this.yelp ? AppendixTrBusinessDataPriceDataInfo.fromJS(this.yelp)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready ? AppendixTaskKeywordsDataPriceDataInfo.fromJS(this.tasks_ready)?.toJSON() : <any>undefined;
        return data;
    }
}