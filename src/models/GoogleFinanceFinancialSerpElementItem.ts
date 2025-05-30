import { MetricsInfo, IMetricsInfo } from "./MetricsInfo";
import { BaseGoogleFinanceSerpElementItem, IBaseGoogleFinanceSerpElementItem } from "./BaseGoogleFinanceSerpElementItem";
import { ApiException, throwException } from "./ApiException"

export interface IGoogleFinanceFinancialSerpElementItem  extends IBaseGoogleFinanceSerpElementItem    {
        
        /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */
        rank_group?: number | undefined
        
        /** absolute rank in SERP
absolute position among all the elements in SERP */
        rank_absolute?: number | undefined
        
        /** quarterly google finance metrics */
        quarterly_metrics?: MetricsInfo[] | undefined
        
        /** annual google finance metrics */
        annual_metrics?: MetricsInfo[] | undefined

    [key: string]: any;

    }

export class GoogleFinanceFinancialSerpElementItem  extends BaseGoogleFinanceSerpElementItem   implements IGoogleFinanceFinancialSerpElementItem {
    
    /** group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group */

    rank_group?: number | undefined;
    
    /** absolute rank in SERP
absolute position among all the elements in SERP */

    rank_absolute?: number | undefined;
    
    /** quarterly google finance metrics */

    quarterly_metrics?: MetricsInfo[] | undefined;
    
    /** annual google finance metrics */

    annual_metrics?: MetricsInfo[] | undefined;

    [key: string]: any;


    constructor(data?: IGoogleFinanceFinancialSerpElementItem) {
    super(data);

    }

    init(data?: any) {
        super.init(data);
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    this[property] = data[property];
            }
            this.rank_group = data["rank_group"];
            this.rank_absolute = data["rank_absolute"];
            if (Array.isArray(data["quarterly_metrics"])) {
                this.quarterly_metrics = [];
                for (let item of data["quarterly_metrics"]) {
                    this.quarterly_metrics.push(MetricsInfo.fromJS(item));
                }
            }
            if (Array.isArray(data["annual_metrics"])) {
                this.annual_metrics = [];
                for (let item of data["annual_metrics"]) {
                    this.annual_metrics.push(MetricsInfo.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): GoogleFinanceFinancialSerpElementItem {
        data = typeof data === 'object' ? data : {};


        let result = new GoogleFinanceFinancialSerpElementItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

         
        super.toJSON(data);
        
        
        data["rank_group"] = this.rank_group;
        data["rank_absolute"] = this.rank_absolute;
        data["quarterly_metrics"] = null;
        if (Array.isArray(this.quarterly_metrics)) {
            data["quarterly_metrics"] = [];
            for (let item of this.quarterly_metrics) {
                if (item && typeof item.toJSON === "function") {
                    data["quarterly_metrics"].push(item?.toJSON());
                }
            }
        }
        data["annual_metrics"] = null;
        if (Array.isArray(this.annual_metrics)) {
            data["annual_metrics"] = [];
            for (let item of this.annual_metrics) {
                if (item && typeof item.toJSON === "function") {
                    data["annual_metrics"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}