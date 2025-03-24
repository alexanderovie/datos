[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTasksReadyResultInfo

# Class: SerpGoogleLocalFinderTasksReadyResultInfo

Defined in: main.ts:46111

## Implements

- [`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleLocalFinderTasksReadyResultInfo**(`data`?): `SerpGoogleLocalFinderTasksReadyResultInfo`

Defined in: main.ts:46136

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md)

#### Returns

`SerpGoogleLocalFinderTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:46121

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:46129

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:46132

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:46126

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:46114

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:46116

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:46119

type of search engine
example: local_finder

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:46123

user-defined task identifier

#### Implementation of

[`ISerpGoogleLocalFinderTasksReadyResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleLocalFinderTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:46145

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:46169

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleLocalFinderTasksReadyResultInfo`

Defined in: main.ts:46162

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleLocalFinderTasksReadyResultInfo`
