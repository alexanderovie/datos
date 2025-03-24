[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveItem

# Class: BacklinksBulkRanksLiveItem

Defined in: main.ts:172290

## Implements

- [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkRanksLiveItem**(`data`?): `BacklinksBulkRanksLiveItem`

Defined in: main.ts:172301

#### Parameters

##### data?

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

#### Returns

`BacklinksBulkRanksLiveItem`

## Properties

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:172297

rank of the target
values represent real-time data for the date of the request
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`rank`](../interfaces/IBacklinksBulkRanksLiveItem.md#rank)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:172292

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`target`](../interfaces/IBacklinksBulkRanksLiveItem.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172310

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:172328

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkRanksLiveItem`

Defined in: main.ts:172321

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkRanksLiveItem`
