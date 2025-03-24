[**Documentation**](../README.md)

***

[Documentation](../README.md) / RecipesElement

# Class: RecipesElement

Defined in: main.ts:36561

## Implements

- [`IRecipesElement`](../interfaces/IRecipesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new RecipesElement**(`data`?): `RecipesElement`

Defined in: main.ts:36583

#### Parameters

##### data?

[`IRecipesElement`](../interfaces/IRecipesElement.md)

#### Returns

`RecipesElement`

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:36574

description

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`description`](../interfaces/IRecipesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:36569

website domain

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`domain`](../interfaces/IRecipesElement.md#domain)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:36579

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`rating`](../interfaces/IRecipesElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:36572

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`source`](../interfaces/IRecipesElement.md#source)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:36576

the total time it takes to prepare the cook the dish

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`time`](../interfaces/IRecipesElement.md#time)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36565

title of a given link element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`title`](../interfaces/IRecipesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:36563

type of element

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`type`](../interfaces/IRecipesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:36567

URL

#### Implementation of

[`IRecipesElement`](../interfaces/IRecipesElement.md).[`url`](../interfaces/IRecipesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:36592

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:36616

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `RecipesElement`

Defined in: main.ts:36609

#### Parameters

##### data

`any`

#### Returns

`RecipesElement`
