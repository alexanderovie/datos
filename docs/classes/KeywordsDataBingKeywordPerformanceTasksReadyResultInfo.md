[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

# Class: KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

Defined in: main.ts:156710

## Implements

- [`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingKeywordPerformanceTasksReadyResultInfo**(`data`?): `KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`

Defined in: main.ts:156727

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Returns

`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:156719

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:156723

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#endpoint)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:156717

type of the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#function)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:156713

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:156715

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#se)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:156721

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:156736

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:156758

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`

Defined in: main.ts:156751

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`
