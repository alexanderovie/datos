[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo

Defined in: main.ts:236617

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo**(`data?`): `BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`

Defined in: main.ts:236623

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md)

#### Returns

`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`cost`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`status_code`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`status_message`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`BusinessDataGoogleQuestionsAndAnswersTasksReadyTaskInfo`](BusinessDataGoogleQuestionsAndAnswersTasksReadyTaskInfo.md)[]

Defined in: main.ts:236619

array of tasks

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`tasks`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`tasks_count`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`tasks_error`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`time`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md).[`version`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:236627

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:236649

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`

Defined in: main.ts:236642

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleQuestionsAndAnswersTasksReadyResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
