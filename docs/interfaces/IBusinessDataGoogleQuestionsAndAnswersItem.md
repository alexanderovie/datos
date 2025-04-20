[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBusinessDataGoogleQuestionsAndAnswersItem

# Interface: IBusinessDataGoogleQuestionsAndAnswersItem

Defined in: main.ts:236997

## Indexable

\[`key`: `string`\]: `any`

## Properties

### items?

> `optional` **items**: [`GoogleBusinessAnswerElement`](../classes/GoogleBusinessAnswerElement.md)[]

Defined in: main.ts:237025

array of google business question items with answers
possible item types: google_business_question_item

***

### original\_question\_text?

> `optional` **original\_question\_text**: `string`

Defined in: main.ts:237018

original text of the question

***

### profile\_image\_url?

> `optional` **profile\_image\_url**: `string`

Defined in: main.ts:237010

URL of the user’s profile image

***

### profile\_name?

> `optional` **profile\_name**: `string`

Defined in: main.ts:237014

displayed name of the user

***

### profile\_url?

> `optional` **profile\_url**: `string`

Defined in: main.ts:237012

URL of the user’s profile

***

### question\_id?

> `optional` **question\_id**: `string`

Defined in: main.ts:237006

ID of the question

***

### question\_text?

> `optional` **question\_text**: `string`

Defined in: main.ts:237016

current text of the question

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:237004

absolute rank among all the elements

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:237002

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

***

### time\_ago?

> `optional` **time\_ago**: `string`

Defined in: main.ts:237020

estimated time when the question was posted

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:237022

exact time when the question was posted

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:236999

type of element

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:237008

URL of the question
