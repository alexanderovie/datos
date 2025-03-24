[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostReferringDomainsLiveResultInfo

# Class: BacklinksBulkNewLostReferringDomainsLiveResultInfo

Defined in: main.ts:174150

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksBulkNewLostReferringDomainsLiveResultInfo**(`data`?): `BacklinksBulkNewLostReferringDomainsLiveResultInfo`

Defined in: main.ts:174158

#### Parameters

##### data?

[`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Returns

`BacklinksBulkNewLostReferringDomainsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)[]

Defined in: main.ts:174154

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:174152

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:174167

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:174189

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksBulkNewLostReferringDomainsLiveResultInfo`

Defined in: main.ts:174182

#### Parameters

##### data

`any`

#### Returns

`BacklinksBulkNewLostReferringDomainsLiveResultInfo`
