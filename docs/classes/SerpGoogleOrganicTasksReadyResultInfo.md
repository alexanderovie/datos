[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTasksReadyResultInfo

# Class: SerpGoogleOrganicTasksReadyResultInfo

Defined in: main.ts:29765

## Implements

- [`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleOrganicTasksReadyResultInfo**(`data?`): `SerpGoogleOrganicTasksReadyResultInfo`

Defined in: main.ts:29790

#### Parameters

##### data?

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md)

#### Returns

`SerpGoogleOrganicTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:29775

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:29783

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:29786

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:29780

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:29768

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:29770

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:29773

type of search engine
example: organic

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:29777

user-defined task identifier

#### Implementation of

[`ISerpGoogleOrganicTasksReadyResultInfo`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:29799

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:29823

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleOrganicTasksReadyResultInfo`

Defined in: main.ts:29816

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleOrganicTasksReadyResultInfo`
