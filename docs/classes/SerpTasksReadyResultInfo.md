[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpTasksReadyResultInfo

# Class: SerpTasksReadyResultInfo

Defined in: main.ts:29977

## Implements

- [`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpTasksReadyResultInfo**(`data?`): `SerpTasksReadyResultInfo`

Defined in: main.ts:30002

#### Parameters

##### data?

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md)

#### Returns

`SerpTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:29987

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:29995

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:29998

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:29992

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:29980

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`id`](../interfaces/ISerpTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:29982

search engine specified when setting the task

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`se`](../interfaces/ISerpTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:29985

type of search engine
example: finance_ticker_search

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:29989

user-defined task identifier

#### Implementation of

[`ISerpTasksReadyResultInfo`](../interfaces/ISerpTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:30011

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:30035

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpTasksReadyResultInfo`

Defined in: main.ts:30028

#### Parameters

##### data

`any`

#### Returns

`SerpTasksReadyResultInfo`
