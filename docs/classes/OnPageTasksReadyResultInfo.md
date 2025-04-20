[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageTasksReadyResultInfo

# Class: OnPageTasksReadyResultInfo

Defined in: main.ts:177330

## Implements

- [`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageTasksReadyResultInfo**(`data?`): `OnPageTasksReadyResultInfo`

Defined in: main.ts:177343

#### Parameters

##### data?

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md)

#### Returns

`OnPageTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:177337

date when the task was posted (in the UTC format)

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`date_posted`](../interfaces/IOnPageTasksReadyResultInfo.md#date_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:177333

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`id`](../interfaces/IOnPageTasksReadyResultInfo.md#id)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:177339

user-defined task identifier

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`tag`](../interfaces/IOnPageTasksReadyResultInfo.md#tag)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:177335

target website specified when setting a task

#### Implementation of

[`IOnPageTasksReadyResultInfo`](../interfaces/IOnPageTasksReadyResultInfo.md).[`target`](../interfaces/IOnPageTasksReadyResultInfo.md#target)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:177352

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:177372

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageTasksReadyResultInfo`

Defined in: main.ts:177365

#### Parameters

##### data

`any`

#### Returns

`OnPageTasksReadyResultInfo`
