[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleImageRelatedSearchesSerpElementItem

# Class: GoogleImageRelatedSearchesSerpElementItem

Defined in: main.ts:53930

## Extends

- [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Implements

- [`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleImageRelatedSearchesSerpElementItem**(`data?`): `GoogleImageRelatedSearchesSerpElementItem`

Defined in: main.ts:53944

#### Parameters

##### data?

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md)

#### Returns

`GoogleImageRelatedSearchesSerpElementItem`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`constructor`](BaseGoogleImagesSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:53702

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`_discriminator`](BaseGoogleImagesSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: `string`[]

Defined in: main.ts:53936

items of the element

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`items`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:53934

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`position`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:53698

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_absolute`](BaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:53695

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`rank_group`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_group`](BaseGoogleImagesSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:53940

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for this search engine type, that’s why rectangle always equals null

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`rectangle`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:53691

type of element

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`type`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`type`](BaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:53700

the XPath of the element

#### Implementation of

[`IGoogleImageRelatedSearchesSerpElementItem`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md).[`xpath`](../interfaces/IGoogleImageRelatedSearchesSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`xpath`](BaseGoogleImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:53949

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`init`](BaseGoogleImagesSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:53973

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`toJSON`](BaseGoogleImagesSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleImageRelatedSearchesSerpElementItem`

Defined in: main.ts:53966

#### Parameters

##### data

`any`

#### Returns

`GoogleImageRelatedSearchesSerpElementItem`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`fromJS`](BaseGoogleImagesSerpElementItem.md#fromjs)
