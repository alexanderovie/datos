[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveResultInfo

# Class: BacklinksDomainIntersectionLiveResultInfo

Defined in: main.ts:170308

## Implements

- [`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksDomainIntersectionLiveResultInfo**(`data?`): `BacklinksDomainIntersectionLiveResultInfo`

Defined in: main.ts:170320

#### Parameters

##### data?

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

#### Returns

`BacklinksDomainIntersectionLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)[]

Defined in: main.ts:170316

contains domain that link to all targets from the POST array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:170314

the number of results returned in the items array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items_count)

***

### targets?

> `optional` **targets**: `object`

Defined in: main.ts:170310

target domains, subdomains or webpages in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`targets`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#targets)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:170312

total amount of results relevant to your request

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:170329

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:170359

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksDomainIntersectionLiveResultInfo`

Defined in: main.ts:170352

#### Parameters

##### data

`any`

#### Returns

`BacklinksDomainIntersectionLiveResultInfo`
