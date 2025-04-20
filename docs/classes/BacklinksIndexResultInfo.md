[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIndexResultInfo

# Class: BacklinksIndexResultInfo

Defined in: main.ts:161870

## Implements

- [`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksIndexResultInfo**(`data?`): `BacklinksIndexResultInfo`

Defined in: main.ts:161882

#### Parameters

##### data?

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md)

#### Returns

`BacklinksIndexResultInfo`

## Properties

### index\_history?

> `optional` **index\_history**: [`IndexHistory`](IndexHistory.md)[]

Defined in: main.ts:161878

index volume data for the past 12 months

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`index_history`](../interfaces/IBacklinksIndexResultInfo.md#index_history)

***

### total\_backlinks?

> `optional` **total\_backlinks**: `number`

Defined in: main.ts:161872

total number of backlinks our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_backlinks`](../interfaces/IBacklinksIndexResultInfo.md#total_backlinks)

***

### total\_domains?

> `optional` **total\_domains**: `number`

Defined in: main.ts:161876

total number of domains our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_domains`](../interfaces/IBacklinksIndexResultInfo.md#total_domains)

***

### total\_pages?

> `optional` **total\_pages**: `number`

Defined in: main.ts:161874

total number of pages our database contains for the moment of checking

#### Implementation of

[`IBacklinksIndexResultInfo`](../interfaces/IBacklinksIndexResultInfo.md).[`total_pages`](../interfaces/IBacklinksIndexResultInfo.md#total_pages)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:161891

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:161915

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksIndexResultInfo`

Defined in: main.ts:161908

#### Parameters

##### data

`any`

#### Returns

`BacklinksIndexResultInfo`
