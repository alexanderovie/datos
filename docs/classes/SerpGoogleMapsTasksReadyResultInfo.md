[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksReadyResultInfo

# Class: SerpGoogleMapsTasksReadyResultInfo

Defined in: main.ts:43809

## Implements

- [`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleMapsTasksReadyResultInfo**(`data`?): `SerpGoogleMapsTasksReadyResultInfo`

Defined in: main.ts:43834

#### Parameters

##### data?

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md)

#### Returns

`SerpGoogleMapsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:43819

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:43827

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:43830

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:43824

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:43812

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:43814

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:43817

type of search engine
example: maps

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:43821

user-defined task identifier

#### Implementation of

[`ISerpGoogleMapsTasksReadyResultInfo`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleMapsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:43843

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:43867

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleMapsTasksReadyResultInfo`

Defined in: main.ts:43860

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleMapsTasksReadyResultInfo`
