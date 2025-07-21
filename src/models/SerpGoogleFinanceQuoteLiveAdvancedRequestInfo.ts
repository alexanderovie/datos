export interface ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo   {
        
        /** ticker or stock symbol
required field
in this field you can pass the ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange;
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string
        
        /** full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom */
        location_name?: string
        
        /** search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840 */
        location_code?: number
        
        /** full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English */
        language_name?: string
        
        /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en */
        language_code?: string
        
        /** device type
optional field
possible value: desktop */
        device?: string
        
        /** device operating system
optional field
possible values: windows */
        os?: string
        
        /** time window for google_finance_quote graph
optional field
possible values: 1D, 5D, 1M, 6M, YTD, 1Y, 5Y, MAX
default value: 1D
Note: if you specify a value that is different from 1D, the charge per task will be multiplied by 2 */
        window?: string
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string

    [key: string]: any;

    }

export class SerpGoogleFinanceQuoteLiveAdvancedRequestInfo  implements ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo {
    
    /** ticker or stock symbol
required field
in this field you can pass the ticker symbol of publicly traded shares of a particular stock or security on a particular stock exchange;
you can specify up to 700 characters in the keyword field;
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”;
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string;
    
    /** full name of search engine location
required field if you don’t specify location_code
if you use this field, you don’t need to specify location_code
you can receive the list of available locations of the search engine with their location_name by making a separate request to  https://api.dataforseo.com/v3/serp/google/locations
example:
London,England,United Kingdom */

    location_name?: string;
    
    /** search engine location code
required field if you don’t specify location_name
if you use this field, you don’t need to specify location_name
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/serp/google/locations
example:
2840 */

    location_code?: number;
    
    /** full name of search engine language
required field if you don’t specify language_code 
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
English */

    language_name?: string;
    
    /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to the https://api.dataforseo.com/v3/serp/google/languages
example:
en */

    language_code?: string;
    
    /** device type
optional field
possible value: desktop */

    device?: string;
    
    /** device operating system
optional field
possible values: windows */

    os?: string;
    
    /** time window for google_finance_quote graph
optional field
possible values: 1D, 5D, 1M, 6M, YTD, 1Y, 5Y, MAX
default value: 1D
Note: if you specify a value that is different from 1D, the charge per task will be multiplied by 2 */

    window?: string;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string;

    [key: string]: any;


    constructor(data?: ISerpGoogleFinanceQuoteLiveAdvancedRequestInfo) {

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
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.os = data["os"];
            this.window = data["window"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): SerpGoogleFinanceQuoteLiveAdvancedRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleFinanceQuoteLiveAdvancedRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["os"] = this.os;
        data["window"] = this.window;
        data["tag"] = this.tag;
        return data;
    }
}