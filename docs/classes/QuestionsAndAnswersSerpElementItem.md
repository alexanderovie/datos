[**Documentation**](../README.md)

***

[Documentation](../README.md) / QuestionsAndAnswersSerpElementItem

# Class: QuestionsAndAnswersSerpElementItem

Defined in: main.ts:37927

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new QuestionsAndAnswersSerpElementItem**(`data?`): `QuestionsAndAnswersSerpElementItem`

Defined in: main.ts:37943

#### Parameters

##### data?

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md)

#### Returns

`QuestionsAndAnswersSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructor)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21992

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)[]

Defined in: main.ts:37935

contains arrays of specific images

#### Implementation of

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[`items`](../interfaces/IQuestionsAndAnswersSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:37931

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[`position`](../interfaces/IQuestionsAndAnswersSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21990

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[`rank_absolute`](../interfaces/IQuestionsAndAnswersSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21987

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[`rank_group`](../interfaces/IQuestionsAndAnswersSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:37939

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[`rectangle`](../interfaces/IQuestionsAndAnswersSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21983

type of element

#### Implementation of

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[`type`](../interfaces/IQuestionsAndAnswersSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:37933

the XPath of the element

#### Implementation of

[`IQuestionsAndAnswersSerpElementItem`](../interfaces/IQuestionsAndAnswersSerpElementItem.md).[`xpath`](../interfaces/IQuestionsAndAnswersSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:37948

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:37973

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `QuestionsAndAnswersSerpElementItem`

Defined in: main.ts:37966

#### Parameters

##### data

`any`

#### Returns

`QuestionsAndAnswersSerpElementItem`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
