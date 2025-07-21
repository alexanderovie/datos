export interface IKeywordsDataBingSearchVolumeTaskPostRequestInfo   {
        
        /** keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[]
        
        /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom */
        location_name?: string
        
        /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840 */
        location_code?: number
        
        /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142 */
        location_coordinate?: string
        
        /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German */
        language_name?: string
        
        /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de */
        language_code?: string
        
        /** device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all */
        device?: string
        
        /** results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance */
        sort_by?: string
        
        /** starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
minimum value: two years back from today’s date
date format: 'yyyy-mm-dd'
example:
'2020-01-01'
Note: we do not recommend using a custom time range for the past year’s dates */
        date_from?: string
        
        /** ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
note: we do not recommend using a custom time range for the past year’s dates;
date format: 'yyyy-mm-dd'
example:
'2020-03-15'
Note: we do not recommend using a custom time range for the past year’s dates */
        date_to?: string
        
        /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string
        
        /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string
        
        /** Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks */
        search_partners?: boolean
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string

    [key: string]: any;

    }

export class KeywordsDataBingSearchVolumeTaskPostRequestInfo  implements IKeywordsDataBingSearchVolumeTaskPostRequestInfo {
    
    /** keywords
required field
The maximum number of keywords you can specify: 1000
The maximum number of characters for each keyword: 100
the specified keywords will be converted to lowercase, data will be provided in a separate array
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[];
    
    /** full name of search engine location
required field if you don’t specify location_code or location_coordinate
if you use this field, you don’t need to specify location_code or location_coordinate
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
London,England,United Kingdom */

    location_name?: string;
    
    /** search engine location code
required field if you don’t specify location_name or location_coordinate
if you use this field, you don’t need to specify location_name or location_coordinate
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/bing/locations
example:
2840 */

    location_code?: number;
    
    /** GPS coordinates of a location
required field if you don’t specify location_name or location_code
if you use this field, you don’t need to specify location_name or location_code
location_coordinate parameter should be specified in the “latitude,longitude” format
the data will be provided for the country the specified coordinates belong to
example:
52.6178549,-155.352142 */

    location_coordinate?: string;
    
    /** full name of search engine language
required field if you don’t specify language_code
if you use this field, you don’t need to specify language_code
supported languages:
English, French, German */

    language_name?: string;
    
    /** search engine language code
required field if you don’t specify language_name
if you use this field, you don’t need to specify language_name
supported languages:
en, fr, de */

    language_code?: string;
    
    /** device type
optional field
specify this field if you want to get the data for a particular device typepossible values: all, mobile, desktop, tablet
default value: all */

    device?: string;
    
    /** results sorting parameters
optional field
Use these parameters to sort the results by search_volume, cpc, competition or relevance in the descending order
default value: relevance */

    sort_by?: string;
    
    /** starting date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months
minimum value: two years back from today’s date
date format: 'yyyy-mm-dd'
example:
'2020-01-01'
Note: we do not recommend using a custom time range for the past year’s dates */

    date_from?: string;
    
    /** ending date of the time range
optional field
if you don’t specify this field, data will be provided for the last 12 months;
minimum value: two years back from today’s date;
maximum value: one month from today’s date;
note: we do not recommend using a custom time range for the past year’s dates;
date format: 'yyyy-mm-dd'
example:
'2020-03-15'
Note: we do not recommend using a custom time range for the past year’s dates */

    date_to?: string;
    
    /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string;
    
    /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string;
    
    /** Bing search partners type
optional field
if you specify true, the results will be delivered for owned, operated, and syndicated networks across Bing, Yahoo, AOL and partner sites that host Bing, AOL, and Yahoo search.
default value: false – results are returned for Bing, AOL, and Yahoo search networks */

    search_partners?: boolean;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string;

    [key: string]: any;


    constructor(data?: IKeywordsDataBingSearchVolumeTaskPostRequestInfo) {

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
            this.keywords = data["keywords"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.location_coordinate = data["location_coordinate"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.sort_by = data["sort_by"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
            this.search_partners = data["search_partners"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataBingSearchVolumeTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataBingSearchVolumeTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["location_coordinate"] = this.location_coordinate;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["sort_by"] = this.sort_by;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        data["search_partners"] = this.search_partners;
        data["tag"] = this.tag;
        return data;
    }
}