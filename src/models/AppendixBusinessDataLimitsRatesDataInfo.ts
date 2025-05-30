import { AppendixBusinessDataGoogleInfo, IAppendixBusinessDataGoogleInfo } from "./AppendixBusinessDataGoogleInfo";
import { AppendixBusinessDataDayLimitsRatesDataInfo, IAppendixBusinessDataDayLimitsRatesDataInfo } from "./AppendixBusinessDataDayLimitsRatesDataInfo";
import { AppendixSocialMediaBusinessDataLimitsRatesDataInfo, IAppendixSocialMediaBusinessDataLimitsRatesDataInfo } from "./AppendixSocialMediaBusinessDataLimitsRatesDataInfo";
import { AppendixBusinessListingsBusinessDataLimitsRatesDataInfo, IAppendixBusinessListingsBusinessDataLimitsRatesDataInfo } from "./AppendixBusinessListingsBusinessDataLimitsRatesDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixBusinessDataLimitsRatesDataInfo   {
        
        google?: AppendixBusinessDataGoogleInfo | undefined
        
        locations?: number | undefined
        
        languages?: number | undefined
        
        errors?: number | undefined
        
        yelp?: AppendixBusinessDataDayLimitsRatesDataInfo | undefined
        
        social_media?: AppendixSocialMediaBusinessDataLimitsRatesDataInfo | undefined
        
        tripadvisor?: AppendixBusinessDataDayLimitsRatesDataInfo | undefined
        
        trustpilot?: AppendixBusinessDataDayLimitsRatesDataInfo | undefined
        
        business_listings?: AppendixBusinessListingsBusinessDataLimitsRatesDataInfo | undefined
        
        tasks_ready?: number | undefined

    [key: string]: any;

    }

export class AppendixBusinessDataLimitsRatesDataInfo  implements IAppendixBusinessDataLimitsRatesDataInfo {

    google?: AppendixBusinessDataGoogleInfo | undefined;

    locations?: number | undefined;

    languages?: number | undefined;

    errors?: number | undefined;

    yelp?: AppendixBusinessDataDayLimitsRatesDataInfo | undefined;

    social_media?: AppendixSocialMediaBusinessDataLimitsRatesDataInfo | undefined;

    tripadvisor?: AppendixBusinessDataDayLimitsRatesDataInfo | undefined;

    trustpilot?: AppendixBusinessDataDayLimitsRatesDataInfo | undefined;

    business_listings?: AppendixBusinessListingsBusinessDataLimitsRatesDataInfo | undefined;

    tasks_ready?: number | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBusinessDataLimitsRatesDataInfo) {

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
            this.google = data["google"] ? AppendixBusinessDataGoogleInfo.fromJS(data["google"]) : <any>undefined;
            this.locations = data["locations"];
            this.languages = data["languages"];
            this.errors = data["errors"];
            this.yelp = data["yelp"] ? AppendixBusinessDataDayLimitsRatesDataInfo.fromJS(data["yelp"]) : <any>undefined;
            this.social_media = data["social_media"] ? AppendixSocialMediaBusinessDataLimitsRatesDataInfo.fromJS(data["social_media"]) : <any>undefined;
            this.tripadvisor = data["tripadvisor"] ? AppendixBusinessDataDayLimitsRatesDataInfo.fromJS(data["tripadvisor"]) : <any>undefined;
            this.trustpilot = data["trustpilot"] ? AppendixBusinessDataDayLimitsRatesDataInfo.fromJS(data["trustpilot"]) : <any>undefined;
            this.business_listings = data["business_listings"] ? AppendixBusinessListingsBusinessDataLimitsRatesDataInfo.fromJS(data["business_listings"]) : <any>undefined;
            this.tasks_ready = data["tasks_ready"];
        }
    }

    static fromJS(data: any): AppendixBusinessDataLimitsRatesDataInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBusinessDataLimitsRatesDataInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["google"] = this.google ? AppendixBusinessDataGoogleInfo.fromJS(this.google)?.toJSON() : <any>undefined;
        data["locations"] = this.locations;
        data["languages"] = this.languages;
        data["errors"] = this.errors;
        data["yelp"] = this.yelp ? AppendixBusinessDataDayLimitsRatesDataInfo.fromJS(this.yelp)?.toJSON() : <any>undefined;
        data["social_media"] = this.social_media ? AppendixSocialMediaBusinessDataLimitsRatesDataInfo.fromJS(this.social_media)?.toJSON() : <any>undefined;
        data["tripadvisor"] = this.tripadvisor ? AppendixBusinessDataDayLimitsRatesDataInfo.fromJS(this.tripadvisor)?.toJSON() : <any>undefined;
        data["trustpilot"] = this.trustpilot ? AppendixBusinessDataDayLimitsRatesDataInfo.fromJS(this.trustpilot)?.toJSON() : <any>undefined;
        data["business_listings"] = this.business_listings ? AppendixBusinessListingsBusinessDataLimitsRatesDataInfo.fromJS(this.business_listings)?.toJSON() : <any>undefined;
        data["tasks_ready"] = this.tasks_ready;
        return data;
    }
}