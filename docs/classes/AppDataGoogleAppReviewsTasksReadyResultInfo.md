[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppReviewsTasksReadyResultInfo

# Class: AppDataGoogleAppReviewsTasksReadyResultInfo

Defined in: main.ts:214924

## Implements

- [`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataGoogleAppReviewsTasksReadyResultInfo**(`data`?): `AppDataGoogleAppReviewsTasksReadyResultInfo`

Defined in: main.ts:214944

#### Parameters

##### data?

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md)

#### Returns

`AppDataGoogleAppReviewsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:214933

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:214937

URL for collecting the results of the Google App Reviews task

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:214940

URL for collecting the results of the Google App Reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:214927

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:214929

search engine specified when setting the task

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:214931

search engine type

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:214935

user-defined task identifier

#### Implementation of

[`IAppDataGoogleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataGoogleAppReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:214953

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:214976

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataGoogleAppReviewsTasksReadyResultInfo`

Defined in: main.ts:214969

#### Parameters

##### data

`any`

#### Returns

`AppDataGoogleAppReviewsTasksReadyResultInfo`
