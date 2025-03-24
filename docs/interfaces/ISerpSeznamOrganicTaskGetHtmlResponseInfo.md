[**Documentation**](../README.md)

***

[Documentation](../README.md) / ISerpSeznamOrganicTaskGetHtmlResponseInfo

# Interface: ISerpSeznamOrganicTaskGetHtmlResponseInfo

Defined in: main.ts:87213

## Extends

- [`IBaseResponseInfo`](IBaseResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26430

total tasks cost, USD

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`cost`](IBaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26423

general status code
you can find the full list of the response codes here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_code`](IBaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26426

general informational message
you can find the full list of general informational messages here

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`status_message`](IBaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpSeznamOrganicTaskGetHtmlTaskInfo`](../classes/SerpSeznamOrganicTaskGetHtmlTaskInfo.md)[]

Defined in: main.ts:87215

array of tasks

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26432

the number of tasks in the tasks array

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_count`](IBaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26434

the number of tasks in the tasks array returned with an error

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`tasks_error`](IBaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26428

total execution time, seconds

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`time`](IBaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26420

the current version of the API

#### Inherited from

[`IBaseResponseInfo`](IBaseResponseInfo.md).[`version`](IBaseResponseInfo.md#version)
