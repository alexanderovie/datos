[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleNewsTopStoriesSerpElementItem

# Class: GoogleNewsTopStoriesSerpElementItem

Defined in: main.ts:49233

## Extends

- [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

## Implements

- [`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleNewsTopStoriesSerpElementItem**(`data?`): `GoogleNewsTopStoriesSerpElementItem`

Defined in: main.ts:49243

#### Parameters

##### data?

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md)

#### Returns

`GoogleNewsTopStoriesSerpElementItem`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`constructor`](BaseGoogleNewsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:49074

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`_discriminator`](BaseGoogleNewsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`TopStoriesElement`](TopStoriesElement.md)[]

Defined in: main.ts:49239

items of the element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`items`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:49237

the alignment of the element in SERP
can take the following values:
left

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`position`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:49064

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_absolute`](BaseGoogleNewsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:49061

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`rank_group`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_group`](BaseGoogleNewsSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:49072

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`rectangle`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#rectangle)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rectangle`](BaseGoogleNewsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:49068

title of the element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`title`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`title`](BaseGoogleNewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:49057

type of element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`type`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`type`](BaseGoogleNewsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:49066

the XPath of the element

#### Implementation of

[`IGoogleNewsTopStoriesSerpElementItem`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md).[`xpath`](../interfaces/IGoogleNewsTopStoriesSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`xpath`](BaseGoogleNewsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:49248

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`init`](BaseGoogleNewsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:49271

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`toJSON`](BaseGoogleNewsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleNewsTopStoriesSerpElementItem`

Defined in: main.ts:49264

#### Parameters

##### data

`any`

#### Returns

`GoogleNewsTopStoriesSerpElementItem`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`fromJS`](BaseGoogleNewsSerpElementItem.md#fromjs)
