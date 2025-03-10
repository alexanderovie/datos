[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostBacklinksLiveResultInfo

# Class: BacklinksBulkNewLostBacklinksLiveResultInfo

Defined in: main.ts:171355

## Implements

- [`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostBacklinksLiveResultInfo()

> **new BacklinksBulkNewLostBacklinksLiveResultInfo**(`data`?): [`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

Defined in: main.ts:171363

#### Parameters

##### data?

[`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md)

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksBulkNewLostBacklinksLiveItem`](BacklinksBulkNewLostBacklinksLiveItem.md)[]

Defined in: main.ts:171359

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:171357

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkNewLostBacklinksLiveResultInfo`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkNewLostBacklinksLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:171372

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:171394

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)

Defined in: main.ts:171387

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkNewLostBacklinksLiveResultInfo`](BacklinksBulkNewLostBacklinksLiveResultInfo.md)
