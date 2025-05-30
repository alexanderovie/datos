import { MonthlySearches, IMonthlySearches } from "./MonthlySearches";
import { ApiException, throwException } from "./ApiException"

export interface IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo   {
        
        /** keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */
        keyword?: string | undefined
        
        /** correct spelling of the keyword
Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link */
        spell?: string | undefined
        
        /** location code in a POST array
if there is no data, then the value is null */
        location_code?: number | undefined
        
        /** language code in a POST array
if there is no data, then the value is null */
        language_code?: string | undefined
        
        /** indicates whether data from partner networks included in the response */
        search_partners?: boolean | undefined
        
        /** competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article */
        competition?: string | undefined
        
        /** competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article */
        competition_index?: number | undefined
        
        /** monthly average search volume rate */
        search_volume?: number | undefined
        
        /** minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request */
        low_top_of_page_bid?: number | undefined
        
        /** maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request */
        high_top_of_page_bid?: number | undefined
        
        /** cost per click
indicates the amount paid for each click on the ad displayed for a given keyword */
        cpc?: number | undefined
        
        /** monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null */
        monthly_searches?: MonthlySearches[] | undefined

    [key: string]: any;

    }

export class KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo  implements IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo {
    
    /** keyword
keyword is returned with decoded %## (plus character ‘+’ will be decoded to a space character) */

    keyword?: string | undefined;
    
    /** correct spelling of the keyword
Note:if the keyword in the POST array appears to be misspelled, data will be returned for the correctly spelled keyword;
we use the functionality of Google Ads API to check and validate the spelling of keywords, learn more by this link */

    spell?: string | undefined;
    
    /** location code in a POST array
if there is no data, then the value is null */

    location_code?: number | undefined;
    
    /** language code in a POST array
if there is no data, then the value is null */

    language_code?: string | undefined;
    
    /** indicates whether data from partner networks included in the response */

    search_partners?: boolean | undefined;
    
    /** competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can take the following values: HIGH, MEDIUM, LOW;
if there is no data the value is null;
learn more about the metric in this help center article */

    competition?: string | undefined;
    
    /** competition
represents the relative amount of competition associated with the given keyword in paid SERP only;
this value is based on Google Ads data and can be between 0 and 100 (inclusive);
if there is no data the value is null;
learn more about the metric in this help center article */

    competition_index?: number | undefined;
    
    /** monthly average search volume rate */

    search_volume?: number | undefined;
    
    /** minimum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 20% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request */

    low_top_of_page_bid?: number | undefined;
    
    /** maximum bid for the ad to be displayed at the top of the first page
indicates the value greater than about 80% of the lowest bids for which ads were displayed (based on Google Ads statistics for advertisers);
the value may differ depending on the location specified in a POST request */

    high_top_of_page_bid?: number | undefined;
    
    /** cost per click
indicates the amount paid for each click on the ad displayed for a given keyword */

    cpc?: number | undefined;
    
    /** monthly searches
represents the (approximate) number of searches on this keyword idea (as available for the past twelve months by default), targeted to the specified geographic locations;
if there is no data then the value is null */

    monthly_searches?: MonthlySearches[] | undefined;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo) {

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
            this.keyword = data["keyword"];
            this.spell = data["spell"];
            this.location_code = data["location_code"];
            this.language_code = data["language_code"];
            this.search_partners = data["search_partners"];
            this.competition = data["competition"];
            this.competition_index = data["competition_index"];
            this.search_volume = data["search_volume"];
            this.low_top_of_page_bid = data["low_top_of_page_bid"];
            this.high_top_of_page_bid = data["high_top_of_page_bid"];
            this.cpc = data["cpc"];
            if (Array.isArray(data["monthly_searches"])) {
                this.monthly_searches = [];
                for (let item of data["monthly_searches"]) {
                    this.monthly_searches.push(MonthlySearches.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleAdsSearchVolumeTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["spell"] = this.spell;
        data["location_code"] = this.location_code;
        data["language_code"] = this.language_code;
        data["search_partners"] = this.search_partners;
        data["competition"] = this.competition;
        data["competition_index"] = this.competition_index;
        data["search_volume"] = this.search_volume;
        data["low_top_of_page_bid"] = this.low_top_of_page_bid;
        data["high_top_of_page_bid"] = this.high_top_of_page_bid;
        data["cpc"] = this.cpc;
        data["monthly_searches"] = null;
        if (Array.isArray(this.monthly_searches)) {
            data["monthly_searches"] = [];
            for (let item of this.monthly_searches) {
                if (item && typeof item.toJSON === "function") {
                    data["monthly_searches"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}