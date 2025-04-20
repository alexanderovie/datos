[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsTasksReadyResultInfo

# Class: SerpGoogleEventsTasksReadyResultInfo

Defined in: main.ts:51265

## Implements

- [`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleEventsTasksReadyResultInfo**(`data?`): `SerpGoogleEventsTasksReadyResultInfo`

Defined in: main.ts:51290

#### Parameters

##### data?

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md)

#### Returns

`SerpGoogleEventsTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:51275

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:51283

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:51286

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:51280

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:51268

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:51270

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:51273

type of search engine
example: events

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:51277

user-defined task identifier

#### Implementation of

[`ISerpGoogleEventsTasksReadyResultInfo`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleEventsTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:51299

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:51323

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleEventsTasksReadyResultInfo`

Defined in: main.ts:51316

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleEventsTasksReadyResultInfo`
