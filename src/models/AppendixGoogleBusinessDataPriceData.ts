import { AppendixAKeywordsDataPriceDataInfo, IAppendixAKeywordsDataPriceDataInfo } from "./AppendixAKeywordsDataPriceDataInfo";
import { AppendixHotelInfoGoogleBusinessDataPriceData, IAppendixHotelInfoGoogleBusinessDataPriceData } from "./AppendixHotelInfoGoogleBusinessDataPriceData";
import { AppendixGoogleBusinessDataPriceDataInfo, IAppendixGoogleBusinessDataPriceDataInfo } from "./AppendixGoogleBusinessDataPriceDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixGoogleBusinessDataPriceData   {
        
        extended_reviews?: AppendixAKeywordsDataPriceDataInfo | undefined
        
        hotel_info?: AppendixHotelInfoGoogleBusinessDataPriceData | undefined
        
        hotel_searches?: AppendixGoogleBusinessDataPriceDataInfo | undefined
        
        my_business_info?: AppendixGoogleBusinessDataPriceDataInfo | undefined
        
        my_business_updates?: AppendixGoogleBusinessDataPriceDataInfo | undefined
        
        questions_and_answers?: AppendixGoogleBusinessDataPriceDataInfo | undefined
        
        reviews?: AppendixGoogleBusinessDataPriceDataInfo | undefined

    [key: string]: any;

    }

export class AppendixGoogleBusinessDataPriceData  implements IAppendixGoogleBusinessDataPriceData {

    extended_reviews?: AppendixAKeywordsDataPriceDataInfo | undefined;

    hotel_info?: AppendixHotelInfoGoogleBusinessDataPriceData | undefined;

    hotel_searches?: AppendixGoogleBusinessDataPriceDataInfo | undefined;

    my_business_info?: AppendixGoogleBusinessDataPriceDataInfo | undefined;

    my_business_updates?: AppendixGoogleBusinessDataPriceDataInfo | undefined;

    questions_and_answers?: AppendixGoogleBusinessDataPriceDataInfo | undefined;

    reviews?: AppendixGoogleBusinessDataPriceDataInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixGoogleBusinessDataPriceData) {

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
            this.extended_reviews = data["extended_reviews"] ? AppendixAKeywordsDataPriceDataInfo.fromJS(data["extended_reviews"]) : <any>undefined;
            this.hotel_info = data["hotel_info"] ? AppendixHotelInfoGoogleBusinessDataPriceData.fromJS(data["hotel_info"]) : <any>undefined;
            this.hotel_searches = data["hotel_searches"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["hotel_searches"]) : <any>undefined;
            this.my_business_info = data["my_business_info"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["my_business_info"]) : <any>undefined;
            this.my_business_updates = data["my_business_updates"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["my_business_updates"]) : <any>undefined;
            this.questions_and_answers = data["questions_and_answers"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["questions_and_answers"]) : <any>undefined;
            this.reviews = data["reviews"] ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(data["reviews"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixGoogleBusinessDataPriceData {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixGoogleBusinessDataPriceData();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["extended_reviews"] = this.extended_reviews ? AppendixAKeywordsDataPriceDataInfo.fromJS(this.extended_reviews)?.toJSON() : <any>undefined;
        data["hotel_info"] = this.hotel_info ? AppendixHotelInfoGoogleBusinessDataPriceData.fromJS(this.hotel_info)?.toJSON() : <any>undefined;
        data["hotel_searches"] = this.hotel_searches ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.hotel_searches)?.toJSON() : <any>undefined;
        data["my_business_info"] = this.my_business_info ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.my_business_info)?.toJSON() : <any>undefined;
        data["my_business_updates"] = this.my_business_updates ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.my_business_updates)?.toJSON() : <any>undefined;
        data["questions_and_answers"] = this.questions_and_answers ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.questions_and_answers)?.toJSON() : <any>undefined;
        data["reviews"] = this.reviews ? AppendixGoogleBusinessDataPriceDataInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        return data;
    }
}