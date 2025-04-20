[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalPackSerpElementItem

# Class: LocalPackSerpElementItem

Defined in: main.ts:35109

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new LocalPackSerpElementItem**(`data?`): `LocalPackSerpElementItem`

Defined in: main.ts:35140

#### Parameters

##### data?

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md)

#### Returns

`LocalPackSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:35132

google-defined client id

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`cid`](../interfaces/ILocalPackSerpElementItem.md#cid)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:35119

description of the results element in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`description`](../interfaces/ILocalPackSerpElementItem.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:35121

source domain

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`domain`](../interfaces/ILocalPackSerpElementItem.md#domain)

***

### is\_paid?

> `optional` **is\_paid**: `boolean`

Defined in: main.ts:35127

indicates whether the element is an ad

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`is_paid`](../interfaces/ILocalPackSerpElementItem.md#is_paid)

***

### phone?

> `optional` **phone**: `string`

Defined in: main.ts:35123

phone number

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`phone`](../interfaces/ILocalPackSerpElementItem.md#phone)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:35113

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`position`](../interfaces/ILocalPackSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalPackSerpElementItem.md#rank_absolute)

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

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rank_group`](../interfaces/ILocalPackSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:35130

the element’s rating
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rating`](../interfaces/ILocalPackSerpElementItem.md#rating)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:35136

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`rectangle`](../interfaces/ILocalPackSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:35117

title of the row

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`title`](../interfaces/ILocalPackSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`type`](../interfaces/ILocalPackSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:35125

source URL

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`url`](../interfaces/ILocalPackSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:35115

the XPath of the element

#### Implementation of

[`ILocalPackSerpElementItem`](../interfaces/ILocalPackSerpElementItem.md).[`xpath`](../interfaces/ILocalPackSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:35145

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

Defined in: main.ts:35173

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `LocalPackSerpElementItem`

Defined in: main.ts:35166

#### Parameters

##### data

`any`

#### Returns

`LocalPackSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
