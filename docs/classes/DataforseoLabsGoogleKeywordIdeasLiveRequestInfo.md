[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordIdeasLiveRequestInfo

# Class: DataforseoLabsGoogleKeywordIdeasLiveRequestInfo

Defined in: main.ts:104209

## Implements

- [`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordIdeasLiveRequestInfo()

> **new DataforseoLabsGoogleKeywordIdeasLiveRequestInfo**(`data`?): [`DataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](DataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)

Defined in: main.ts:104338

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](DataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)

## Properties

### closely\_variants?

> `optional` **closely\_variants**: `boolean`

Defined in: main.ts:104258

search mode
optional field
if set to true the results will be based on the phrase-match search algorithm
if set to false the results will be based on the broad-match search algorithm
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`closely_variants`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#closely_variants)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:104313

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like
you can use the % operator with like and not_like,as well as ilike, not_ilike to match any string of zero or more characters
note that you can not filter the results by relevance
example:
["keyword_info.search_volume",">",0]
[["keyword_info.search_volume","in",[0,1000]],
"and",
["keyword_info.competition_level","=","LOW"]]
[["keyword_info.search_volume",">",100],
"and",
[["keyword_info.cpc","<",0.5],
"or",
["keyword_info.high_top_of_page_bid","<=",0.5]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#filters)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:104263

ignore highly similar keywords
optional field
if set to true only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#ignore_synonyms)

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

Defined in: main.ts:104275

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_keyword_info, keyword_info_normalized_with_clickstream, and keyword_info_normalized_with_bing fields in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#include_clickstream_data)

***

### include\_serp\_info?

> `optional` **include\_serp\_info**: `boolean`

Defined in: main.ts:104268

include data from SERP for each keyword
optional field
if set to true, we will return a serp_info array containing SERP data (number of search results, relevant URL, and SERP features) for every keyword in the response
default value: false

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`include_serp_info`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#include_serp_info)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:104216

keywords
required field
UTF-8 encoding
The maximum number of keywords you can specify: 200.
The keywords will be converted to lowercase format
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`keywords`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#keywords)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:104252

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
en
Note: if omitted, results default to the language with the most keyword records in the specified location;
refer to the available_languages.keywords field of the Locations and Languages endpoint to determine the default language

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:104242

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
English
Note: if omitted, results default to the language with the most keyword records in the specified location;
refer to the available_languages.keywords field of the Locations and Languages endpoint to determine the default language

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:104280

the maximum number of keywords in the results array
optional field
default value: 700
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:104232

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:104224

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:104285

offset in the results array of returned keywords
optional field
default value: 0
if you specify the 10 value, the first ten keywords in the results array will be omitted and the data will be provided for the successive keywords

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:104293

offset token for subsequent requests
optional field
provided in the identical filed of the response to each request;
use this parameter to avoid timeouts while trying to obtain over 10,000 results in a single request;
by specifying the unique offset_token value from the response array, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task
Note: if the offset_token is specified in the request, all other parameters except limit will not be taken into account when processing a task.

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`offset_token`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#offset_token)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:104328

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to set up a sorting parameter
default rule:
["relevance,desc"]
relevance is used as the default sorting rule to provide you with the closest keyword ideas. We recommend using this sorting rule to get highly-relevant search terms. Note that relevance is only our internal system identifier, so it can not be used as a filter, and you will not find this field in the result array. The relevance score is based on a similar principle as used in the Keywords For Keywords endpoint.
note that you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["relevance,desc","keyword_info.search_volume,desc"]

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:104334

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:104347

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:104390

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](DataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)

Defined in: main.ts:104383

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordIdeasLiveRequestInfo`](DataforseoLabsGoogleKeywordIdeasLiveRequestInfo.md)
