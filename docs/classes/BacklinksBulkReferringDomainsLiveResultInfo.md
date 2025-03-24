[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkReferringDomainsLiveResultInfo

# Class: BacklinksBulkReferringDomainsLiveResultInfo

Defined in: main.ts:173390

## Implements

- [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkReferringDomainsLiveResultInfo**(`data`?): `BacklinksBulkReferringDomainsLiveResultInfo`

Defined in: main.ts:173398

#### Parameters

##### data?

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

#### Returns

`BacklinksBulkReferringDomainsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)[]

Defined in: main.ts:173394

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:173392

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173407

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173429

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkReferringDomainsLiveResultInfo`

Defined in: main.ts:173422

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkReferringDomainsLiveResultInfo`
