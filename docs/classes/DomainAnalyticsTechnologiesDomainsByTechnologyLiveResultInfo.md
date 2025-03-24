[**Documentation**](../README.md)

***

[Documentation](../README.md) / DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

# Class: DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo

Defined in: main.ts:99156

## Implements

- [`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo**(`data`?): `DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`

Defined in: main.ts:99172

#### Parameters

##### data?

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md)

#### Returns

`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`DomainAnalyticsTechnologiesDomainsByLiveItem`](DomainAnalyticsTechnologiesDomainsByLiveItem.md)[]

Defined in: main.ts:99168

items array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`items`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:99160

number of items in the results array

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`items_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#items_count)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:99162

specified offset value

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`offset`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset)

***

### offset\_token?

> `optional` **offset\_token**: `string`

Defined in: main.ts:99166

token for subsequent requests
by specifying the unique offset_token when setting a new task, you will get the subsequent results of the initial task;
offset_token values are unique for each subsequent task

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`offset_token`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#offset_token)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:99158

total number of relevant items in the database

#### Implementation of

[`IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md).[`total_count`](../interfaces/IDomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99181

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:99206

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`

Defined in: main.ts:99199

#### Parameters

##### data

`any`

#### Returns

`DomainAnalyticsTechnologiesDomainsByTechnologyLiveResultInfo`
