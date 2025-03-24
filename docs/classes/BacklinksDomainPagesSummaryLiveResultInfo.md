[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainPagesSummaryLiveResultInfo

# Class: BacklinksDomainPagesSummaryLiveResultInfo

Defined in: main.ts:166996

## Implements

- [`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksDomainPagesSummaryLiveResultInfo**(`data`?): `BacklinksDomainPagesSummaryLiveResultInfo`

Defined in: main.ts:167008

#### Parameters

##### data?

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md)

#### Returns

`BacklinksDomainPagesSummaryLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)[]

Defined in: main.ts:167004

items array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167002

number of items in the results array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:166998

target in the post array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:167000

total number of relevant items in the database

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167017

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167041

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksDomainPagesSummaryLiveResultInfo`

Defined in: main.ts:167034

#### Parameters

##### data

`any`

#### Returns

`BacklinksDomainPagesSummaryLiveResultInfo`
