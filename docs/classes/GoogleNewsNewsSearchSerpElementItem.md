[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleNewsNewsSearchSerpElementItem

# Class: GoogleNewsNewsSearchSerpElementItem

Defined in: main.ts:49147

## Extends

- [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

## Implements

- [`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleNewsNewsSearchSerpElementItem**(`data?`): `GoogleNewsNewsSearchSerpElementItem`

Defined in: main.ts:49167

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

Defined in: main.ts:49074

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`_discriminator`](BaseGoogleNewsSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:49149

domain in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`domain`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:49154

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`image_url`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#image_url)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:49064

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rank_absolute)

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

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rank_group`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rank_group)

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

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`rectangle`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#rectangle)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`rectangle`](BaseGoogleNewsSerpElementItem.md#rectangle)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:49156

snippet of the result in SERP

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`snippet`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#snippet)

***

### time\_published?

> `optional` **time\_published**: `string`

Defined in: main.ts:49158

indicates the time the result was published

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`time_published`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#time_published)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:49163

date and time when the news was published
in the format “year-month-date:minutes:UTC_difference_hours:UTC_difference_minutes”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`timestamp`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:49068

title of the element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`title`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#title)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`title`](BaseGoogleNewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:49057

type of element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`type`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`type`](BaseGoogleNewsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:49151

search URL with refinement parameters

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`url`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:49066

the XPath of the element

#### Implementation of

[`IGoogleNewsNewsSearchSerpElementItem`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md).[`xpath`](../interfaces/IGoogleNewsNewsSearchSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`xpath`](BaseGoogleNewsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:49172

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

Defined in: main.ts:49195

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

Defined in: main.ts:49188

#### Parameters

##### data

`any`

#### Returns

`GoogleNewsNewsSearchSerpElementItem`

#### Overrides

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md).[`fromJS`](BaseGoogleNewsSerpElementItem.md#fromjs)
