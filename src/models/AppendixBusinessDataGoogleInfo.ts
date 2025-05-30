import { AppendixInfo, IAppendixInfo } from "./AppendixInfo";
import { AppendixSerpDaysRatesDataInfo, IAppendixSerpDaysRatesDataInfo } from "./AppendixSerpDaysRatesDataInfo";
import { ApiException, throwException } from "./ApiException"

export interface IAppendixBusinessDataGoogleInfo   {
        
        my_business_info?: AppendixInfo | undefined
        
        my_business_updates?: AppendixInfo | undefined
        
        hotel_info?: AppendixSerpDaysRatesDataInfo | undefined
        
        hotel_searches?: AppendixInfo | undefined
        
        reviews?: AppendixInfo | undefined
        
        questions_and_answers?: AppendixInfo | undefined
        
        extended_reviews?: AppendixInfo | undefined

    [key: string]: any;

    }

export class AppendixBusinessDataGoogleInfo  implements IAppendixBusinessDataGoogleInfo {

    my_business_info?: AppendixInfo | undefined;

    my_business_updates?: AppendixInfo | undefined;

    hotel_info?: AppendixSerpDaysRatesDataInfo | undefined;

    hotel_searches?: AppendixInfo | undefined;

    reviews?: AppendixInfo | undefined;

    questions_and_answers?: AppendixInfo | undefined;

    extended_reviews?: AppendixInfo | undefined;

    [key: string]: any;


    constructor(data?: IAppendixBusinessDataGoogleInfo) {

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
            this.my_business_info = data["my_business_info"] ? AppendixInfo.fromJS(data["my_business_info"]) : <any>undefined;
            this.my_business_updates = data["my_business_updates"] ? AppendixInfo.fromJS(data["my_business_updates"]) : <any>undefined;
            this.hotel_info = data["hotel_info"] ? AppendixSerpDaysRatesDataInfo.fromJS(data["hotel_info"]) : <any>undefined;
            this.hotel_searches = data["hotel_searches"] ? AppendixInfo.fromJS(data["hotel_searches"]) : <any>undefined;
            this.reviews = data["reviews"] ? AppendixInfo.fromJS(data["reviews"]) : <any>undefined;
            this.questions_and_answers = data["questions_and_answers"] ? AppendixInfo.fromJS(data["questions_and_answers"]) : <any>undefined;
            this.extended_reviews = data["extended_reviews"] ? AppendixInfo.fromJS(data["extended_reviews"]) : <any>undefined;
        }
    }

    static fromJS(data: any): AppendixBusinessDataGoogleInfo {
        data = typeof data === 'object' ? data : {};


        let result = new AppendixBusinessDataGoogleInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["my_business_info"] = this.my_business_info ? AppendixInfo.fromJS(this.my_business_info)?.toJSON() : <any>undefined;
        data["my_business_updates"] = this.my_business_updates ? AppendixInfo.fromJS(this.my_business_updates)?.toJSON() : <any>undefined;
        data["hotel_info"] = this.hotel_info ? AppendixSerpDaysRatesDataInfo.fromJS(this.hotel_info)?.toJSON() : <any>undefined;
        data["hotel_searches"] = this.hotel_searches ? AppendixInfo.fromJS(this.hotel_searches)?.toJSON() : <any>undefined;
        data["reviews"] = this.reviews ? AppendixInfo.fromJS(this.reviews)?.toJSON() : <any>undefined;
        data["questions_and_answers"] = this.questions_and_answers ? AppendixInfo.fromJS(this.questions_and_answers)?.toJSON() : <any>undefined;
        data["extended_reviews"] = this.extended_reviews ? AppendixInfo.fromJS(this.extended_reviews)?.toJSON() : <any>undefined;
        return data;
    }
}