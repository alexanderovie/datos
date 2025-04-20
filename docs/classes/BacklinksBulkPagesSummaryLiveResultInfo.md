[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkPagesSummaryLiveResultInfo

# Class: BacklinksBulkPagesSummaryLiveResultInfo

Defined in: main.ts:175142

## Implements

- [`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkPagesSummaryLiveResultInfo**(`data?`): `BacklinksBulkPagesSummaryLiveResultInfo`

Defined in: main.ts:175152

#### Parameters

##### data?

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md)

#### Returns

`BacklinksBulkPagesSummaryLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksBulkPagesSummaryLiveItem`](BacklinksBulkPagesSummaryLiveItem.md)[]

Defined in: main.ts:175148

items array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:175146

number of items in the results array

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#items_count)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:175144

total number of relevant items in the database

#### Implementation of

[`IBacklinksBulkPagesSummaryLiveResultInfo`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksBulkPagesSummaryLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:175161

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:175184

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkPagesSummaryLiveResultInfo`

Defined in: main.ts:175177

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkPagesSummaryLiveResultInfo`
