[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksPageIntersectionLiveResultInfo

# Class: BacklinksPageIntersectionLiveResultInfo

Defined in: main.ts:168605

## Implements

- [`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionLiveResultInfo()

> **new BacklinksPageIntersectionLiveResultInfo**(`data`?): [`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

Defined in: main.ts:168617

#### Parameters

##### data?

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md)

#### Returns

[`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)[]

Defined in: main.ts:168613

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`items`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:168611

the number of results returned in the items array

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#items_count)

***

### targets?

> `optional` **targets**: `object`

Defined in: main.ts:168607

targets from a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`targets`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#targets)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:168609

total amount of results relevant the request

#### Implementation of

[`IBacklinksPageIntersectionLiveResultInfo`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksPageIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168626

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168656

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)

Defined in: main.ts:168649

#### Parameters

##### data

`any`

#### Returns

[`BacklinksPageIntersectionLiveResultInfo`](BacklinksPageIntersectionLiveResultInfo.md)
