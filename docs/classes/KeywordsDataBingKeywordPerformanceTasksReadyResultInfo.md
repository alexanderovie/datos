[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

# Class: KeywordsDataBingKeywordPerformanceTasksReadyResultInfo

Defined in: main.ts:156834

## Implements

- [`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingKeywordPerformanceTasksReadyResultInfo**(`data?`): `KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`

Defined in: main.ts:156851

#### Parameters

##### data?

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md)

#### Returns

`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:156843

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:156847

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#endpoint)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:156841

type of the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#function)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:156837

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:156839

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#se)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:156845

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingKeywordPerformanceTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:156860

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:156882

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`

Defined in: main.ts:156875

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingKeywordPerformanceTasksReadyResultInfo`
