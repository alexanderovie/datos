[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleEventsTasksFixedResultInfo

# Class: SerpGoogleEventsTasksFixedResultInfo

Defined in: main.ts:51363

## Implements

- [`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleEventsTasksFixedResultInfo**(`data`?): `SerpGoogleEventsTasksFixedResultInfo`

Defined in: main.ts:51388

#### Parameters

##### data?

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md)

#### Returns

`SerpGoogleEventsTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:51373

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:51381

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:51384

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:51378

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:51366

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:51368

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:51371

type of search engine
can take the following values: events

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:51375

user-defined task identifier

#### Implementation of

[`ISerpGoogleEventsTasksFixedResultInfo`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleEventsTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:51397

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:51421

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleEventsTasksFixedResultInfo`

Defined in: main.ts:51414

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleEventsTasksFixedResultInfo`
