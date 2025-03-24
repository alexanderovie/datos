[**Documentation**](../README.md)

***

[Documentation](../README.md) / AmazonKeywordData

# Class: AmazonKeywordData

Defined in: main.ts:24923

## Implements

- [`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AmazonKeywordData**(`data`?): `AmazonKeywordData`

Defined in: main.ts:24937

#### Parameters

##### data?

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md)

#### Returns

`AmazonKeywordData`

## Properties

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:24927

related keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword`](../interfaces/IAmazonKeywordData.md#keyword)

***

### keyword\_info?

> `optional` **keyword\_info**: [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

Defined in: main.ts:24933

keyword info for the returned keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword_info`](../interfaces/IAmazonKeywordData.md#keyword_info)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:24931

language code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`language_code`](../interfaces/IAmazonKeywordData.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:24929

location code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`location_code`](../interfaces/IAmazonKeywordData.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:24925

search engine type

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`se_type`](../interfaces/IAmazonKeywordData.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:24946

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:24967

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AmazonKeywordData`

Defined in: main.ts:24960

#### Parameters

##### data

`any`

#### Returns

`AmazonKeywordData`
