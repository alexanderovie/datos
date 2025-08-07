export interface IDataforseoLabsBingDomainIntersectionLiveRequestInfo   {
        
        /** domain
required field
the domain name of the first target website
the domain should be specified without https:// and www. */
        target_1?: string | undefined
        
        /** domain
required field
the domain name of the second target website
the domain should be specified without https:// and www. */
        target_2?: string | undefined
        
        /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States */
        location_name?: string | undefined
        
        /** location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840 */
        location_code?: number | undefined
        
        /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */
        language_name?: string | undefined
        
        /** language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */
        language_code?: string | undefined
        
        /** domain intersections in SERP
optional field
if you set intersections to true, you will get the keywords for which both target domains specified as target1 and target2 have results within the same SERP; the corresponding SERP elements for both domains will be provided in the results array
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million
if you specify intersections: false, you will get the keywords for which the domain specified as target1 has results in SERP, and the domain specified as target2 doesn’t;
thus, the corresponding SERP elements and other data will be provided for the domain specified as target1only
default value: true */
        intersections?: boolean | undefined
        
        /** search results type
indicates type of search results included in the response
optional field
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */
        item_types?: string[] | undefined
        
        /** include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false */
        include_serp_info?: boolean | undefined
        
        /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */
        limit?: number | undefined
        
        /** offset in the items array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */
        offset?: number | undefined
        
        /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['keyword_data.keyword_info.search_volume','in',[100,1000]]
[['first_domain_serp_element.etv','>',0],'and',['first_domain_serp_element.description','like','%goat%']]
[['keyword_data.keyword_info.search_volume','>',100],
'and',
[['first_domain_serp_element.description','like','%goat%'],
'or',
['second_domain_serp_element.type','=','organic']]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */
        filters?: any[] | undefined
        
        /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['keyword_data.keyword_info.search_volume,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_data.keyword_info.search_volume,desc','keyword_data.keyword_info.cpc,desc'] */
        order_by?: string[] | undefined
        
        /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */
        tag?: string | undefined

    [key: string]: any;

    }

export class DataforseoLabsBingDomainIntersectionLiveRequestInfo  implements IDataforseoLabsBingDomainIntersectionLiveRequestInfo {
    
    /** domain
required field
the domain name of the first target website
the domain should be specified without https:// and www. */

    target_1?: string | undefined;
    
    /** domain
required field
the domain name of the second target website
the domain should be specified without https:// and www. */

    target_2?: string | undefined;
    
    /** full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
United States */

    location_name?: string | undefined;
    
    /** location code
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
Note: this endpoint currently supports the US location only;
example:
2840 */

    location_code?: number | undefined;
    
    /** full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English */

    language_name?: string | undefined;
    
    /** language code
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en */

    language_code?: string | undefined;
    
    /** domain intersections in SERP
optional field
if you set intersections to true, you will get the keywords for which both target domains specified as target1 and target2 have results within the same SERP; the corresponding SERP elements for both domains will be provided in the results array
Note: this endpoint will not provide results if the number of intersecting keywords exceeds 10 million
if you specify intersections: false, you will get the keywords for which the domain specified as target1 has results in SERP, and the domain specified as target2 doesn’t;
thus, the corresponding SERP elements and other data will be provided for the domain specified as target1only
default value: true */

    intersections?: boolean | undefined;
    
    /** search results type
indicates type of search results included in the response
optional field
possible values:
['organic', 'paid', 'featured_snippet', 'local_pack']
default value:
['organic', 'paid'] */

    item_types?: string[] | undefined;
    
    /** include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false */

    include_serp_info?: boolean | undefined;
    
    /** the maximum number of returned keywords
optional field
default value: 100
maximum value: 1000 */

    limit?: number | undefined;
    
    /** offset in the items array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords */

    offset?: number | undefined;
    
    /** array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, ilike, not_ilike, like, not_like, match, not_match
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters
example:
['keyword_data.keyword_info.search_volume','in',[100,1000]]
[['first_domain_serp_element.etv','>',0],'and',['first_domain_serp_element.description','like','%goat%']]
[['keyword_data.keyword_info.search_volume','>',100],
'and',
[['first_domain_serp_element.description','like','%goat%'],
'or',
['second_domain_serp_element.type','=','organic']]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide */

    filters?: any[] | undefined;
    
    /** results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
example:
['keyword_data.keyword_info.competition,desc']
default rule:
['keyword_data.keyword_info.search_volume,desc']
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
['keyword_data.keyword_info.search_volume,desc','keyword_data.keyword_info.cpc,desc'] */

    order_by?: string[] | undefined;
    
    /** user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response */

    tag?: string | undefined;

    [key: string]: any;


    constructor(data?: IDataforseoLabsBingDomainIntersectionLiveRequestInfo) {

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
            this.target_1 = data["target1"];
            this.target_2 = data["target2"];
            this.location_name = data["location_name"];
            this.location_code = data["location_code"];
            this.language_name = data["language_name"];
            this.language_code = data["language_code"];
            this.intersections = data["intersections"];
            this.item_types = data["item_types"];
            this.include_serp_info = data["include_serp_info"];
            this.limit = data["limit"];
            this.offset = data["offset"];
            this.filters = data["filters"];
            this.order_by = data["order_by"];
            this.tag = data["tag"];
        }
    }

    static fromJS(data: any): DataforseoLabsBingDomainIntersectionLiveRequestInfo {
        data = typeof data === 'object' ? data : {};


        let result = new DataforseoLabsBingDomainIntersectionLiveRequestInfo();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};

        
        
        data["target1"] = this.target_1;
        data["target2"] = this.target_2;
        data["location_name"] = this.location_name;
        data["location_code"] = this.location_code;
        data["language_name"] = this.language_name;
        data["language_code"] = this.language_code;
        data["intersections"] = this.intersections;
        data["item_types"] = this.item_types;
        data["include_serp_info"] = this.include_serp_info;
        data["limit"] = this.limit;
        data["offset"] = this.offset;
        data["filters"] = this.filters;
        data["order_by"] = this.order_by;
        data["tag"] = this.tag;
        return data;
    }
}