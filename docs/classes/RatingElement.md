[**Documentation**](../README.md)

***

[Documentation](../README.md) / RatingElement

# Class: RatingElement

Defined in: main.ts:22701

## Implements

- [`IRatingElement`](../interfaces/IRatingElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new RatingElement()

> **new RatingElement**(`data`?): [`RatingElement`](RatingElement.md)

Defined in: main.ts:22720

#### Parameters

##### data?

[`IRatingElement`](../interfaces/IRatingElement.md)

#### Returns

[`RatingElement`](RatingElement.md)

## Properties

### position?

> `optional` **position**: `string`

Defined in: main.ts:22716

the alignment of the element in Google Shopping SERP
possible values:
left, right

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`position`](../interfaces/IRatingElement.md#position)

***

### rating\_max?

> `optional` **rating\_max**: `number`

Defined in: main.ts:22710

the maximum value for a rating_type

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`rating_max`](../interfaces/IRatingElement.md#rating_max)

***

### rating\_type?

> `optional` **rating\_type**: `string`

Defined in: main.ts:22704

the type of rating
here you can find the following elements: Max5, Percents, CustomMax

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`rating_type`](../interfaces/IRatingElement.md#rating_type)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22712

type of element

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`type`](../interfaces/IRatingElement.md#type)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:22706

the value of the rating

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`value`](../interfaces/IRatingElement.md#value)

***

### votes\_count?

> `optional` **votes\_count**: `number`

Defined in: main.ts:22708

the amount of feedbac

#### Implementation of

[`IRatingElement`](../interfaces/IRatingElement.md).[`votes_count`](../interfaces/IRatingElement.md#votes_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:22729

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:22751

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`RatingElement`](RatingElement.md)

Defined in: main.ts:22744

#### Parameters

##### data

`any`

#### Returns

[`RatingElement`](RatingElement.md)
