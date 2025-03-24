[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDictionarySerpElementItem

# Interface: IDictionarySerpElementItem

Defined in: main.ts:82977

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:82991

breadcrumb of the Ad element in SERP

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:82989

domain in SERP

***

### keyword?

> `optional` **keyword**: `string`

Defined in: main.ts:82993

keyword highlighted in the result

***

### links?

> `optional` **links**: [`LinkElement`](../classes/LinkElement.md)[]

Defined in: main.ts:83001

sitelinks
the links shown below some of search results
if there are none, equals null

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:82981

the alignment of the element in SERP
can take the following values:
left, right

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22340

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_absolute`](IBaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22337

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`rank_group`](IBaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](../classes/Rectangle.md)

Defined in: main.ts:83005

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
note: calculate_rectangles parameter is not yet available when setting tasks for Baidu search engine, that’s why rectangle always equals null

***

### snippet?

> `optional` **snippet**: `string`

Defined in: main.ts:82995

snippet of the element

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:82997

description of the results element in SERP

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:82985

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22333

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:82987

relevant URL of the Ad element in SERP

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:82983

the XPath of the element
