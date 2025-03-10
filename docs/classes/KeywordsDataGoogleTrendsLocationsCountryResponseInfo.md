[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleTrendsLocationsCountryResponseInfo

# Class: KeywordsDataGoogleTrendsLocationsCountryResponseInfo

Defined in: main.ts:142380

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleTrendsLocationsCountryResponseInfo()

> **new KeywordsDataGoogleTrendsLocationsCountryResponseInfo**(`data`?): [`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

Defined in: main.ts:142386

#### Parameters

##### data?

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleTrendsLocationsCountryTaskInfo`](KeywordsDataGoogleTrendsLocationsCountryTaskInfo.md)[]

Defined in: main.ts:142382

array of tasks

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleTrendsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleTrendsLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:142390

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

Defined in: main.ts:142412

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

Defined in: main.ts:142405

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleTrendsLocationsCountryResponseInfo`](KeywordsDataGoogleTrendsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
