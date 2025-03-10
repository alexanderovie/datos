[**Documentation**](../README.md)

***

[Documentation](../README.md) / MathSolverDataforseoLabsSerpElementItem

# Class: MathSolverDataforseoLabsSerpElementItem

Defined in: main.ts:116286

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new MathSolverDataforseoLabsSerpElementItem()

> **new MathSolverDataforseoLabsSerpElementItem**(`data`?): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

Defined in: main.ts:116302

#### Parameters

##### data?

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md)

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

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

> `optional` **items**: [`MathSolverElement`](MathSolverElement.md)[]

Defined in: main.ts:116294

additional items present in the element
if there are none, equals null

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#items)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:116298

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:22226

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:22222

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:22219

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### result?

> `optional` **result**: `string`

Defined in: main.ts:116291

solution to the equation
solution to the mathematical equation specified in the keyword field when setting a task

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`result`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#result)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:116288

title of the result in SERP

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`title`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:22216

type of element

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:22228

the XPath of the element

#### Implementation of

[`IMathSolverDataforseoLabsSerpElementItem`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IMathSolverDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:116307

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

Defined in: main.ts:116336

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

Defined in: main.ts:116329

#### Parameters

##### data

`any`

#### Returns

[`MathSolverDataforseoLabsSerpElementItem`](MathSolverDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
