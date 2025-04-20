[**Documentation**](../README.md)

***

[Documentation](../README.md) / ImagesSerpElementItem

# Class: ImagesSerpElementItem

Defined in: main.ts:34291

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ImagesSerpElementItem**(`data?`): `ImagesSerpElementItem`

Defined in: main.ts:34314

#### Parameters

##### data?

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md)

#### Returns

`ImagesSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:34303

contains arrays of specific images

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`items`](../interfaces/IImagesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:34295

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`position`](../interfaces/IImagesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rank_absolute`](../interfaces/IImagesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21987

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rank_group`](../interfaces/IImagesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:34310

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`rectangle`](../interfaces/IImagesSerpElementItem.md#rectangle)

***

### related\_image\_searches?

> `optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](RelatedImageSearchesElement.md)[]

Defined in: main.ts:34306

contains keywords and images related to the specified search term
if there are none, equals null

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`related_image_searches`](../interfaces/IImagesSerpElementItem.md#related_image_searches)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34299

title of the row

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`title`](../interfaces/IImagesSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`type`](../interfaces/IImagesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:34301

source URL

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`url`](../interfaces/IImagesSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:34297

the XPath of the element

#### Implementation of

[`IImagesSerpElementItem`](../interfaces/IImagesSerpElementItem.md).[`xpath`](../interfaces/IImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:34319

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:34351

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ImagesSerpElementItem`

Defined in: main.ts:34344

#### Parameters

##### data

`any`

#### Returns

`ImagesSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
