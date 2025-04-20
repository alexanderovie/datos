[**Documentation**](../README.md)

***

[Documentation](../README.md) / FeaturedSnippetSerpElementItem

# Class: FeaturedSnippetSerpElementItem

Defined in: main.ts:30911

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new FeaturedSnippetSerpElementItem**(`data?`): `FeaturedSnippetSerpElementItem`

Defined in: main.ts:30947

#### Parameters

##### data?

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md)

#### Returns

`FeaturedSnippetSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:30921

breadcrumb of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`breadcrumb`](../interfaces/IFeaturedSnippetSerpElementItem.md#breadcrumb)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:30917

description of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`description`](../interfaces/IFeaturedSnippetSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:30913

domain of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`domain`](../interfaces/IFeaturedSnippetSerpElementItem.md#domain)

***

### featured\_title?

> `optional` **featured\_title**: `string`

Defined in: main.ts:30929

title

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`featured_title`](../interfaces/IFeaturedSnippetSerpElementItem.md#featured_title)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:30936

images of the element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`images`](../interfaces/IFeaturedSnippetSerpElementItem.md#images)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:30925

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`position`](../interfaces/IFeaturedSnippetSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rank_absolute`](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_absolute)

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

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rank_group`](../interfaces/IFeaturedSnippetSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:30943

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`rectangle`](../interfaces/IFeaturedSnippetSerpElementItem.md#rectangle)

***

### table?

> `optional` **table**: [`Table`](Table.md)

Defined in: main.ts:30939

results table
if there are none, equals null

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`table`](../interfaces/IFeaturedSnippetSerpElementItem.md#table)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:30934

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`timestamp`](../interfaces/IFeaturedSnippetSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:30915

title of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`title`](../interfaces/IFeaturedSnippetSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`type`](../interfaces/IFeaturedSnippetSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:30919

relevant URL of the ad element in SERP

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`url`](../interfaces/IFeaturedSnippetSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:30927

the XPath of the element

#### Implementation of

[`IFeaturedSnippetSerpElementItem`](../interfaces/IFeaturedSnippetSerpElementItem.md).[`xpath`](../interfaces/IFeaturedSnippetSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:30952

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

Defined in: main.ts:30985

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `FeaturedSnippetSerpElementItem`

Defined in: main.ts:30978

#### Parameters

##### data

`any`

#### Returns

`FeaturedSnippetSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
