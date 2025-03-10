[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationGrammarRulesResponseInfo

# Class: ContentGenerationGrammarRulesResponseInfo

Defined in: main.ts:192628

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationGrammarRulesResponseInfo()

> **new ContentGenerationGrammarRulesResponseInfo**(`data`?): [`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

Defined in: main.ts:192634

#### Parameters

##### data?

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md)

#### Returns

[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`cost`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`status_code`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`status_message`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`ContentGenerationGrammarRulesTaskInfo`](ContentGenerationGrammarRulesTaskInfo.md)[]

Defined in: main.ts:192630

array of tasks

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`tasks`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`tasks_count`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`tasks_error`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`time`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IContentGenerationGrammarRulesResponseInfo`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md).[`version`](../interfaces/IContentGenerationGrammarRulesResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:192638

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:192660

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

Defined in: main.ts:192653

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationGrammarRulesResponseInfo`](ContentGenerationGrammarRulesResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
