[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataBingAudienceEstimationTasksReadyResultInfo

# Class: KeywordsDataBingAudienceEstimationTasksReadyResultInfo

Defined in: main.ts:152418

## Implements

- [`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new KeywordsDataBingAudienceEstimationTasksReadyResultInfo**(`data`?): `KeywordsDataBingAudienceEstimationTasksReadyResultInfo`

Defined in: main.ts:152435

#### Parameters

##### data?

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md)

#### Returns

`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:152427

date when the task was posted (in the UTC format)

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`date_posted`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#date_posted)

***

### endpoint?

> `optional` **endpoint**: `string`

Defined in: main.ts:152431

URL for collecting the results of the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`endpoint`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#endpoint)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:152425

type of the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`function`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#function)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:152421

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`id`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:152423

search engine specified when setting the task

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`se`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#se)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:152429

user-defined task identifier

#### Implementation of

[`IKeywordsDataBingAudienceEstimationTasksReadyResultInfo`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md).[`tag`](../interfaces/IKeywordsDataBingAudienceEstimationTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:152444

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:152466

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `KeywordsDataBingAudienceEstimationTasksReadyResultInfo`

Defined in: main.ts:152459

#### Parameters

##### data

`any`

#### Returns

`KeywordsDataBingAudienceEstimationTasksReadyResultInfo`
