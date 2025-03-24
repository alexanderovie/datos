[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkSpamScoreLiveResultInfo

# Class: BacklinksBulkSpamScoreLiveResultInfo

Defined in: main.ts:173032

## Implements

- [`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkSpamScoreLiveResultInfo**(`data`?): `BacklinksBulkSpamScoreLiveResultInfo`

Defined in: main.ts:173040

#### Parameters

##### data?

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md)

#### Returns

`BacklinksBulkSpamScoreLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksBulkSpamScoreLiveItem`](BacklinksBulkSpamScoreLiveItem.md)[]

Defined in: main.ts:173036

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:173034

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkSpamScoreLiveResultInfo`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkSpamScoreLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173049

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173071

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkSpamScoreLiveResultInfo`

Defined in: main.ts:173064

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkSpamScoreLiveResultInfo`
