[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo

# Class: DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo

Defined in: main.ts:109438

## Implements

- [`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo**(`data`?): `DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`

Defined in: main.ts:109580

#### Parameters

##### data?

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md)

#### Returns

`DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`

## Properties

### category\_codes?

> `optional` **category\_codes**: `string`[]

Defined in: main.ts:109443

product and service categories
required field
The maximum number of categories you can specify: 5
you can download the full list of possible categories

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`category_codes`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#category_codes)

***

### correlate?

> `optional` **correlate**: `boolean`

Defined in: main.ts:109534

correlate data with previously obtained datasets
optional field
default value: true;
if you use this parameter, our system will correlate data you obtain now with previously obtained datasets;
this parameter is intended to mitigate any inconsistencies that may result from changes to our database;
Note: we do not recommend setting correlate to false

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`correlate`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#correlate)

***

### etv\_max?

> `optional` **etv\_max**: `number`

Defined in: main.ts:109527

maximum current organic ETV of the domain
optional field
if specified, the API will return only domains with organic_etv lesser than the specified value

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`etv_max`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#etv_max)

***

### etv\_min?

> `optional` **etv\_min**: `number`

Defined in: main.ts:109523

minimum current organic ETV of the domain
optional field
if specified, the API will return only domains with organic_etv greater than the specified value

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`etv_min`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#etv_min)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:109555

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum);
you should set a logical operator and, or between the conditions
the following operators are supported:
regex, not_regex, <, <=, >, >=, =, <>, in, not_in, match, not_match, ilike, not_ilike, like, not_like;
you can use the % operator with like and not_like, as well as ilike and not_ilike to match any string of zero or more characters;
example:
["metrics_history.202110.organic.pos_1", ">", 15];
for more information about filters, please refer to Dataforseo Labs – Filters or this help center guide

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`filters`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#filters)

***

### first\_date?

> `optional` **first\_date**: `string`

Defined in: main.ts:109454

first date of comparison period
required field
first date for which domain metrics will be provided;
date format: "yyyy-mm-dd";
example: "2021-06-01";
the list available dates is available through the available history endpoint;
Note: first_date cannot be greater than today’s date;
Also note: the dates specified in first_date and second_date cannot point to the same month of the same year;
you can specify the dates in any order: first_date can be greater than second_date and vice versa;
minimum date: "2020-10-01"

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`first_date`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#first_date)

***

### include\_subdomains?

> `optional` **include\_subdomains**: `boolean`

Defined in: main.ts:109519

return subdomains in the API response
optional field
if false, the API response will contain main_domain only;
if true, the API will return main_domain plus its subdomains (if available);
default value: true

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`include_subdomains`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#include_subdomains)

***

### item\_types?

> `optional` **item\_types**: `string`[]

Defined in: main.ts:109505

display results by item type
optional field
indicates the type of search results included in the response;
Note: if the item_types array contains item types that are different from the organic object, the results will be ordered by the first item type in the array; you will not be able to sort and filter results by the types of search results not included in the response;
possible values:
["organic", "paid", "featured_snippet", "local_pack"];
default value:
["organic", "paid"]

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`item_types`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#item_types)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:109496

unique language identifier
required field if you don’t specify language_name
Note: it is required to specify either language_name or language_code;
you can receive the list of available languages with their language_code by making a separate request to https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
en

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#language_code)

***

### language\_name?

> `optional` **language\_name**: `string`

Defined in: main.ts:109489

full name of the language
required field if you don’t specify language_code
Note: it is required to specify either language_name or language_code;
you can receive the list of available languages with their language_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
English

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`language_name`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#language_name)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:109539

the maximum number of domains in the results array
optional field
default value: 100;
maximum value: 1000

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#limit)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:109481

unique location identifier
required field if you don’t specify location_name
Note: it is required to specify either location_name or location_code;
you can receive the list of available locations with their location_code by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
2840

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#location_code)

***

### location\_name?

> `optional` **location\_name**: `string`

Defined in: main.ts:109473

full name of the location
required field if you don’t specify location_code
Note: it is required to specify either location_name or location_code;
you can receive the list of available locations with their location_name by making a separate request to
https://api.dataforseo.com/v3/dataforseo_labs/locations_and_languages;
example:
United Kingdom

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`location_name`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#location_name)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:109544

offset in the results array of returned domains
optional field
default value: 0;
if you specify the 10 value, the first ten domains in the results array will be omitted and the data will be provided for the successive domains

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#offset)

***

### order\_by?

> `optional` **order\_by**: `string`[]

Defined in: main.ts:109570

results sorting rules
optional field
you can use the same values as in the filters array to sort the results;
default rule: ["organic_etv,desc"];
possible sorting types:
asc – results will be sorted in ascending order
desc – results will be sorted in descending order;
you should use a comma to set up a sorting type;
example:
["organic_count,desc"];
note that you can set no more than three sorting rules in a single request;
you should use a comma to separate several sorting rules;
example:
["organic_etv,desc","organic_count,asc"]

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`order_by`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#order_by)

***

### second\_date?

> `optional` **second\_date**: `string`

Defined in: main.ts:109465

second date of comparison period
required field
second date for which domain metrics will be provided;
date format: "yyyy-mm-dd";
example: "2021-10-01";
the list available dates is available through the available history endpoint;
Note: second_date cannot be greater than today’s date;
Also note: the dates specified in first_date and second_date cannot point to the same month of the same year;
you can specify the dates in any order: second_date can be greater than first_date and vice versa;
minimum date: "2020-10-01"

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`second_date`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#second_date)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:109576

user-defined task identifier
optional field
the character limit is 255;
you can use this parameter to identify the task and match it with the result;
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`tag`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#tag)

***

### top\_categories\_count?

> `optional` **top\_categories\_count**: `number`

Defined in: main.ts:109513

number of additional domain categories
optional field
by using this parameter, you can receive domains relevant to additional categories that are not specified in category_codes above;
to learn more about the parameter, please refer to this help center article;
by default, top_categories_count is equal to the number of categories specified in the category_codes array;
Note: top_categories_count cannot be less than the number of categories in the category_codes array;
maximum value: 5

#### Implementation of

[`IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md).[`top_categories_count`](../interfaces/IDataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo.md#top_categories_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:109589

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:109639

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`

Defined in: main.ts:109632

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsGoogleDomainMetricsByCategoriesLiveRequestInfo`
