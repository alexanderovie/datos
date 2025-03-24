[**Documentation**](../README.md)

***

[Documentation](../README.md) / ScholarlyArticlesDataforseoLabsSerpElementItem

# Class: ScholarlyArticlesDataforseoLabsSerpElementItem

Defined in: main.ts:119459

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ScholarlyArticlesDataforseoLabsSerpElementItem**(`data`?): `ScholarlyArticlesDataforseoLabsSerpElementItem`

Defined in: main.ts:119470

#### Parameters

##### data?

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md)

#### Returns

`ScholarlyArticlesDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22569

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`ScholarlyArticlesElement`](ScholarlyArticlesElement.md)[]

Defined in: main.ts:119466

additional items present in the element
if there are none, equals null

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22565

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22561

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22558

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:119461

title of the result in SERP

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22555

type of element

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:119463

relevant URL

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22567

the XPath of the element

#### Implementation of

[`IScholarlyArticlesDataforseoLabsSerpElementItem`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IScholarlyArticlesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:119475

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:119499

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `ScholarlyArticlesDataforseoLabsSerpElementItem`

Defined in: main.ts:119492

#### Parameters

##### data

`any`

#### Returns

`ScholarlyArticlesDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
