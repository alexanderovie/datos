[**Documentation**](../README.md)

***

[Documentation](../README.md) / IImagesDataforseoLabsSerpElementItem

# Interface: IImagesDataforseoLabsSerpElementItem

Defined in: main.ts:117003

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`ImagesElement`](../classes/ImagesElement.md)[]

Defined in: main.ts:117012

additional items present in the element
if there are none, equals null

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22847

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22843

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22840

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

***

### related\_image\_searches?

> `optional` **related\_image\_searches**: [`RelatedImageSearchesElement`](../classes/RelatedImageSearchesElement.md)

Defined in: main.ts:117015

contains keywords and images related to the specified search term
if there are none, equals null

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:117005

search engine type

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:117007

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22837

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:117009

relevant URL

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22849

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
