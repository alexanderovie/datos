[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppReviewsTasksReadyResultInfo

# Class: AppDataAppleAppReviewsTasksReadyResultInfo

Defined in: main.ts:220466

## Implements

- [`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppReviewsTasksReadyResultInfo**(`data?`): `AppDataAppleAppReviewsTasksReadyResultInfo`

Defined in: main.ts:220486

#### Parameters

##### data?

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md)

#### Returns

`AppDataAppleAppReviewsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:220475

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:220479

URL for collecting the results of the Apple app_reviews task

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:220482

URL for collecting the results of the Apple app_reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:220469

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:220471

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:220473

search engine type

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:220477

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppReviewsTasksReadyResultInfo`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppReviewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:220495

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:220518

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppReviewsTasksReadyResultInfo`

Defined in: main.ts:220511

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppReviewsTasksReadyResultInfo`
