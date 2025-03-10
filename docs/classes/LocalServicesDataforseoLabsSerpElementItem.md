[**Documentation**](../README.md)

***

[Documentation](../README.md) / LocalServicesDataforseoLabsSerpElementItem

# Class: LocalServicesDataforseoLabsSerpElementItem

Defined in: main.ts:118594

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new LocalServicesDataforseoLabsSerpElementItem()

> **new LocalServicesDataforseoLabsSerpElementItem**(`data`?): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:118607

#### Parameters

##### data?

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md)

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22230

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:118600

domain where a link points

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`domain`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#domain)

***

### items?

> `optional` **items**: [`LocalServicesElement`](LocalServicesElement.md)[]

Defined in: main.ts:118603

additional items present in the element
if there are none, equals null

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`items`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22226

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`position`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22222

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22219

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:118596

title of the result in SERP

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`title`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22216

type of element

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`type`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:118598

relevant URL

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`url`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22228

the XPath of the element

#### Implementation of

[`ILocalServicesDataforseoLabsSerpElementItem`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/ILocalServicesDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:118612

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

Defined in: main.ts:118637

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

Defined in: main.ts:118630

#### Parameters

##### data

`any`

#### Returns

[`LocalServicesDataforseoLabsSerpElementItem`](LocalServicesDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
