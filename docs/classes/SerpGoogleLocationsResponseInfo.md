[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocationsResponseInfo

# Class: SerpGoogleLocationsResponseInfo

Defined in: main.ts:28730

## Extends

- [`BaseResponseInfo`](BaseResponseInfo.md)

## Implements

- [`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleLocationsResponseInfo**(`data?`): `SerpGoogleLocationsResponseInfo`

Defined in: main.ts:28736

#### Parameters

##### data?

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md)

#### Returns

`SerpGoogleLocationsResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`constructor`](BaseResponseInfo.md#constructor)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:26369

total tasks cost, USD

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`cost`](../interfaces/ISerpGoogleLocationsResponseInfo.md#cost)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`cost`](BaseResponseInfo.md#cost)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:26362

general status code
you can find the full list of the response codes here

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`status_code`](../interfaces/ISerpGoogleLocationsResponseInfo.md#status_code)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_code`](BaseResponseInfo.md#status_code)

***

### status\_message?

> `optional` **status\_message**: `string`

Defined in: main.ts:26365

general informational message
you can find the full list of general informational messages here

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`status_message`](../interfaces/ISerpGoogleLocationsResponseInfo.md#status_message)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`status_message`](BaseResponseInfo.md#status_message)

***

### tasks?

> `optional` **tasks**: [`SerpGoogleLocationsTaskInfo`](SerpGoogleLocationsTaskInfo.md)[]

Defined in: main.ts:28732

array of tasks

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`tasks`](../interfaces/ISerpGoogleLocationsResponseInfo.md#tasks)

***

### tasks\_count?

> `optional` **tasks\_count**: `number`

Defined in: main.ts:26371

the number of tasks in the tasks array

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`tasks_count`](../interfaces/ISerpGoogleLocationsResponseInfo.md#tasks_count)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_count`](BaseResponseInfo.md#tasks_count)

***

### tasks\_error?

> `optional` **tasks\_error**: `number`

Defined in: main.ts:26373

the number of tasks in the tasks array returned with an error

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`tasks_error`](../interfaces/ISerpGoogleLocationsResponseInfo.md#tasks_error)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`tasks_error`](BaseResponseInfo.md#tasks_error)

***

### time?

> `optional` **time**: `string`

Defined in: main.ts:26367

total execution time, seconds

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`time`](../interfaces/ISerpGoogleLocationsResponseInfo.md#time)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`time`](BaseResponseInfo.md#time)

***

### version?

> `optional` **version**: `string`

Defined in: main.ts:26359

the current version of the API

#### Implementation of

[`ISerpGoogleLocationsResponseInfo`](../interfaces/ISerpGoogleLocationsResponseInfo.md).[`version`](../interfaces/ISerpGoogleLocationsResponseInfo.md#version)

#### Inherited from

[`BaseResponseInfo`](BaseResponseInfo.md).[`version`](BaseResponseInfo.md#version)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:28740

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`init`](BaseResponseInfo.md#init)

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:28762

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`toJSON`](BaseResponseInfo.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleLocationsResponseInfo`

Defined in: main.ts:28755

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleLocationsResponseInfo`

#### Overrides

[`BaseResponseInfo`](BaseResponseInfo.md).[`fromJS`](BaseResponseInfo.md#fromjs)
