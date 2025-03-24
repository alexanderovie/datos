[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphDataforseoLabsSerpElementItem

# Interface: IKnowledgeGraphDataforseoLabsSerpElementItem

Defined in: main.ts:116718

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### card\_id?

> `optional` **card\_id**: `string`

Defined in: main.ts:116728

card id

***

### cid?

> `optional` **cid**: `string`

Defined in: main.ts:116736

google-defined client id

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:116726

description of the results element in SERP

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:116732

URL of the image from knowledge graph

***

### items?

> `optional` **items**: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)[]

Defined in: main.ts:116739

additional items present in the element
if there are none, equals null

***

### logo\_url?

> `optional` **logo\_url**: `string`

Defined in: main.ts:116734

URL of the logo from knowledge graph

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

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:116720

search engine type

***

### sub\_title?

> `optional` **sub\_title**: `string`

Defined in: main.ts:116724

subtitle of the item

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:116722

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

Defined in: main.ts:116730

relevant URL in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22849

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
