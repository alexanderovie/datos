[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo

# Class: SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo

Defined in: main.ts:75827

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo**(`data`?): `SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`

Defined in: main.ts:75833

#### Parameters

##### data?

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md)

#### Returns

`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26361

total tasks cost, USD

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`cost`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26354

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`status_code`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26357

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`status_message`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo`](SerpYoutubeVideoSubtitlesLiveAdvancedTaskInfo.md)[]

Defined in: main.ts:75829

array of tasks

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`tasks`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26363

the number of tasks in the tasks array

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`tasks_count`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26365

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`tasks_error`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26359

total execution time, seconds

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`time`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26351

the current version of the API

#### Implementation of

[`ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md).[`version`](../interfaces/ISerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:75837

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

Defined in: main.ts:75859

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`

Defined in: main.ts:75852

#### Parameters

##### data

`any`

#### Returns

`SerpYoutubeVideoSubtitlesLiveAdvancedResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
