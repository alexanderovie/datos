[**Documentation**](../README.md)

***

[Documentation](../README.md) / KeywordsDataGoogleAdsLocationsCountryResponseInfo

# Class: KeywordsDataGoogleAdsLocationsCountryResponseInfo

Defined in: main.ts:135960

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new KeywordsDataGoogleAdsLocationsCountryResponseInfo()

> **new KeywordsDataGoogleAdsLocationsCountryResponseInfo**(`data`?): [`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

Defined in: main.ts:135966

#### Parameters

##### data?

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructors)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26022

total tasks cost, USD

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`cost`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26015

general status code
you can find the full list of the response codes here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`status_code`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26018

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`status_message`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`KeywordsDataGoogleAdsLocationsCountryTaskInfo`](KeywordsDataGoogleAdsLocationsCountryTaskInfo.md)[]

Defined in: main.ts:135962

array of tasks

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`tasks`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26024

the number of tasks in the tasks array

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`tasks_count`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26026

the number of tasks in the tasks array returned with an error

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`tasks_error`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26020

total execution time, seconds

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`time`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26012

the current version of the API

#### Implementation of

[`IKeywordsDataGoogleAdsLocationsCountryResponseInfo`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md).[`version`](../interfaces/IKeywordsDataGoogleAdsLocationsCountryResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:135970

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

Defined in: main.ts:135992

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

Defined in: main.ts:135985

#### Parameters

##### data

`any`

#### Returns

[`KeywordsDataGoogleAdsLocationsCountryResponseInfo`](KeywordsDataGoogleAdsLocationsCountryResponseInfo.md)

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
