[**Documentation**](../README.md)

***

[Documentation](../README.md) / IHotelsPackDataforseoLabsSerpElementItem

# Interface: IHotelsPackDataforseoLabsSerpElementItem

Defined in: main.ts:116794

## Extends

- [`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

Defined in: main.ts:116801

starting date of stay
in the format “year-month-date”
example:
2019-11-15

***

### date\_to?

> `optional` **date\_to**: `string`

Defined in: main.ts:116806

ending date of stay
in the format “year-month-date”
example:
2019-11-17

***

### items?

> `optional` **items**: [`HotelsPackElement`](../classes/HotelsPackElement.md)[]

Defined in: main.ts:116809

additional items present in the element
if there are none, equals null

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22508

the alignment of the element in SERP
can take the following values:
left, right

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`position`](IBaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22504

absolute rank in SERP
absolute position among all the elements in SERP

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](IBaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22501

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`rank_group`](IBaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:116796

title of the result in SERP

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22498

type of element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`type`](IBaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22510

the XPath of the element

#### Inherited from

[`IBaseDataforseoLabsSerpElementItem`](IBaseDataforseoLabsSerpElementItem.md).[`xpath`](IBaseDataforseoLabsSerpElementItem.md#xpath)
