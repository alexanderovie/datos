[**Documentation**](../README.md)

***

[Documentation](../README.md) / ItemsWithoutAnswers

# Class: ItemsWithoutAnswers

Defined in: main.ts:236672

## Implements

- [`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ItemsWithoutAnswers**(`data?`): `ItemsWithoutAnswers`

Defined in: main.ts:236704

#### Parameters

##### data?

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md)

#### Returns

`ItemsWithoutAnswers`

## Properties

### items?

> `optional` **items**: [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)

Defined in: main.ts:236700

array of items
items within google_business_question_item

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`items`](../interfaces/IItemsWithoutAnswers.md#items)

***

### original\_question\_text?

> `optional` **original\_question\_text**: `string`

Defined in: main.ts:236693

original text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`original_question_text`](../interfaces/IItemsWithoutAnswers.md#original_question_text)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:236685

URL of the user’s profile image

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_image_url`](../interfaces/IItemsWithoutAnswers.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:236689

displayed name of the user

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_name`](../interfaces/IItemsWithoutAnswers.md#profile_name)

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:236687

URL of the user’s profile

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`profile_url`](../interfaces/IItemsWithoutAnswers.md#profile_url)

***

### question\_id?

> `optional` **question\_id**: `string`

Defined in: main.ts:236681

ID of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_id`](../interfaces/IItemsWithoutAnswers.md#question_id)

***

### question\_text?

> `optional` **question\_text**: `string`

Defined in: main.ts:236691

current text of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`question_text`](../interfaces/IItemsWithoutAnswers.md#question_text)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:236679

absolute rank among all the elements

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_absolute`](../interfaces/IItemsWithoutAnswers.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:236677

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`rank_group`](../interfaces/IItemsWithoutAnswers.md#rank_group)

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:236695

estimated time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`time_ago`](../interfaces/IItemsWithoutAnswers.md#time_ago)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:236697

exact time when the question was posted

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`timestamp`](../interfaces/IItemsWithoutAnswers.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:236674

type of element

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`type`](../interfaces/IItemsWithoutAnswers.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:236683

URL of the question

#### Implementation of

[`IItemsWithoutAnswers`](../interfaces/IItemsWithoutAnswers.md).[`url`](../interfaces/IItemsWithoutAnswers.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:236713

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:236742

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ItemsWithoutAnswers`

Defined in: main.ts:236735

#### Parameters

##### data

`any`

#### Returns

`ItemsWithoutAnswers`
