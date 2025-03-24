[**Documentation**](../README.md)

***

[Documentation](../README.md) / ICurrencyBoxSerpElementItem

# Interface: ICurrencyBoxSerpElementItem

Defined in: main.ts:39095

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### converted\_currency?

> `optional` **converted\_currency**: `string`

Defined in: main.ts:39112

converted currency

***

### converted\_value?

> `optional` **converted\_value**: `number`

Defined in: main.ts:39107

value converted to a requested currency
indicates the exact value based on Google Fincance data at the time when our API pulled the results
note that exchange rates displayed in the currency_box element may be delayed according to the Google Finance disclaimer

***

### currency?

> `optional` **currency**: `string`

Defined in: main.ts:39110

currency of the listed price
ISO code of the currency applied to the price

***

### graph?

> `optional` **graph**: [`Graph`](../classes/Graph.md)

Defined in: main.ts:39122

contains data provided in the graph of the element

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:39099

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

Defined in: main.ts:39126

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

***

### table?

> `optional` **table**: [`Table`](../classes/Table.md)

Defined in: main.ts:39120

results table
if there are none, equals null

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:39117

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22333

type of element

#### Inherited from

[`IBaseSerpElementItem`](IBaseSerpElementItem.md).[`type`](IBaseSerpElementItem.md#type)

***

### value?

> `optional` **value**: `number`

Defined in: main.ts:39103

the value of the rating

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:39101

the XPath of the element
