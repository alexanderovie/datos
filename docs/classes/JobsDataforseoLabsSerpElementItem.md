[**Documentation**](../README.md)

***

[Documentation](../README.md) / JobsDataforseoLabsSerpElementItem

# Class: JobsDataforseoLabsSerpElementItem

Defined in: main.ts:119255

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new JobsDataforseoLabsSerpElementItem**(`data?`): `JobsDataforseoLabsSerpElementItem`

Defined in: main.ts:119266

#### Parameters

##### data?

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md)

#### Returns

`JobsDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:22577

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`JobsElement`](JobsElement.md)[]

Defined in: main.ts:119262

additional items present in the element
if there are none, equals null

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22573

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22569

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22566

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:119257

title of the result in SERP

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22563

type of element

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:119259

relevant URL

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`url`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22575

the XPath of the element

#### Implementation of

[`IJobsDataforseoLabsSerpElementItem`](../interfaces/IJobsDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IJobsDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:119271

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:119295

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `JobsDataforseoLabsSerpElementItem`

Defined in: main.ts:119288

#### Parameters

##### data

`any`

#### Returns

`JobsDataforseoLabsSerpElementItem`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
