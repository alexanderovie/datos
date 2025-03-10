[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkBacklinksLiveResultInfo

# Class: BacklinksBulkBacklinksLiveResultInfo

Defined in: main.ts:170279

## Implements

- [`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkBacklinksLiveResultInfo()

> **new BacklinksBulkBacklinksLiveResultInfo**(`data`?): [`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

Defined in: main.ts:170287

#### Parameters

##### data?

[`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md)

#### Returns

[`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksBulkBacklinksLiveItem`](BacklinksBulkBacklinksLiveItem.md)[]

Defined in: main.ts:170283

contains relevant backlink data

#### Implementation of

[`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:170281

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkBacklinksLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:170296

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:170318

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)

Defined in: main.ts:170311

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkBacklinksLiveResultInfo`](BacklinksBulkBacklinksLiveResultInfo.md)
