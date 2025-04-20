[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksReadyResultInfo

# Class: SerpGoogleSearchByImageTasksReadyResultInfo

Defined in: main.ts:55926

## Implements

- [`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleSearchByImageTasksReadyResultInfo**(`data?`): `SerpGoogleSearchByImageTasksReadyResultInfo`

Defined in: main.ts:55951

#### Parameters

##### data?

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md)

#### Returns

`SerpGoogleSearchByImageTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:55936

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:55944

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:55947

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:55941

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:55929

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:55931

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:55934

type of search engine
can take the following values: search_by_image

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:55938

user-defined task identifier

#### Implementation of

[`ISerpGoogleSearchByImageTasksReadyResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:55960

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:55984

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleSearchByImageTasksReadyResultInfo`

Defined in: main.ts:55977

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleSearchByImageTasksReadyResultInfo`
