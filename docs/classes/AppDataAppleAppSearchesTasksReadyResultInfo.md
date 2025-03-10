[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataAppleAppSearchesTasksReadyResultInfo

# Class: AppDataAppleAppSearchesTasksReadyResultInfo

Defined in: main.ts:214963

## Implements

- [`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppSearchesTasksReadyResultInfo()

> **new AppDataAppleAppSearchesTasksReadyResultInfo**(`data`?): [`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

Defined in: main.ts:214983

#### Parameters

##### data?

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md)

#### Returns

[`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:214972

date when the task was posted (in the UTC format)

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`date_posted`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:214976

URL for collecting the results of the Apple App Searches task

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:214979

URL for collecting the results of the Apple App Searches HTML task
if HTML tasks are not supported in the specified endpoint, the value will be null

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#endpoint_html)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:214966

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`id`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:214968

search engine specified when setting the task

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`se`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:214970

search engine type

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`se_type`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:214974

user-defined task identifier

#### Implementation of

[`IAppDataAppleAppSearchesTasksReadyResultInfo`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md).[`tag`](../interfaces/IAppDataAppleAppSearchesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:214992

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:215015

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)

Defined in: main.ts:215008

#### Parameters

##### data

`any`

#### Returns

[`AppDataAppleAppSearchesTasksReadyResultInfo`](AppDataAppleAppSearchesTasksReadyResultInfo.md)
