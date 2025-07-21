export interface IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo   {
        
        /** keywords
required field
the maximum number of keywords you can specify: 5
the maximum number of characters you can specify in a keyword: 100
the minimum number of characters must be greater than 1
comma characters (,) in the specified keywords will be unset and ignored
Note: keywords cannot consist of a combination of the following characters: < > | \ ' - + = ~ ! : * ( ) [ ] { }
Note: to obtain google_trends_topics_list and google_trends_queries_list items, specify no more than 1 keyword
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keywords?: string[]
        
        /** full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can use this field as an array to set several locations, each corresponding to a specific keyword – learn more;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
United Kingdom */
        location_name?: string
        
        /** search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can use this field as an array to set several locations, each corresponding to a specific keyword – learn more;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
2840 */
        location_code?: string
        
        /** full name of search engine language
optional field
default value: English
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
English */
        language_name?: string
        
        /** search engine language code
optional field
default value: en
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
en */
        language_code?: string
        
        /** type of element */
        type?: string
        
        /** google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories */
        category_code?: number
        
        /** starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */
        date_from?: string
        
        /** ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */
        date_to?: string
        
        /** preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_hour, past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years
possible values for web only:
2004_present
possible values for news, youtube, images, froogle:
2008_present */
        time_range?: string
        
        /** types of items returned
optional field
to speed up the execution of the request, specify one item at a time;
possible values:
'google_trends_graph', 'google_trends_map', 'google_trends_topics_list','google_trends_queries_list'
default value:
'google_trends_graph'
Note: to obtain google_trends_topics_list and google_trends_queries_list items, specify no more than 1 keyword in the keywords field */
        item_types?: string[]
        
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
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string

    [key: string]: any;

    }

export class KeywordsDataGoogleTrendsExploreTaskPostRequestInfo  implements IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo {
    
    /** keywords
required field
the maximum number of keywords you can specify: 5
the maximum number of characters you can specify in a keyword: 100
the minimum number of characters must be greater than 1
comma characters (,) in the specified keywords will be unset and ignored
Note: keywords cannot consist of a combination of the following characters: < > | \ ' - + = ~ ! : * ( ) [ ] { }
Note: to obtain google_trends_topics_list and google_trends_queries_list items, specify no more than 1 keyword
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keywords?: string[];
    
    /** full name of search engine location
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_code
you can use this field as an array to set several locations, each corresponding to a specific keyword – learn more;
you can receive the list of available locations of the search engine with their location_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
United Kingdom */

    location_name?: string;
    
    /** search engine location code
optional field
if you don’t use this field, you will recieve global results
if you use this field, you don’t need to specify location_name
you can use this field as an array to set several locations, each corresponding to a specific keyword – learn more;
you can receive the list of available locations of the search engines with their location_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/locations
example:
2840 */

    location_code?: string;
    
    /** full name of search engine language
optional field
default value: English
if you use this field, you don’t need to specify language_code
you can receive the list of available languages of the search engine with their language_name by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
English */

    language_name?: string;
    
    /** search engine language code
optional field
default value: en
if you use this field, you don’t need to specify language_name
you can receive the list of available languages of the search engine with their language_code by making a separate request to https://api.dataforseo.com/v3/keywords_data/google_trends/languages
example:
en */

    language_code?: string;
    
    /** type of element */

    type?: string;
    
    /** google trends search category
optional field
if you don’t specify this field, the 0 value will be applied by default and the search will be carried out across all available categories
you can receive the list of available categories with their category_code by making a separate request to the https://api.dataforseo.com/v3/keywords_data/google_trends/categories */

    category_code?: number;
    
    /** starting date of the time range
optional field
if you don’t specify this field, the current day and month of the preceding year will be used by default
minimal value for the web type: 2004-01-01
minimal value for other types: 2008-01-01
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */

    date_from?: string;
    
    /** ending date of the time range
optional field
if you don’t specify this field, the today’s date will be used by default
date format: 'yyyy-mm-dd'
example:
'2019-01-15' */

    date_to?: string;
    
    /** preset time ranges
optional field
if you specify date_from or date_to parameters, this field will be ignored when setting a task
possible values for all type parameters:
past_hour, past_4_hours, past_day, past_7_days, past_30_days, past_90_days, past_12_months, past_5_years
possible values for web only:
2004_present
possible values for news, youtube, images, froogle:
2008_present */

    time_range?: string;
    
    /** types of items returned
optional field
to speed up the execution of the request, specify one item at a time;
possible values:
'google_trends_graph', 'google_trends_map', 'google_trends_topics_list','google_trends_queries_list'
default value:
'google_trends_graph'
Note: to obtain google_trends_topics_list and google_trends_queries_list items, specify no more than 1 keyword in the keywords field */

    item_types?: string[];
    
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
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string;

    [key: string]: any;


    constructor(data?: IKeywordsDataGoogleTrendsExploreTaskPostRequestInfo) {

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
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.type = data["type"];
            this.category_code = data["category_code"];
            this.date_from = data["date_from"];
            this.date_to = data["date_to"];
            this.time_range = data["time_range"];
            this.item_types = data["item_types"];
            this.postback_url = data["postback_url"];
            this.pingback_url = data["pingback_url"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): KeywordsDataGoogleTrendsExploreTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new KeywordsDataGoogleTrendsExploreTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keywords"] = this.keywords;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["type"] = this.type;
        data["category_code"] = this.category_code;
        data["date_from"] = this.date_from;
        data["date_to"] = this.date_to;
        data["time_range"] = this.time_range;
        data["item_types"] = this.item_types;
        data["postback_url"] = this.postback_url;
        data["pingback_url"] = this.pingback_url;
        data["tag"] = this.tag;
        return data;
    }
}