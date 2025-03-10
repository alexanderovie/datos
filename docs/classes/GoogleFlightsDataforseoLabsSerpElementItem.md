[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleFlightsDataforseoLabsSerpElementItem

# Class: GoogleFlightsDataforseoLabsSerpElementItem

Defined in: main.ts:117616

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleFlightsDataforseoLabsSerpElementItem()

> **new GoogleFlightsDataforseoLabsSerpElementItem**(`data`?): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:117627

#### Parameters

##### data?

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md)

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22230

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`GoogleFlightsElement`](GoogleFlightsElement.md)[]

Defined in: main.ts:117623

additional items present in the element
if there are none, equals null

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22226

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22222

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22219

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:117618

title of the result in SERP

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22216

type of element

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:117620

relevant URL

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22228

the XPath of the element

#### Implementation of

[`IGoogleFlightsDataforseoLabsSerpElementItem`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IGoogleFlightsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:117632

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

Defined in: main.ts:117656

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

Defined in: main.ts:117649

#### Parameters

##### data

`any`

#### Returns

[`GoogleFlightsDataforseoLabsSerpElementItem`](GoogleFlightsDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
