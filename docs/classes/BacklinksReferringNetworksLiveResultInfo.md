[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringNetworksLiveResultInfo

# Class: BacklinksReferringNetworksLiveResultInfo

Defined in: main.ts:168558

## Implements

- [`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksReferringNetworksLiveResultInfo**(`data`?): `BacklinksReferringNetworksLiveResultInfo`

Defined in: main.ts:168570

#### Parameters

##### data?

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md)

#### Returns

`BacklinksReferringNetworksLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksReferringNetworksLiveItem`](BacklinksReferringNetworksLiveItem.md)[]

Defined in: main.ts:168566

items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:168564

number of items in the items array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:168560

target in a POST array

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:168562

total number of relevant items in the database

#### Implementation of

[`IBacklinksReferringNetworksLiveResultInfo`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringNetworksLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:168579

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:168603

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksReferringNetworksLiveResultInfo`

Defined in: main.ts:168596

#### Parameters

##### data

`any`

#### Returns

`BacklinksReferringNetworksLiveResultInfo`
