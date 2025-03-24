[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentRatingInfo

# Class: ContentRatingInfo

Defined in: main.ts:26989

## Implements

- [`IContentRatingInfo`](../interfaces/IContentRatingInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ContentRatingInfo**(`data`?): `ContentRatingInfo`

Defined in: main.ts:27004

#### Parameters

##### data?

[`IContentRatingInfo`](../interfaces/IContentRatingInfo.md)

#### Returns

`ContentRatingInfo`

## Properties

### max\_rating\_value?

> `optional` **max\_rating\_value**: `string`

Defined in: main.ts:26998

maximum value for the rating name

#### Implementation of

[`IContentRatingInfo`](../interfaces/IContentRatingInfo.md).[`max_rating_value`](../interfaces/IContentRatingInfo.md#max_rating_value)

***

### name?

> `optional` **name**: `string`

Defined in: main.ts:26992

rating name
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IContentRatingInfo`](../interfaces/IContentRatingInfo.md).[`name`](../interfaces/IContentRatingInfo.md#name)

***

### rating\_count?

> `optional` **rating\_count**: `string`

Defined in: main.ts:26996

number of votes

#### Implementation of

[`IContentRatingInfo`](../interfaces/IContentRatingInfo.md).[`rating_count`](../interfaces/IContentRatingInfo.md#rating_count)

***

### rating\_value?

> `optional` **rating\_value**: `string`

Defined in: main.ts:26994

the value of the rating

#### Implementation of

[`IContentRatingInfo`](../interfaces/IContentRatingInfo.md).[`rating_value`](../interfaces/IContentRatingInfo.md#rating_value)

***

### relative\_rating?

> `optional` **relative\_rating**: `string`

Defined in: main.ts:27000

relative rating

#### Implementation of

[`IContentRatingInfo`](../interfaces/IContentRatingInfo.md).[`relative_rating`](../interfaces/IContentRatingInfo.md#relative_rating)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27013

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:27034

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ContentRatingInfo`

Defined in: main.ts:27027

#### Parameters

##### data

`any`

#### Returns

`ContentRatingInfo`
