[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveResultInfo

# Class: BacklinksDomainIntersectionLiveResultInfo

Defined in: main.ts:167567

## Implements

- [`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionLiveResultInfo()

> **new BacklinksDomainIntersectionLiveResultInfo**(`data`?): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

Defined in: main.ts:167579

#### Parameters

##### data?

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)[]

Defined in: main.ts:167575

contains domain that link to all targets from the POST array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167573

the number of results returned in the items array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items_count)

***

### targets?

> `optional` **targets**: `object`

Defined in: main.ts:167569

target domains, subdomains or webpages in a POST array

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`targets`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#targets)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:167571

total amount of results relevant to your request

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167588

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167618

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

Defined in: main.ts:167611

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)
