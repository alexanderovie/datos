[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppInfoTasksReadyResultInfo

# Class: AppDataAppleAppInfoTasksReadyResultInfo

Defined in: main.ts:218120

## Implements

- [`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new AppDataAppleAppInfoTasksReadyResultInfo**(`data`?): `AppDataAppleAppInfoTasksReadyResultInfo`

Defined in: main.ts:218140

#### Parameters

##### data?

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md)

#### Returns

`AppDataAppleAppInfoTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:218129

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:218133

URL for collecting the results of the Apple App Info task

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:218136

URL for collecting the results of the Apple App Info HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:218123

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:218125

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:218127

search engine type

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:218131

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppInfoTasksReadyResultInfo`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppInfoTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:218149

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:218172

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `AppDataAppleAppInfoTasksReadyResultInfo`

Defined in: main.ts:218165

#### Parameters

##### data

`any`

#### Returns

`AppDataAppleAppInfoTasksReadyResultInfo`
