[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAdsSearchTasksReadyResultInfo

# Class: SerpGoogleAdsSearchTasksReadyResultInfo

Defined in: main.ts:64975

## Implements

- [`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAdsSearchTasksReadyResultInfo**(`data`?): `SerpGoogleAdsSearchTasksReadyResultInfo`

Defined in: main.ts:65000

#### Parameters

##### data?

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md)

#### Returns

`SerpGoogleAdsSearchTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:64985

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:64993

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:64996

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:64990

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:64978

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:64980

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:64983

type of search engine
example: ads_search

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:64987

user-defined task identifier

#### Implementation of

[`ISerpGoogleAdsSearchTasksReadyResultInfo`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAdsSearchTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:65009

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:65033

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAdsSearchTasksReadyResultInfo`

Defined in: main.ts:65026

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAdsSearchTasksReadyResultInfo`
