[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksAnchorsLiveResultInfo

# Class: BacklinksAnchorsLiveResultInfo

Defined in: main.ts:165048

## Implements

- [`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksAnchorsLiveResultInfo**(`data`?): `BacklinksAnchorsLiveResultInfo`

Defined in: main.ts:165060

#### Parameters

##### data?

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md)

#### Returns

`BacklinksAnchorsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksAnchorsLiveItem`](BacklinksAnchorsLiveItem.md)[]

Defined in: main.ts:165056

items array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:165054

number of items in the results array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:165050

target in the post array

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`target`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:165052

total number of relevant items in the database

#### Implementation of

[`IBacklinksAnchorsLiveResultInfo`](../interfaces/IBacklinksAnchorsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksAnchorsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:165069

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:165093

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksAnchorsLiveResultInfo`

Defined in: main.ts:165086

#### Parameters

##### data

`any`

#### Returns

`BacklinksAnchorsLiveResultInfo`
