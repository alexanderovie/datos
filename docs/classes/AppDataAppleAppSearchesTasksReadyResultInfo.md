[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTasksReadyResultInfo

# Class: AppDataAppleAppSearchesTasksReadyResultInfo

Defined in: main.ts:217372

## Implements

- [`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppSearchesTasksReadyResultInfo**(`data`?): `AppDataAppleAppSearchesTasksReadyResultInfo`

Defined in: main.ts:217392

#### Parameters

##### data?

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Returns

`AppDataAppleAppSearchesTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:217381

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:217385

URL for collecting the results of the Apple App Searches task

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:217388

URL for collecting the results of the Apple App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:217375

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:217377

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:217379

search engine type

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:217383

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:217401

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:217424

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppSearchesTasksReadyResultInfo`

Defined in: main.ts:217417

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppSearchesTasksReadyResultInfo`
