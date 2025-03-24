[**Documentation**](../README.md)

***

[Documentation](../README.md) / ScholarlyArticlesSerpElementItem

# Class: ScholarlyArticlesSerpElementItem

Defined in: main.ts:36977

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ScholarlyArticlesSerpElementItem**(`data`?): `ScholarlyArticlesSerpElementItem`

Defined in: main.ts:36997

#### Parameters

##### data?

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md)

#### Returns

`ScholarlyArticlesSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21989

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

Defined in: main.ts:36989

contains arrays of specific images

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`items`](../interfaces/IScholarlyArticlesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:36981

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`position`](../interfaces/IScholarlyArticlesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21987

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rank_absolute`](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21984

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rank_group`](../interfaces/IScholarlyArticlesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:36993

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`rectangle`](../interfaces/IScholarlyArticlesSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:36985

title of the row

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`title`](../interfaces/IScholarlyArticlesSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21980

type of element

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`type`](../interfaces/IScholarlyArticlesSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:36987

source URL

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`url`](../interfaces/IScholarlyArticlesSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:36983

the XPath of the element

#### Implementation of

[`IScholarlyArticlesSerpElementItem`](../interfaces/IScholarlyArticlesSerpElementItem.md).[`xpath`](../interfaces/IScholarlyArticlesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:37002

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:37029

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ScholarlyArticlesSerpElementItem`

Defined in: main.ts:37022

#### Parameters

##### data

`any`

#### Returns

`ScholarlyArticlesSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
