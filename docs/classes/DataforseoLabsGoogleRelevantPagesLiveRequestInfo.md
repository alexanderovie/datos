[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleRelevantPagesLiveRequestInfo

# Class: DataforseoLabsGoogleRelevantPagesLiveRequestInfo

Defined in: main.ts:115070

## Implements

- [`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleRelevantPagesLiveRequestInfo**(`data`?): `DataforseoLabsGoogleRelevantPagesLiveRequestInfo`

Defined in: main.ts:115192

#### Parameters

##### data?

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md)

#### Returns

`DataforseoLabsGoogleRelevantPagesLiveRequestInfo`

## Properties

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:115165

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in
example:
["metrics.paid.count",">",0]
[["metrics.organic.count",">",50],"and",["metrics.organic.pos_1","<>",0]]
[[""metrics.organic.count",">",50"],
"and",
[["metrics.organic.pos_1","<>",0],"or",["metrics.organic.pos_2_3","<>",0]]]
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#filters)

***

### historical\_serp\_mode?

> `optional` **historical\_serp\_mode**: `string`

Defined in: main.ts:115146

data collection mode
optional field
you can use this field to filter the results;
possible types of filtering:
live — return metrics for SERPs in which the specified target currently has ranking results;
lost — return metrics for SERPs in which the specified target had previously had ranking results, but didn’t have them during the last check;
all — return metrics for both types of SERPs.
default value: live

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`historical_serp_mode`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#historical_serp_mode)

***

### ignore\_synonyms?

> `optional` **ignore\_synonyms**: `boolean`

Defined in: main.ts:115151

ignore highly similar keywords
optional field
if set to true, only core keywords will be returned, all highly similar keywords will be excluded;
default value: false

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`ignore_synonyms`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#ignore_synonyms)

***

### include\_clickstream\_data?

> `optional` **include\_clickstream\_data**: `boolean`

Defined in: main.ts:115127

include or exclude data from clickstream-based metrics in the result
optional field
if the parameter is set to true, you will receive clickstream_etv, clickstream_gender_distribution, and clickstream_age_distribution fields with clickstream data in the response
default value: false
with this parameter enabled, you will be charged double the price for the request
learn more about how clickstream-based metrics are calculated in this help center article

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`include_clickstream_data`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#include_clickstream_data)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:115120

display results by item type
optional field
indicates the type of search results included in the response
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"]
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#item_types)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:115111

language code
optional field
if you use this field, you don’t need to specify language_name
you can receive the list of available languages with their language_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
en

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:115102

full name of the language
optional field
if you use this field, you don’t need to specify language_code
you can receive the list of available languages with their language_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available languages
example:
English

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:115132

the maximum number of returned pages
optional field
default value: 100
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:115093

location code
optional field
if you use this field, you don’t need to specify location_name
you can receive the list of available locations with their location_code by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:115084

full name of the location
optional field
if you use this field, you don’t need to specify location_code
you can receive the list of available locations with their location_name by making a separate request to the
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages
ignore this field to get the results for all available locations
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:115137

offset in the results array of returned pages
optional field
default value: 0
if you specify the 10 value, the first ten pages in the results array will be omitted and the data will be provided for the successive pages

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:115182

results sorting rules
optional field
you can use the same values as in the filters array to sort the results
possible sorting types:
asc – results will be sorted in the ascending order
desc – results will be sorted in the descending order
you should use a comma to specify a sorting type
example:
["metrics.paid.etv,asc"]
Note: you can set no more than three sorting rules in a single request
you should use a comma to separate several sorting rules
example:
["metrics.organic.etv,desc","metrics.paid.count,asc"]
default rule:
["metrics.organic.count,desc"]
Note: if the item_types array contains item types that are different from organic, the results will be ordered by the first item type in the array

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#order_by)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:115188

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:115075

domain
required field
the domain name of the target website
the domain should be specified without https:// and www.

#### Implementation of

[`IDataforseoLabsGoogleRelevantPagesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md).[`target`](../interfaces/IDataforseoLabsGoogleRelevantPagesLiveRequestInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:115201

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:115243

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleRelevantPagesLiveRequestInfo`

Defined in: main.ts:115236

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleRelevantPagesLiveRequestInfo`
