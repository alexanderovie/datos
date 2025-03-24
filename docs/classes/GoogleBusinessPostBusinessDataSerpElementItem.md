[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleBusinessPostBusinessDataSerpElementItem

# Class: GoogleBusinessPostBusinessDataSerpElementItem

Defined in: main.ts:227464

## Extends

- [`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md)

## Implements

- [`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new GoogleBusinessPostBusinessDataSerpElementItem**(`data`?): `GoogleBusinessPostBusinessDataSerpElementItem`

Defined in: main.ts:227494

#### Parameters

##### data?

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md)

#### Returns

`GoogleBusinessPostBusinessDataSerpElementItem`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`constructor`](BaseBusinessDataSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:23355

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`_discriminator`](BaseBusinessDataSerpElementItem.md#_discriminator)

***

### author?

> `optional` **author**: `string`

Defined in: main.ts:227471

author of the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`author`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#author)

***

### images\_url?

> `optional` **images\_url**: `string`

Defined in: main.ts:227479

url of an image included in the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`images_url`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#images_url)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:227490

links included in the post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`links`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:227467

the alignment of the element in SERP
can take the following values: right

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`position`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#position)

***

### post\_date?

> `optional` **post\_date**: `string`

Defined in: main.ts:227483

date when a post was published
in the following format:
"mm/dd/yyyy hh:mm:ss"

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`post_date`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_date)

***

### post\_text?

> `optional` **post\_text**: `string`

Defined in: main.ts:227475

main content of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`post_text`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#post_text)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:23353

absolute rank among all the elements

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_absolute`](BaseBusinessDataSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:23351

position within a group of elements with identical type values
positions of elements with different type values are omitted from the rank_group

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`rank_group`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#rank_group)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`rank_group`](BaseBusinessDataSerpElementItem.md#rank_group)

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:227473

additional content of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`snippet`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#snippet)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:227488

time when a post was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`timestamp`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:23348

type of element

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`type`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#type)

#### Inherited from

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`type`](BaseBusinessDataSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:227477

url of a post

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`url`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:227469

the XPath of the element

#### Implementation of

[`IGoogleBusinessPostBusinessDataSerpElementItem`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md).[`xpath`](../interfaces/IGoogleBusinessPostBusinessDataSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:227499

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`init`](BaseBusinessDataSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:227530

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`toJSON`](BaseBusinessDataSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `GoogleBusinessPostBusinessDataSerpElementItem`

Defined in: main.ts:227523

#### Parameters

##### data

`any`

#### Returns

`GoogleBusinessPostBusinessDataSerpElementItem`

#### Overrides

[`BaseBusinessDataSerpElementItem`](BaseBusinessDataSerpElementItem.md).[`fromJS`](BaseBusinessDataSerpElementItem.md#fromjs)
