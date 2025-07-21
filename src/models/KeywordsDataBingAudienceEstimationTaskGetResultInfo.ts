import { AudienceEstimationInfo, IAudienceEstimationInfo } from "./AudienceEstimationInfo";

export interface IKeywordsDataBingAudienceEstimationTaskGetResultInfo   {
        
        /** monthly estimated impressions range */
        est_impressions?: AudienceEstimationInfo
        
        /** monthly estimated reach user count range */
        est_audience_size?: AudienceEstimationInfo
        
        /** monthly estimated click count range */
        est_clicks?: AudienceEstimationInfo
        
        /** monthly estimated spending range */
        est_spend?: AudienceEstimationInfo
        
        /** indicates the estimated cost per event with range result */
        est_cost_per_event?: AudienceEstimationInfo
        
        /** estimated click-through rate range */
        est_ctr?: AudienceEstimationInfo
        
        /** suggested bid value under the current targeting */
        suggested_bid?: number
        
        /** suggested daily budget value under the current targeting and bid */
        suggested_budget?: number
        
        /** indicates event lost count due to insufficient input bid */
        events_lost_to_bid?: number
        
        /** indicates the event lost count due to insufficient input budget */
        events_lost_to_budget?: number
        
        /** monthly estimated user count */
        est_reach_audience_size?: number
        
        /** monthly estimated impressions */
        est_reach_impressions?: number
        
        /** currency name
example: USDollar */
        currency?: string

    [key: string]: any;

    }

export class KeywordsDataBingAudienceEstimationTaskGetResultInfo  implements IKeywordsDataBingAudienceEstimationTaskGetResultInfo {
    
    /** monthly estimated impressions range */

    est_impressions?: AudienceEstimationInfo;
    
    /** monthly estimated reach user count range */

    est_audience_size?: AudienceEstimationInfo;
    
    /** monthly estimated click count range */

    est_clicks?: AudienceEstimationInfo;
    
    /** monthly estimated spending range */

    est_spend?: AudienceEstimationInfo;
    
    /** indicates the estimated cost per event with range result */

    est_cost_per_event?: AudienceEstimationInfo;
    
    /** estimated click-through rate range */

    est_ctr?: AudienceEstimationInfo;
    
    /** suggested bid value under the current targeting */

    suggested_bid?: number;
    
    /** suggested daily budget value under the current targeting and bid */

    suggested_budget?: number;
    
    /** indicates event lost count due to insufficient input bid */

    events_lost_to_bid?: number;
    
    /** indicates the event lost count due to insufficient input budget */

    events_lost_to_budget?: number;
    
    /** monthly estimated user count */

    est_reach_audience_size?: number;
    
    /** monthly estimated impressions */

    est_reach_impressions?: number;
    
    /** currency name
example: USDollar */

    currency?: string;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingAudienceEstimationTaskGetResultInfo) {

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
            this.est_impressions = data["est_impressions"] ? AudienceEstimationInfo.fromJS(data["est_impressions"]) : <any>undefined;
            this.est_audience_size = data["est_audience_size"] ? AudienceEstimationInfo.fromJS(data["est_audience_size"]) : <any>undefined;
            this.est_clicks = data["est_clicks"] ? AudienceEstimationInfo.fromJS(data["est_clicks"]) : <any>undefined;
            this.est_spend = data["est_spend"] ? AudienceEstimationInfo.fromJS(data["est_spend"]) : <any>undefined;
            this.est_cost_per_event = data["est_cost_per_event"] ? AudienceEstimationInfo.fromJS(data["est_cost_per_event"]) : <any>undefined;
            this.est_ctr = data["est_ctr"] ? AudienceEstimationInfo.fromJS(data["est_ctr"]) : <any>undefined;
            this.suggested_bid = data["suggested_bid"];
            this.suggested_budget = data["suggested_budget"];
            this.events_lost_to_bid = data["events_lost_to_bid"];
            this.events_lost_to_budget = data["events_lost_to_budget"];
            this.est_reach_audience_size = data["est_reach_audience_size"];
            this.est_reach_impressions = data["est_reach_impressions"];
            this.currency = data["currency"];
        }
    }

    static fromJS(data: any): KeywordsDataBingAudienceEstimationTaskGetResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingAudienceEstimationTaskGetResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["est_impressions"] = this.est_impressions ? AudienceEstimationInfo.fromJS(this.est_impressions)?.toJSON() : <any>undefined;
        data["est_audience_size"] = this.est_audience_size ? AudienceEstimationInfo.fromJS(this.est_audience_size)?.toJSON() : <any>undefined;
        data["est_clicks"] = this.est_clicks ? AudienceEstimationInfo.fromJS(this.est_clicks)?.toJSON() : <any>undefined;
        data["est_spend"] = this.est_spend ? AudienceEstimationInfo.fromJS(this.est_spend)?.toJSON() : <any>undefined;
        data["est_cost_per_event"] = this.est_cost_per_event ? AudienceEstimationInfo.fromJS(this.est_cost_per_event)?.toJSON() : <any>undefined;
        data["est_ctr"] = this.est_ctr ? AudienceEstimationInfo.fromJS(this.est_ctr)?.toJSON() : <any>undefined;
        data["suggested_bid"] = this.suggested_bid;
        data["suggested_budget"] = this.suggested_budget;
        data["events_lost_to_bid"] = this.events_lost_to_bid;
        data["events_lost_to_budget"] = this.events_lost_to_budget;
        data["est_reach_audience_size"] = this.est_reach_audience_size;
        data["est_reach_impressions"] = this.est_reach_impressions;
        data["currency"] = this.currency;
        return data;
    }
}