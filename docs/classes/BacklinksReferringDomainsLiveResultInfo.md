[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveResultInfo

# Class: BacklinksReferringDomainsLiveResultInfo

Defined in: main.ts:167774

## Implements

- [`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksReferringDomainsLiveResultInfo**(`data`?): `BacklinksReferringDomainsLiveResultInfo`

Defined in: main.ts:167788

#### Parameters

##### data?

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

#### Returns

`BacklinksReferringDomainsLiveResultInfo`

## Properties

### items?

> `optional` **items**: [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)[]

Defined in: main.ts:167784

items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:167782

number of items in the items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:167776

target in a POST array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:167780

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:167797

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:167821

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksReferringDomainsLiveResultInfo`

Defined in: main.ts:167814

#### Parameters

##### data

`any`

#### Returns

`BacklinksReferringDomainsLiveResultInfo`
