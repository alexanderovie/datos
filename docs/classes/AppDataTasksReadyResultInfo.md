[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataTasksReadyResultInfo

# Class: AppDataTasksReadyResultInfo

Defined in: main.ts:212112

## Implements

- [`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataTasksReadyResultInfo**(`data?`): `AppDataTasksReadyResultInfo`

Defined in: main.ts:212132

#### Parameters

##### data?

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md)

#### Returns

`AppDataTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:212121

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:212125

URL for collecting the results of the Apple app_reviews task

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:212128

URL for collecting the results of the Apple app_reviews HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:212115

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:212117

search engine specified when setting the task

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:212119

search engine type

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:212123

user-defined task identifier

#### Implementation of

[`IAppDataTasksReadyResultInfo`](../interfaces/IAppDataTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:212141

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:212164

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataTasksReadyResultInfo`

Defined in: main.ts:212157

#### Parameters

##### data

`any`

#### Returns

`AppDataTasksReadyResultInfo`
