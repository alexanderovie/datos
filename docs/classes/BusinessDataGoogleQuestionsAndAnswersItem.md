[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersItem

# Class: BusinessDataGoogleQuestionsAndAnswersItem

Defined in: main.ts:236366

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleQuestionsAndAnswersItem**(`data`?): `BusinessDataGoogleQuestionsAndAnswersItem`

Defined in: main.ts:236398

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md)

#### Returns

`BusinessDataGoogleQuestionsAndAnswersItem`

## Properties

### items?

> `optional` **items**: [`GoogleBusinessAnswerElement`](GoogleBusinessAnswerElement.md)[]

Defined in: main.ts:236394

array of google business question items with answers
possible item types: google_business_question_item

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`items`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#items)

***

### original\_question\_text?

> `optional` **original\_question\_text**: `string`

Defined in: main.ts:236387

original text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`original_question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#original_question_text)

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:236379

URL of the user’s profile image

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_image_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_image_url)

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:236383

displayed name of the user

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_name`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_name)

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:236381

URL of the user’s profile

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`profile_url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#profile_url)

***

### question\_id?

> `optional` **question\_id**: `string`

Defined in: main.ts:236375

ID of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_id)

***

### question\_text?

> `optional` **question\_text**: `string`

Defined in: main.ts:236385

current text of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`question_text`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#question_text)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:236373

absolute rank among all the elements

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_absolute`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:236371

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`rank_group`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#rank_group)

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:236389

estimated time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`time_ago`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#time_ago)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:236391

exact time when the question was posted

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`timestamp`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#timestamp)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:236368

type of element

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:236377

URL of the question

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersItem`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md).[`url`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersItem.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:236407

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:236440

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleQuestionsAndAnswersItem`

Defined in: main.ts:236433

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleQuestionsAndAnswersItem`
