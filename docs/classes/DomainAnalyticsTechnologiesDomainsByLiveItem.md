[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByLiveItem

# Class: DomainAnalyticsTechnologiesDomainsByLiveItem

Defined in: main.ts:97068

items array

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DomainAnalyticsTechnologiesDomainsByLiveItem()

> **new DomainAnalyticsTechnologiesDomainsByLiveItem**(`data`?): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

Defined in: main.ts:97112

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md)

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

## Properties

### content\_language\_code?

> `optional` **content\_language\_code**: `string`

Defined in: main.ts:97095

content language
code of the language that content on the target domain is written with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`content_language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#content_language_code)

***

### country\_iso\_code?

> `optional` **country\_iso\_code**: `string`

Defined in: main.ts:97089

domain ISO code
ISO code of the country that target domain is determined to belong to

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`country_iso_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#country_iso_code)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:97076

domain meta description

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`description`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:97072

specified domain name

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`domain`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain)

***

### domain\_rank?

> `optional` **domain\_rank**: `string`

Defined in: main.ts:97081

backlink rank of the target domain
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`domain_rank`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#domain_rank)

***

### emails?

> `optional` **emails**: `string`[]

Defined in: main.ts:97101

emails of the target
emails indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`emails`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#emails)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:97092

domain language
code of the language that target domain is determined to be associated with

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`language_code`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#language_code)

***

### last\_visited?

> `optional` **last\_visited**: `string`

Defined in: main.ts:97086

most recent date when our crawler visited the domain
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-10-10 12:57:46 +00:00

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`last_visited`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#last_visited)

***

### meta\_keywords?

> `optional` **meta\_keywords**: `string`[]

Defined in: main.ts:97078

domain meta keywords

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`meta_keywords`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#meta_keywords)

***

### phone\_numbers?

> `optional` **phone\_numbers**: `string`[]

Defined in: main.ts:97098

phone numbers of the target
contact phone numbers indicated on the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`phone_numbers`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#phone_numbers)

***

### social\_graph\_urls?

> `optional` **social\_graph\_urls**: `string`[]

Defined in: main.ts:97104

social media links and handles
social media URLs detected in the social graphs of the target website

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`social_graph_urls`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#social_graph_urls)

***

### technologies?

> `optional` **technologies**: [`TechnologiesInfo`](TechnologiesInfo.md)

Defined in: main.ts:97108

technologies used by target domain
contains objects with the names of technologies used on the website;
to get a full list of technologies and their structure, refer to the technologies endpoint

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`technologies`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#technologies)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:97074

domain meta title

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`title`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:97070

type of element

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByLiveItem`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md).[`type`](../interfaces/IDomainAnalyticsTechnologiesDomainsByLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:97121

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:97167

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)

Defined in: main.ts:97160

#### Parameters

##### data

`any`

#### Returns

[`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)
