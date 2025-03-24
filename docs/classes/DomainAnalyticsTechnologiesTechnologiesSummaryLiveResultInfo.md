[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

# Class: DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo

Defined in: main.ts:97988

## Implements

- [`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo**(`data`?): `DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`

Defined in: main.ts:98004

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md)

#### Returns

`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`

## Properties

### content\_languages?

> `optional` **content\_languages**: `object`

Defined in: main.ts:97997

distribution of websites by content language
contains content language codes and number of websites per language

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`content_languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#content_languages)

***

### countries?

> `optional` **countries**: `object`

Defined in: main.ts:97991

distribution of websites by country
contains country codes and number of websites per country

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`countries`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#countries)

***

### keywords?

> `optional` **keywords**: `object`

Defined in: main.ts:98000

distribution of websites by keywords
contains keywords found in the websites’ titles, descriptions or meta keywords, and number of websites using each keyword

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`keywords`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#keywords)

***

### languages?

> `optional` **languages**: `object`

Defined in: main.ts:97994

distribution of websites by language
contains language codes and number of websites per language

#### Index Signature

\[`key`: `string`\]: `number`

#### Implementation of

[`IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md).[`languages`](../interfaces/IDomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo.md#languages)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:98013

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:98057

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`

Defined in: main.ts:98050

#### Parameters

##### data

`any`

#### Returns

`DomainAnalyticsTechnologiesTechnologiesSummaryLiveResultInfo`
