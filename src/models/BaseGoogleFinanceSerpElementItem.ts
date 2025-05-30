import { ApiException, throwException } from "./ApiException"

export interface IBaseGoogleFinanceSerpElementItem   {
        
        /** type of element */
        type?: string | undefined

    [key: string]: any;

    }

export class BaseGoogleFinanceSerpElementItem  implements IBaseGoogleFinanceSerpElementItem {
    
    /** type of element */

    type?: string | undefined;

    [key: string]: any;


    protected discriminator: string;

    constructor(data?: IBaseGoogleFinanceSerpElementItem) {

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
        }
    }

    static fromJS(data: any): BaseGoogleFinanceSerpElementItem {
        data = typeof data === 'object' ? data : {};

        if (data["type"] === "google_finance_asset_pair_element") {

            const { GoogleFinanceAssetPairElementSerpElementItem } = require('./GoogleFinanceAssetPairElementSerpElementItem');
            let result = new GoogleFinanceAssetPairElementSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_index_element") {

            const { GoogleFinanceMarketIndexElementSerpElementItem } = require('./GoogleFinanceMarketIndexElementSerpElementItem');
            let result = new GoogleFinanceMarketIndexElementSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_instrument_element") {

            const { GoogleFinanceMarketInstrumentElementSerpElementItem } = require('./GoogleFinanceMarketInstrumentElementSerpElementItem');
            let result = new GoogleFinanceMarketInstrumentElementSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_hero_groups") {

            const { GoogleFinanceHeroGroupsSerpElementItem } = require('./GoogleFinanceHeroGroupsSerpElementItem');
            let result = new GoogleFinanceHeroGroupsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_interested") {

            const { GoogleFinanceInterestedSerpElementItem } = require('./GoogleFinanceInterestedSerpElementItem');
            let result = new GoogleFinanceInterestedSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_news") {

            const { GoogleFinanceNewsSerpElementItem } = require('./GoogleFinanceNewsSerpElementItem');
            let result = new GoogleFinanceNewsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_earnings_calendar") {

            const { GoogleFinanceEarningsCalendarSerpElementItem } = require('./GoogleFinanceEarningsCalendarSerpElementItem');
            let result = new GoogleFinanceEarningsCalendarSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_most_followed") {

            const { GoogleFinanceMostFollowedSerpElementItem } = require('./GoogleFinanceMostFollowedSerpElementItem');
            let result = new GoogleFinanceMostFollowedSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_market_trends") {

            const { GoogleFinanceMarketTrendsSerpElementItem } = require('./GoogleFinanceMarketTrendsSerpElementItem');
            let result = new GoogleFinanceMarketTrendsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_people_also_search") {

            const { GoogleFinancePeopleAlsoSearchSerpElementItem } = require('./GoogleFinancePeopleAlsoSearchSerpElementItem');
            let result = new GoogleFinancePeopleAlsoSearchSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_explore_market_trends") {

            const { GoogleFinanceExploreMarketTrendsSerpElementItem } = require('./GoogleFinanceExploreMarketTrendsSerpElementItem');
            let result = new GoogleFinanceExploreMarketTrendsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_quote") {

            const { GoogleFinanceQuoteSerpElementItem } = require('./GoogleFinanceQuoteSerpElementItem');
            let result = new GoogleFinanceQuoteSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_compare_to") {

            const { GoogleFinanceCompareToSerpElementItem } = require('./GoogleFinanceCompareToSerpElementItem');
            let result = new GoogleFinanceCompareToSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_financial") {

            const { GoogleFinanceFinancialSerpElementItem } = require('./GoogleFinanceFinancialSerpElementItem');
            let result = new GoogleFinanceFinancialSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_futures_chain") {

            const { GoogleFinanceFuturesChainSerpElementItem } = require('./GoogleFinanceFuturesChainSerpElementItem');
            let result = new GoogleFinanceFuturesChainSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_details") {

            const { GoogleFinanceDetailsSerpElementItem } = require('./GoogleFinanceDetailsSerpElementItem');
            let result = new GoogleFinanceDetailsSerpElementItem();
            result.init(data);
            return result;
        }
        if (data["type"] === "google_finance_about") {

            const { GoogleFinanceAboutSerpElementItem } = require('./GoogleFinanceAboutSerpElementItem');
            let result = new GoogleFinanceAboutSerpElementItem();
            result.init(data);
            return result;
        }

        let result = new BaseGoogleFinanceSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        return data;
    }
}