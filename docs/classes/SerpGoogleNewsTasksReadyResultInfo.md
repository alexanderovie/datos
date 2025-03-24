[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTasksReadyResultInfo

# Class: SerpGoogleNewsTasksReadyResultInfo

Defined in: main.ts:48529

## Implements

- [`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleNewsTasksReadyResultInfo**(`data`?): `SerpGoogleNewsTasksReadyResultInfo`

Defined in: main.ts:48554

#### Parameters

##### data?

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md)

#### Returns

`SerpGoogleNewsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:48539

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:48547

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:48550

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:48544

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:48532

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:48534

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:48537

type of search engine
example: news

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:48541

user-defined task identifier

#### Implementation of

[`ISerpGoogleNewsTasksReadyResultInfo`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:48563

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:48587

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleNewsTasksReadyResultInfo`

Defined in: main.ts:48580

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleNewsTasksReadyResultInfo`
