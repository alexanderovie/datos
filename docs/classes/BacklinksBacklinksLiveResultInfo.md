[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBacklinksLiveResultInfo

# Class: BacklinksBacklinksLiveResultInfo

Defined in: main.ts:164240

## Implements

- [`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBacklinksLiveResultInfo**(`data`?): `BacklinksBacklinksLiveResultInfo`

Defined in: main.ts:164260

#### Parameters

##### data?

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md)

#### Returns

`BacklinksBacklinksLiveResultInfo`

## Properties

### custom\_mode?

> `optional` **custom\_mode**: `object`

Defined in: main.ts:164246

custom mode specified in a POST array

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`custom_mode`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#custom_mode)

***

### items?

> `optional` **items**: [`BacklinksBacklinksLiveItem`](BacklinksBacklinksLiveItem.md)[]

Defined in: main.ts:164252

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:164250

the number of results returned in the items array

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#items_count)

***

### mode?

> `optional` **mode**: `string`

Defined in: main.ts:164244

mode specified in a POST array

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`mode`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#mode)

***

### search\_after\_token?

> `optional` **search\_after\_token**: `string`

Defined in: main.ts:164256

token for subsequent requests
by specifying the unique search_after_token when setting a new task, you will get the subsequent results of the initial task;
search_after_token values are unique for each subsequent task

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`search_after_token`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#search_after_token)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:164242

target domain in a POST array

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`target`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:164248

total amount of results relevant the request

#### Implementation of

[`IBacklinksBacklinksLiveResultInfo`](../interfaces/IBacklinksBacklinksLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksBacklinksLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:164269

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:164302

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBacklinksLiveResultInfo`

Defined in: main.ts:164295

#### Parameters

##### data

`any`

#### Returns

`BacklinksBacklinksLiveResultInfo`
