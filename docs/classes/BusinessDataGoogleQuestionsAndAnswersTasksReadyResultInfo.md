[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

# Class: BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo

Defined in: main.ts:235948

## Implements

- [`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo**(`data`?): `BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`

Defined in: main.ts:235966

#### Parameters

##### data?

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md)

#### Returns

`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:235958

date when the task was posted (in the UTC format)

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`date_posted`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:235962

URL for collecting the results of the task

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`endpoint`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#endpoint)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:235951

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`id`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:235954

search engine specified when setting the task
can take the following values: google

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:235956

search engine type

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`se_type`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:235960

user-defined task identifier

#### Implementation of

[`IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md).[`tag`](../interfaces/IBusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:235975

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:235997

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`

Defined in: main.ts:235990

#### Parameters

##### data

`any`

#### Returns

`BusinessDataGoogleQuestionsAndAnswersTasksReadyResultInfo`
