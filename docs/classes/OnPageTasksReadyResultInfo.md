[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageTasksReadyResultInfo

# Class: OnPageTasksReadyResultInfo

Defined in: main.ts:176920

## Implements

- [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageTasksReadyResultInfo**(`data`?): `OnPageTasksReadyResultInfo`

Defined in: main.ts:176933

#### Parameters

##### data?

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

#### Returns

`OnPageTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:176927

date when the task was posted (in the UTC format)

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`date_posted`](../interfaces/IOnPageTasksReadyResultInfo.md#date_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:176923

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageTasksReadyResultInfo.md#id)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:176929

user-defined task identifier

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageTasksReadyResultInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:176925

target website specified when setting a task

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`target`](../interfaces/IOnPageTasksReadyResultInfo.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:176942

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:176962

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageTasksReadyResultInfo`

Defined in: main.ts:176955

#### Parameters

##### data

`any`

#### Returns

`OnPageTasksReadyResultInfo`
