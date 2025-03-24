[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleNewsNewsSearchSerpElementItem

# Class: GoogleNewsNewsSearchSerpElementItem

Defined in: main.ts:49045

## Extends

- [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

## Implements

- [`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleNewsNewsSearchSerpElementItem**(`data`?): `GoogleNewsNewsSearchSerpElementItem`

Defined in: main.ts:49065

#### Parameters

##### data?

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md)

#### Returns

`GoogleNewsNewsSearchSerpElementItem`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`constructor`](BaseGoogleNewsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:48972

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`_discriminator`](BaseGoogleNewsSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:49047

domain in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`domain`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:49052

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`image_url`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#image_url)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:48962

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_absolute`](BaseGoogleNewsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:48959

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rank_group`](BaseGoogleNewsSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:48970

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rectangle`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rectangle)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rectangle`](BaseGoogleNewsSerpElementItem.md#rectangle)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:49054

snippet of the result in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`snippet`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#snippet)

***

### time\_published?

> `optional` **time\_published**: `string`

Defined in: main.ts:49056

indicates the time the result was published

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`time_published`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#time_published)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:49061

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:48966

title of the element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`title`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`title`](BaseGoogleNewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:48955

type of element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`type`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`type`](BaseGoogleNewsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:49049

search URL with refinement parameters

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`url`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:48964

the XPath of the element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`xpath`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`xpath`](BaseGoogleNewsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:49070

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`init`](BaseGoogleNewsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:49093

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`toJSON`](BaseGoogleNewsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleNewsNewsSearchSerpElementItem`

Defined in: main.ts:49086

#### Parameters

##### data

`any`

#### Returns

`GoogleNewsNewsSearchSerpElementItem`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`fromJS`](BaseGoogleNewsSerpElementItem.md#fromjs)
