[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainPagesLiveResultInfo

# Class: BacklinksDomainPagesLiveResultInfo

Defined in: main.ts:166446

## Implements

- [`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksDomainPagesLiveResultInfo**(`data?`): `BacklinksDomainPagesLiveResultInfo`

Defined in: main.ts:166458

#### Parameters

##### data?

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md)

#### Returns

`BacklinksDomainPagesLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksDomainPagesLiveItem`](BacklinksDomainPagesLiveItem.md)[]

Defined in: main.ts:166454

items array

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:166452

number of items in the items array

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:166448

target in a POST array

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`target`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:166450

total number of relevant items in the database

#### Implementation of

[`IBacklinksDomainPagesLiveResultInfo`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainPagesLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:166467

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:166491

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksDomainPagesLiveResultInfo`

Defined in: main.ts:166484

#### Parameters

##### data

`any`

#### Returns

`BacklinksDomainPagesLiveResultInfo`
