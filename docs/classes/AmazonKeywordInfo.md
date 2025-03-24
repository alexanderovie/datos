[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonKeywordInfo

# Class: AmazonKeywordInfo

Defined in: main.ts:24997

## Implements

- [`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AmazonKeywordInfo**(`data`?): `AmazonKeywordInfo`

Defined in: main.ts:25010

#### Parameters

##### data?

[`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md)

#### Returns

`AmazonKeywordInfo`

## Properties

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:25003

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:    '2019-11-15 12:57:46 +00:00'

#### Implementation of

[`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md).[`last_updated_time`](../interfaces/IAmazonKeywordInfo.md#last_updated_time)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:24999

search engine type

#### Implementation of

[`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md).[`se_type`](../interfaces/IAmazonKeywordInfo.md#se_type)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:25006

average monthly search volume rate
represents the (approximate) number of searches for the provided keyword idea on Amazon

#### Implementation of

[`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md).[`search_volume`](../interfaces/IAmazonKeywordInfo.md#search_volume)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:25019

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:25038

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AmazonKeywordInfo`

Defined in: main.ts:25031

#### Parameters

##### data

`any`

#### Returns

`AmazonKeywordInfo`
