import { DataforseoLabsMetricsInfo, IDataforseoLabsMetricsInfo } from "./DataforseoLabsMetricsInfo";
import { ApiException, throwException } from "./ApiException"

export interface IDataforseoLabsRelevantPagesLiveItem   {
        
        /** search engine type */
        se_type?: string | undefined
        
        /** absolute URL of the relevant page */
        page_address?: string | undefined
        
        /** rankings and traffic metrics for the relevant page */
        metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined

    [key: string]: any;

    }

export class DataforseoLabsRelevantPagesLiveItem  implements IDataforseoLabsRelevantPagesLiveItem {
    
    /** search engine type */

    se_type?: string | undefined;
    
    /** absolute URL of the relevant page */

    page_address?: string | undefined;
    
    /** rankings and traffic metrics for the relevant page */

    metrics?: { [key: string]: DataforseoLabsMetricsInfo; } | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsRelevantPagesLiveItem) {

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
            this.se_type = data["se_type"];
            this.page_address = data["page_address"];
            this.metrics = data["metrics"];
        }
    }

    static fromJS(data: any): DataforseoLabsRelevantPagesLiveItem {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsRelevantPagesLiveItem();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["se_type"] = this.se_type;
        data["page_address"] = this.page_address;
        data["metrics"] = this.metrics;
        return data;
    }
}