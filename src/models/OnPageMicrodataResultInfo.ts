import { CrawlStatusInfo, ICrawlStatusInfo } from "./CrawlStatusInfo";
import { TestSummary, ITestSummary } from "./TestSummary";
import { OnPageMicrodataInfoItem, IOnPageMicrodataInfoItem } from "./OnPageMicrodataInfoItem";

export interface IOnPageMicrodataResultInfo   {
        
        /** status of the crawling session
possible values: in_progress, finished */
        crawl_progress?: string
        
        /** details of the crawling session */
        crawl_status?: CrawlStatusInfo
        
        /** microdata validation test results */
        test_summary?: TestSummary
        
        /** number of items in the results array */
        items_count?: number
        
        /** items array */
        items?: OnPageMicrodataInfoItem[]

    [key: string]: any;

    }

export class OnPageMicrodataResultInfo  implements IOnPageMicrodataResultInfo {
    
    /** status of the crawling session
possible values: in_progress, finished */

    crawl_progress?: string;
    
    /** details of the crawling session */

    crawl_status?: CrawlStatusInfo;
    
    /** microdata validation test results */

    test_summary?: TestSummary;
    
    /** number of items in the results array */

    items_count?: number;
    
    /** items array */

    items?: OnPageMicrodataInfoItem[];

    [key: string]: any;


    constructor(data?: IOnPageMicrodataResultInfo) {

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
            this.crawl_progress = data["crawl_progress"];
            this.crawl_status = data["crawl_status"] ? CrawlStatusInfo.fromJS(data["crawl_status"]) : <any>undefined;
            this.test_summary = data["test_summary"] ? TestSummary.fromJS(data["test_summary"]) : <any>undefined;
            this.items_count = data["items_count"];
            if (Array.isArray(data["items"])) {
                this.items = [];
                for (let item of data["items"]) {
                    this.items.push(OnPageMicrodataInfoItem.fromJS(item));
                }
            }
        }
    }

    static fromJS(data: any): OnPageMicrodataResultInfo {
        data = typeof data === 'object' ? data : {};


        let result = new OnPageMicrodataResultInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["crawl_progress"] = this.crawl_progress;
        data["crawl_status"] = this.crawl_status ? CrawlStatusInfo.fromJS(this.crawl_status)?.toJSON() : <any>undefined;
        data["test_summary"] = this.test_summary ? TestSummary.fromJS(this.test_summary)?.toJSON() : <any>undefined;
        data["items_count"] = this.items_count;
        data["items"] = null;
        if (Array.isArray(this.items)) {
            data["items"] = [];
            for (let item of this.items) {
                if (item && typeof item.toJSON === "function") {
                    data["items"].push(item?.toJSON());
                }
            }
        }
        return data;
    }
}