import { ApiException, throwException } from "./ApiException"

export interface IPaidMetricsInfo   {
        
        /** type of element */
        type?: string | undefined
        
        /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */
        timestamp?: string | undefined
        
        /** revenue value */
        revenue?: number | undefined
        
        /** change in revenue */
        revenue_delta?: number | undefined
        
        /** operating expense value */
        operating_expense?: number | undefined
        
        /** change in operating expense */
        operating_expense_delta?: number | undefined
        
        /** net income value */
        net_income?: number | undefined
        
        /** change in net income */
        net_income_delta?: number | undefined
        
        /** net profit margin value */
        net_profit_margin?: number | undefined
        
        /** change in net profit margin */
        net_profit_margin_delta?: number | undefined
        
        /** earnings per share value */
        earnings_per_share?: number | undefined
        
        /** change in earnings per share */
        earnings_per_share_delta?: number | undefined
        
        /** earnings before interest, taxes, deprecation, amortisation */
        ebitda?: number | undefined
        
        /** change in ebitda */
        ebitda_delta?: number | undefined
        
        /** effective tax rate value */
        effective_tax_rate?: number | undefined
        
        /** cash and short-term investments value */
        cash_and_short_term_investments?: number | undefined
        
        /** change in cash and short-term investments */
        cash_and_short_term_investments_delta?: number | undefined
        
        /** total assets value */
        total_assets?: number | undefined
        
        /** change in total assets */
        total_assets_delta?: number | undefined
        
        /** total liabilities value */
        total_liabilities?: number | undefined
        
        /** change in total liabilities */
        total_liabilities_delta?: number | undefined
        
        /** total equity value */
        total_equity?: number | undefined
        
        /** outstanding shares value */
        shares_outstanding?: number | undefined
        
        /** price to book */
        price_to_book?: number | undefined
        
        /** return on assets */
        return_on_assets?: number | undefined
        
        /** return on capital */
        return_on_capital?: number | undefined
        
        /** cash from operations */
        cash_from_operations?: number | undefined
        
        /** change in cash from operations */
        cash_from_operations_delta?: number | undefined
        
        /** cash from investing */
        cash_from_investing?: number | undefined
        
        /** change in cash from investing */
        cash_from_investing_delta?: number | undefined
        
        /** cash from financing/em> */
        cash_from_financing?: number | undefined
        
        /** change in cash from financing */
        cash_from_financing_delta?: number | undefined
        
        /** net change in cash */
        net_change_in_cash?: number | undefined
        
        /** change in net change in cash */
        net_change_in_cash_delta?: number | undefined
        
        /** free cash flow value */
        free_cash_flow?: number | undefined
        
        /** change in free cash flow */
        free_cash_flow_delta?: number | undefined
        
        /** number of paid SERPs where the domain ranks #1 */
        pos_1?: number | undefined
        
        /** number of paid SERPs where the domain ranks #2-3 */
        pos_2_3?: number | undefined
        
        /** number of paid SERPs where the domain ranks #4-10 */
        pos_4_10?: number | undefined
        
        /** number of paid SERPs where the domain ranks #11-20 */
        pos_11_20?: number | undefined
        
        /** number of paid SERPs where the domain ranks #21-30 */
        pos_21_30?: number | undefined
        
        /** number of paid SERPs where the domain ranks #31-40 */
        pos_31_40?: number | undefined
        
        /** number of paid SERPs where the domain ranks #41-50 */
        pos_41_50?: number | undefined
        
        /** number of paid SERPs where the domain ranks #51-60 */
        pos_51_60?: number | undefined
        
        /** number of paid SERPs where the domain ranks #61-70 */
        pos_61_70?: number | undefined
        
        /** number of paid SERPs where the domain ranks #71-80 */
        pos_71_80?: number | undefined
        
        /** number of paid SERPs where the domain ranks #81-90 */
        pos_81_90?: number | undefined
        
        /** number of paid SERPs where the domain ranks #91-100 */
        pos_91_100?: number | undefined
        
        /** estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article */
        etv?: number | undefined
        
        /** total count of paid SERPs that contain the domain */
        count?: number | undefined
        
        /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values
learn more about how the metric is calculated in this help center article */
        estimated_paid_traffic_cost?: number | undefined

    [key: string]: any;

    }

export class PaidMetricsInfo  implements IPaidMetricsInfo {
    
    /** type of element */

    type?: string | undefined;
    
    /** date and time of the value readout
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2025-02-10 09:40:00 +00:00 */

    timestamp?: string | undefined;
    
    /** revenue value */

    revenue?: number | undefined;
    
    /** change in revenue */

    revenue_delta?: number | undefined;
    
    /** operating expense value */

    operating_expense?: number | undefined;
    
    /** change in operating expense */

    operating_expense_delta?: number | undefined;
    
    /** net income value */

    net_income?: number | undefined;
    
    /** change in net income */

    net_income_delta?: number | undefined;
    
    /** net profit margin value */

    net_profit_margin?: number | undefined;
    
    /** change in net profit margin */

    net_profit_margin_delta?: number | undefined;
    
    /** earnings per share value */

    earnings_per_share?: number | undefined;
    
    /** change in earnings per share */

    earnings_per_share_delta?: number | undefined;
    
    /** earnings before interest, taxes, deprecation, amortisation */

    ebitda?: number | undefined;
    
    /** change in ebitda */

    ebitda_delta?: number | undefined;
    
    /** effective tax rate value */

    effective_tax_rate?: number | undefined;
    
    /** cash and short-term investments value */

    cash_and_short_term_investments?: number | undefined;
    
    /** change in cash and short-term investments */

    cash_and_short_term_investments_delta?: number | undefined;
    
    /** total assets value */

    total_assets?: number | undefined;
    
    /** change in total assets */

    total_assets_delta?: number | undefined;
    
    /** total liabilities value */

    total_liabilities?: number | undefined;
    
    /** change in total liabilities */

    total_liabilities_delta?: number | undefined;
    
    /** total equity value */

    total_equity?: number | undefined;
    
    /** outstanding shares value */

    shares_outstanding?: number | undefined;
    
    /** price to book */

    price_to_book?: number | undefined;
    
    /** return on assets */

    return_on_assets?: number | undefined;
    
    /** return on capital */

    return_on_capital?: number | undefined;
    
    /** cash from operations */

    cash_from_operations?: number | undefined;
    
    /** change in cash from operations */

    cash_from_operations_delta?: number | undefined;
    
    /** cash from investing */

    cash_from_investing?: number | undefined;
    
    /** change in cash from investing */

    cash_from_investing_delta?: number | undefined;
    
    /** cash from financing/em> */

    cash_from_financing?: number | undefined;
    
    /** change in cash from financing */

    cash_from_financing_delta?: number | undefined;
    
    /** net change in cash */

    net_change_in_cash?: number | undefined;
    
    /** change in net change in cash */

    net_change_in_cash_delta?: number | undefined;
    
    /** free cash flow value */

    free_cash_flow?: number | undefined;
    
    /** change in free cash flow */

    free_cash_flow_delta?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #1 */

    pos_1?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #2-3 */

    pos_2_3?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #4-10 */

    pos_4_10?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #11-20 */

    pos_11_20?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #21-30 */

    pos_21_30?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #31-40 */

    pos_31_40?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #41-50 */

    pos_41_50?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #51-60 */

    pos_51_60?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #61-70 */

    pos_61_70?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #71-80 */

    pos_71_80?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #81-90 */

    pos_81_90?: number | undefined;
    
    /** number of paid SERPs where the domain ranks #91-100 */

    pos_91_100?: number | undefined;
    
    /** estimated traffic volume
estimated paid monthly traffic to the domain
calculated as the product of CTR (click-through-rate) and search volume values of all keywords the domain ranks for
learn more about how the metric is calculated in this help center article */

    etv?: number | undefined;
    
    /** total count of paid SERPs that contain the domain */

    count?: number | undefined;
    
    /** estimated cost of monthly search traffic
represents the estimated cost of paid monthly traffic (USD) based on etv and cpc values
learn more about how the metric is calculated in this help center article */

    estimated_paid_traffic_cost?: number | undefined;

    [key: string]: any;


    constructor(data?: IPaidMetricsInfo) {

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
            this.type = data["type"];
            this.timestamp = data["timestamp"];
            this.revenue = data["revenue"];
            this.revenue_delta = data["revenue_delta"];
            this.operating_expense = data["operating_expense"];
            this.operating_expense_delta = data["operating_expense_delta"];
            this.net_income = data["net_income"];
            this.net_income_delta = data["net_income_delta"];
            this.net_profit_margin = data["net_profit_margin"];
            this.net_profit_margin_delta = data["net_profit_margin_delta"];
            this.earnings_per_share = data["earnings_per_share"];
            this.earnings_per_share_delta = data["earnings_per_share_delta"];
            this.ebitda = data["ebitda"];
            this.ebitda_delta = data["ebitda_delta"];
            this.effective_tax_rate = data["effective_tax_rate"];
            this.cash_and_short_term_investments = data["cash_and_short_term_investments"];
            this.cash_and_short_term_investments_delta = data["cash_and_short_term_investments_delta"];
            this.total_assets = data["total_assets"];
            this.total_assets_delta = data["total_assets_delta"];
            this.total_liabilities = data["total_liabilities"];
            this.total_liabilities_delta = data["total_liabilities_delta"];
            this.total_equity = data["total_equity"];
            this.shares_outstanding = data["shares_outstanding"];
            this.price_to_book = data["price_to_book"];
            this.return_on_assets = data["return_on_assets"];
            this.return_on_capital = data["return_on_capital"];
            this.cash_from_operations = data["cash_from_operations"];
            this.cash_from_operations_delta = data["cash_from_operations_delta"];
            this.cash_from_investing = data["cash_from_investing"];
            this.cash_from_investing_delta = data["cash_from_investing_delta"];
            this.cash_from_financing = data["cash_from_financing"];
            this.cash_from_financing_delta = data["cash_from_financing_delta"];
            this.net_change_in_cash = data["net_change_in_cash"];
            this.net_change_in_cash_delta = data["net_change_in_cash_delta"];
            this.free_cash_flow = data["free_cash_flow"];
            this.free_cash_flow_delta = data["free_cash_flow_delta"];
            this.pos_1 = data["pos_1"];
            this.pos_2_3 = data["pos_2_3"];
            this.pos_4_10 = data["pos_4_10"];
            this.pos_11_20 = data["pos_11_20"];
            this.pos_21_30 = data["pos_21_30"];
            this.pos_31_40 = data["pos_31_40"];
            this.pos_41_50 = data["pos_41_50"];
            this.pos_51_60 = data["pos_51_60"];
            this.pos_61_70 = data["pos_61_70"];
            this.pos_71_80 = data["pos_71_80"];
            this.pos_81_90 = data["pos_81_90"];
            this.pos_91_100 = data["pos_91_100"];
            this.etv = data["etv"];
            this.count = data["count"];
            this.estimated_paid_traffic_cost = data["estimated_paid_traffic_cost"];
        }
    }

    static fromJS(data: any): PaidMetricsInfo {
        data = typeof data === 'object' ? data : {};


        let result = new PaidMetricsInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["type"] = this.type;
        data["timestamp"] = this.timestamp;
        data["revenue"] = this.revenue;
        data["revenue_delta"] = this.revenue_delta;
        data["operating_expense"] = this.operating_expense;
        data["operating_expense_delta"] = this.operating_expense_delta;
        data["net_income"] = this.net_income;
        data["net_income_delta"] = this.net_income_delta;
        data["net_profit_margin"] = this.net_profit_margin;
        data["net_profit_margin_delta"] = this.net_profit_margin_delta;
        data["earnings_per_share"] = this.earnings_per_share;
        data["earnings_per_share_delta"] = this.earnings_per_share_delta;
        data["ebitda"] = this.ebitda;
        data["ebitda_delta"] = this.ebitda_delta;
        data["effective_tax_rate"] = this.effective_tax_rate;
        data["cash_and_short_term_investments"] = this.cash_and_short_term_investments;
        data["cash_and_short_term_investments_delta"] = this.cash_and_short_term_investments_delta;
        data["total_assets"] = this.total_assets;
        data["total_assets_delta"] = this.total_assets_delta;
        data["total_liabilities"] = this.total_liabilities;
        data["total_liabilities_delta"] = this.total_liabilities_delta;
        data["total_equity"] = this.total_equity;
        data["shares_outstanding"] = this.shares_outstanding;
        data["price_to_book"] = this.price_to_book;
        data["return_on_assets"] = this.return_on_assets;
        data["return_on_capital"] = this.return_on_capital;
        data["cash_from_operations"] = this.cash_from_operations;
        data["cash_from_operations_delta"] = this.cash_from_operations_delta;
        data["cash_from_investing"] = this.cash_from_investing;
        data["cash_from_investing_delta"] = this.cash_from_investing_delta;
        data["cash_from_financing"] = this.cash_from_financing;
        data["cash_from_financing_delta"] = this.cash_from_financing_delta;
        data["net_change_in_cash"] = this.net_change_in_cash;
        data["net_change_in_cash_delta"] = this.net_change_in_cash_delta;
        data["free_cash_flow"] = this.free_cash_flow;
        data["free_cash_flow_delta"] = this.free_cash_flow_delta;
        data["pos_1"] = this.pos_1;
        data["pos_2_3"] = this.pos_2_3;
        data["pos_4_10"] = this.pos_4_10;
        data["pos_11_20"] = this.pos_11_20;
        data["pos_21_30"] = this.pos_21_30;
        data["pos_31_40"] = this.pos_31_40;
        data["pos_41_50"] = this.pos_41_50;
        data["pos_51_60"] = this.pos_51_60;
        data["pos_61_70"] = this.pos_61_70;
        data["pos_71_80"] = this.pos_71_80;
        data["pos_81_90"] = this.pos_81_90;
        data["pos_91_100"] = this.pos_91_100;
        data["etv"] = this.etv;
        data["count"] = this.count;
        data["estimated_paid_traffic_cost"] = this.estimated_paid_traffic_cost;
        return data;
    }
}