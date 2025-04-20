[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTasksReadyResultInfo

# Class: SerpNaverOrganicTasksReadyResultInfo

Defined in: main.ts:83976

## Implements

- [`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpNaverOrganicTasksReadyResultInfo**(`data?`): `SerpNaverOrganicTasksReadyResultInfo`

Defined in: main.ts:84001

#### Parameters

##### data?

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md)

#### Returns

`SerpNaverOrganicTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:83986

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:83994

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:83997

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:83991

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:83979

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:83981

search engine specified when setting the task

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:83984

type of search engine
example: organic

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:83988

user-defined task identifier

#### Implementation of

[`ISerpNaverOrganicTasksReadyResultInfo`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpNaverOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:84010

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:84034

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpNaverOrganicTasksReadyResultInfo`

Defined in: main.ts:84027

#### Parameters

##### data

`any`

#### Returns

`SerpNaverOrganicTasksReadyResultInfo`
