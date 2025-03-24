[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo

Defined in: main.ts:99598

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo**(`data`?): `DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`

Defined in: main.ts:99614

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md)

#### Returns

`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

Defined in: main.ts:99610

items array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:99602

number of items in the results array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#items_count)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:99604

specified offset value

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:99608

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`offset_token`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:99600

total number of relevant items in the database

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99623

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:99648

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`

Defined in: main.ts:99641

#### Parameters

##### data

`any`

#### Returns

`DomainAnalyticsTechnologiesDomainsByHtmlTermsLiveResultInfo`
