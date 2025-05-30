import { ApiException, throwException } from "./ApiException"

export interface ISerpGoogleDatasetSearchTaskPostRequestInfo   {
        
        /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”.
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */
        keyword?: string | undefined
        
        /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */
        priority?: number | undefined
        
        /** parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance */
        depth?: number | undefined
        
        /** full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English */
        language_name?: string | undefined
        
        /** search engine language code
optional field
possible value:
en */
        language_code?: string | undefined
        
        /** device type
optional field
possible value: desktop */
        device?: string | undefined
        
        /** device operating system
optional field
possible values: windows, macos
default value: windows */
        os?: string | undefined
        
        /** last time the dataset was updated
optional field
possible values: 1m, 1y, 3y */
        last_updated?: string | undefined
        
        /** file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular */
        file_formats?: string[] | undefined
        
        /** usage rights of the dataset
optional field
possible values: commercial, noncommercial */
        usage_rights?: string | undefined
        
        /** indicates whether displayed datasets are free
optional field
possible values: true, false */
        is_free?: boolean | undefined
        
        /** dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */
        topics?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined
        
        /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        postback_url?: string | undefined
        
        /** postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
only value: advanced */
        postback_data?: string | undefined
        
        /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */
        pingback_url?: string | undefined

    [key: string]: any;

    }

export class SerpGoogleDatasetSearchTaskPostRequestInfo  implements ISerpGoogleDatasetSearchTaskPostRequestInfo {
    
    /** keyword
required field
you can specify up to 700 characters in the keyword field
all %## will be decoded (plus character ‘+’ will be decoded to a space character)
if you need to use the “%” character for your keyword, please specify it as “%25”;
if you need to use the “+” character for your keyword, please specify it as “%2B”.
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article */

    keyword?: string | undefined;
    
    /** task priority
optional field
can take the following values:
1 – normal execution priority (set by default)
2 – high execution priority
You will be additionally charged for the tasks with high execution priority.
The cost can be calculated on the Pricing page. */

    priority?: number | undefined;
    
    /** parsing depth
optional field
number of results in SERP
default value: 20
max value: 700
Note: your account will be billed per each SERP containing up to 20 results;
thus, setting a depth above 20 may result in additional charges if the search engine returns more than 20 results;
if the specified depth is higher than the number of results in the response, the difference will be refunded automatically to your account balance */

    depth?: number | undefined;
    
    /** full name of search engine language
optional field
if you use this field, you don’t need to specify language_code
possible value:
English */

    language_name?: string | undefined;
    
    /** search engine language code
optional field
possible value:
en */

    language_code?: string | undefined;
    
    /** device type
optional field
possible value: desktop */

    device?: string | undefined;
    
    /** device operating system
optional field
possible values: windows, macos
default value: windows */

    os?: string | undefined;
    
    /** last time the dataset was updated
optional field
possible values: 1m, 1y, 3y */

    last_updated?: string | undefined;
    
    /** file formats of the dataset
optional field
possible values: other, archive, text, image, document, tabular */

    file_formats?: string[] | undefined;
    
    /** usage rights of the dataset
optional field
possible values: commercial, noncommercial */

    usage_rights?: string | undefined;
    
    /** indicates whether displayed datasets are free
optional field
possible values: true, false */

    is_free?: boolean | undefined;
    
    /** dataset topics
optional field
possible values: humanities, social_sciences, life_sciences, agriculture, natural_sciences, geo, computer, architecture_and_urban_planning, engineering */

    topics?: string[] | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;
    
    /** return URL for sending task results
optional field
once the task is completed, we will send a POST request with its results compressed in the gzip format to the postback_url you specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request
example:
http://your-server.com/postbackscript?id=$id
http://your-server.com/postbackscript?id=$id&tag=$tag
Note: special characters in postback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    postback_url?: string | undefined;
    
    /** postback_url datatype
required field if you specify postback_url
corresponds to the datatype that will be sent to your server
only value: advanced */

    postback_data?: string | undefined;
    
    /** notification URL of a completed task
optional field
when a task is completed we will notify you by GET request sent to the URL you have specified
you can use the ‘$id’ string as a $id variable and ‘$tag’ as urlencoded $tag variable. We will set the necessary values before sending the request.
example:
http://your-server.com/pingscript?id=$id
http://your-server.com/pingscript?id=$id&tag=$tag
Note: special characters in pingback_url will be urlencoded;
i.a., the # character will be encoded into %23
learn more on our Help Center */

    pingback_url?: string | undefined;

    [key: string]: any;


    constructor(data?: ISerpGoogleDatasetSearchTaskPostRequestInfo) {

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
            this.priority = data["priority"];
            this.depth = data["depth"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.device = data["device"];
            this.os = data["os"];
            this.last_updated = data["last_updated"];
            this.file_formats = data["file_formats"];
            this.usage_rights = data["usage_rights"];
            this.is_free = data["is_free"];
            this.topics = data["topics"];
            this.tag = data["tag"];
            this.postback_url = data["postback_url"];
            this.postback_data = data["postback_data"];
            this.pingback_url = data["pingback_url"];
        }
    }

    static fromJS(data: any): SerpGoogleDatasetSearchTaskPostRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new SerpGoogleDatasetSearchTaskPostRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["keyword"] = this.keyword;
        data["priority"] = this.priority;
        data["depth"] = this.depth;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["device"] = this.device;
        data["os"] = this.os;
        data["last_updated"] = this.last_updated;
        data["file_formats"] = this.file_formats;
        data["usage_rights"] = this.usage_rights;
        data["is_free"] = this.is_free;
        data["topics"] = this.topics;
        data["tag"] = this.tag;
        data["postback_url"] = this.postback_url;
        data["postback_data"] = this.postback_data;
        data["pingback_url"] = this.pingback_url;
        return data;
    }
}