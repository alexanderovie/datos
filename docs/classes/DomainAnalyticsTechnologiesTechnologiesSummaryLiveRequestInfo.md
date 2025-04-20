[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo

Defined in: main.ts:97844

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo**(`data?`): `DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`

Defined in: main.ts:97921

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md)

#### Returns

`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`

## Properties

### categories?

> `optional` **categories**: `string`[]

Defined in: main.ts:97867

ids of the target technology categories
required field if you don’t specify groups, technology_paths, technologies, or keywords
you can find the full list of technology category ids on this page
note: you can specify up to 10 technology categories in this array
example:
["payment_processors","crm"]

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`categories`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#categories)

***

### filters?

> `optional` **filters**: `any`[]

Defined in: main.ts:97903

array of results filtering parameters
optional field
you can add several filters at once (8 filters maximum)
you should set a logical operator and, or between the conditions
the following operators are supported:
<, <=, >, >=, =, <>, in, not_in, like,not_like
you can use the % operator with like and not_like to match any string of zero or more characters
you can use the following parameters to filter the results: domain_rank, last_visited, country_iso_code, language_code, content_language_code
example:
[["country_iso_code","=","US"],
"and",
["domain_rank",">",800]]
for more information about filters, please refer to Domain Analytics Technologies API – Filters

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`filters`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#filters)

***

### groups?

> `optional` **groups**: `string`[]

Defined in: main.ts:97860

ids of the target technology groups
required field if you don’t specify technologies, technology_paths, categories, or keywords
you can find the full list of technology group ids on this page
note: you can specify up to 10 technology groups in this array
example:
["sales", "marketing"]

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`groups`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#groups)

***

### internal\_list\_limit?

> `optional` **internal\_list\_limit**: `number`

Defined in: main.ts:97911

maximum number of elements within internal arrays
optional field
you can use this field to limit the number of elements within the following arrays:
countries, languages, content_languages, keywords
default value: 10
minimum value: 1
maximum value: 10000

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`internal_list_limit`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#internal_list_limit)

***

### keywords?

> `optional` **keywords**: `string`[]

Defined in: main.ts:97882

target keywords in the domain’s title, description or meta keywords
required field if you don’t specify groups, technology_paths, categories, or technologies
you can specify the maximum of 10 keywords;
UTF-8 encoding;
example:
["seo","software"]
learn more about rules and limitations of keyword and keywords fields in DataForSEO APIs in this Help Center article

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`keywords`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#keywords)

***

### mode?

> `optional` **mode**: `string`

Defined in: main.ts:97889

search mode
optional field
possible search mode types:
as_is – search for results exactly matching the specified group ids, category ids, or technology names
entry – search for results matching a part of the specified group ids, category ids, or technology names
default value: as_is

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`mode`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#mode)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:97917

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`tag`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#tag)

***

### technologies?

> `optional` **technologies**: `string`[]

Defined in: main.ts:97874

target technologies
required field if you don’t specify groups, technology_paths, categories, or keywords
you can find the full list of technologies you can specify here on this page
note: you can specify up to 10 technologies in this array
example:
["Google Pay","Salesforce"]

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`technologies`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technologies)

***

### technology\_paths?

> `optional` **technology\_paths**: `string`[]

Defined in: main.ts:97853

target technology paths
required field if you don’t specify groups, technologies and categories
each technology path should be specified as a separate object containing “path” and “name”, where “path” is specified as “$group_id.$category_id” and “name” – as the name of the target technology;
each object with a technology path should be separated with a comma
you can find the full list of technology group ids, category ids and technology names on this page
note: you can specify up to 10 technology paths in this array
example:
[{"path": "content.cms","name": "wordpress"}, {"path": "marketing.crm","name": "salesforce"}]

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md).[`technology_paths`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo.md#technology_paths)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:97930

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:97979

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`

Defined in: main.ts:97972

#### Parameters

##### data

`any`

#### Returns

`DomainAnalyticsTechnologiesTechnologiesSummaryLiveRequestInfo`
