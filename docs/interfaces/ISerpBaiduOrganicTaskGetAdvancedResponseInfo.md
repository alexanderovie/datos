[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpBaiduOrganicTaskGetAdvancedResponseInfo

# Interface: ISerpBaiduOrganicTaskGetAdvancedResponseInfo

Defined in: main.ts:82846

## Extends

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26091

total tasks cost, USD

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`cost`](IBaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26084

general status code
you can find the full list of the response codes here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_code`](IBaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26087

general informational message
you can find the full list of general informational messages here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_message`](IBaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpBaiduOrganicTaskGetAdvancedTaskInfo`](../classes/SerpBaiduOrganicTaskGetAdvancedTaskInfo.md)[]

Defined in: main.ts:82848

array of tasks

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26093

the number of tasks in the tasks array

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_count`](IBaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26095

the number of tasks in the tasks array returned with an error

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_error`](IBaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26089

total execution time, seconds

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`time`](IBaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26081

the current version of the API

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`version`](IBaseResponseInfo.md#version)
