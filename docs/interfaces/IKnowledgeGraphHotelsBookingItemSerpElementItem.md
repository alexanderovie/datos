[**Documentation**](../README.md)

***

[Documentation](../README.md) / IKnowledgeGraphHotelsBookingItemSerpElementItem

# Interface: IKnowledgeGraphHotelsBookingItemSerpElementItem

Defined in: main.ts:32755

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### data\_attrid?

> `optional` **data\_attrid**: `string`

Defined in: main.ts:32777

google defined data attribute ID
example:
kc:/local:hotel booking

***

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:32768

starting date of stay
in the format “year-month-date”
example:
2019-11-15

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:32773

ending date of stay
in the format “year-month-date”
example:
2019-11-17

***

### items?

> `optional` **items**: [`KnowledgeGraphHotelsBookingElement`](../classes/KnowledgeGraphHotelsBookingElement.md)[]

Defined in: main.ts:32780

additional items present in the element
if there are none, equals null

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:32759

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

Defined in: main.ts:32784

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:32763

title of a given link element

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22333

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:32761

the XPath of the element
