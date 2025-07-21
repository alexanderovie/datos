export interface IDataforseoLabsBingRelevantPagesLiveRequestInfo   {
        
        /** domain
required field
the domain name of the target website
the domain should be specified without https:// and www. */
        target?: string
        
        /** full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States */
        location_name?: string
        
        /** location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840 */
        location_code?: number
        
        /** full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English */
        language_name?: string
        
        /** language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en */
        language_code?: string
        
        /** display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid', 'featured_snippet', 'local_pack'] */
        item_types?: string[]
        
        /** the maximum number of returned pages
optional field
default value: 100
maximum value: 1000 */
        limit?: number
        
        /** offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */
        offset?: number
        
        /** data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live */
        historical_serp_mode?: string
        
        /** ignore highly similar keywords
optional field
if set to true, only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */
        ignore_synonyms?: boolean
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match
example:
['metrics.paid.count','>',0]
[['metrics.organic.count','>',50],'and',['metrics.organic.pos_1','<>',0]]
[[''metrics.organic.count','>',50'],
'and',
[['metrics.organic.pos_1','<>',0],'or',['metrics.organic.pos_2_3','<>',0]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[]
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
['metrics.paid.etv,asc']
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['metrics.organic.etv,desc','metrics.paid.count,asc']
default rule:
['metrics.organic.count,desc']
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array */
        order_by?: string[]
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string

    [key: string]: any;

    }

export class DataforseoLabsBingRelevantPagesLiveRequestInfo  implements IDataforseoLabsBingRelevantPagesLiveRequestInfo {
    
    /** domain
required field
the domain name of the target website
the domain should be specified without https:// and www. */

    target?: string;
    
    /** full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
United States */

    location_name?: string;
    
    /** location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
ignore this field to get the results for all available locations;
Note: this endpoint currently supports the US location only;
example:
2840 */

    location_code?: number;
    
    /** full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English */

    language_name?: string;
    
    /** language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en */

    language_code?: string;
    
    /** display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid', 'featured_snippet', 'local_pack'] */

    item_types?: string[];
    
    /** the maximum number of returned pages
optional field
default value: 100
maximum value: 1000 */

    limit?: number;
    
    /** offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages */

    offset?: number;
    
    /** data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live */

    historical_serp_mode?: string;
    
    /** ignore highly similar keywords
optional field
if set to true, only core keywords will be returned, all highly similar keywords will be excluded;
default value: false */

    ignore_synonyms?: boolean;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match
example:
['metrics.paid.count','>',0]
[['metrics.organic.count','>',50],'and',['metrics.organic.pos_1','<>',0]]
[[''metrics.organic.count','>',50'],
'and',
[['metrics.organic.pos_1','<>',0],'or',['metrics.organic.pos_2_3','<>',0]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[];
    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
['metrics.paid.etv,asc']
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['metrics.organic.etv,desc','metrics.paid.count,asc']
default rule:
['metrics.organic.count,desc']
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array */

    order_by?: string[];
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string;

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingRelevantPagesLiveRequestInfo) {

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
            this.target = data["target"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.item_types = data["item_types"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.historical_serp_mode = data["historical_serp_mode"];
            this.ignore_synonyms = data["ignore_synonyms"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsBingRelevantPagesLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingRelevantPagesLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target"] = this.target;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["item_types"] = this.item_types;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["historical_serp_mode"] = this.historical_serp_mode;
        data["ignore_synonyms"] = this.ignore_synonyms;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}