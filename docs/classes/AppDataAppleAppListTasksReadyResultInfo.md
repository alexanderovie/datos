[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppListTasksReadyResultInfo

# Class: AppDataAppleAppListTasksReadyResultInfo

Defined in: main.ts:219150

## Implements

- [`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppListTasksReadyResultInfo**(`data`?): `AppDataAppleAppListTasksReadyResultInfo`

Defined in: main.ts:219170

#### Parameters

##### data?

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md)

#### Returns

`AppDataAppleAppListTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:219159

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:219163

URL for collecting the results of the Apple App List task

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:219166

URL for collecting the results of the Apple App List HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:219153

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:219155

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:219157

search engine type

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:219161

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppListTasksReadyResultInfo`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppListTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:219179

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:219202

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppListTasksReadyResultInfo`

Defined in: main.ts:219195

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppListTasksReadyResultInfo`
