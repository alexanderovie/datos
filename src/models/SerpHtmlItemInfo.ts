export interface ISerpHtmlItemInfo   {
        
        /** serial number of the returned HTML page */
        page?: number
        
        /** date and time when the HTML page was scanned
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */
        date?: string
        
        /** HTML page */
        html?: string

    [key: string]: any;

    }

export class SerpHtmlItemInfo  implements ISerpHtmlItemInfo {
    
    /** serial number of the returned HTML page */

    page?: number;
    
    /** date and time when the HTML page was scanned
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00 */

    date?: string;
    
    /** HTML page */

    html?: string;

    [key: string]: any;


    constructor(data?: ISerpHtmlItemInfo) {

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
            this.page = data["page"];
            this.date = data["date"];
            this.html = data["html"];
        }
    }

    static fromJS(data: any): SerpHtmlItemInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpHtmlItemInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["page"] = this.page;
        data["date"] = this.date;
        data["html"] = this.html;
        return data;
    }
}