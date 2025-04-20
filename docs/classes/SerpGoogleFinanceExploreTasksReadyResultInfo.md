[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreTasksReadyResultInfo

# Class: SerpGoogleFinanceExploreTasksReadyResultInfo

Defined in: main.ts:87670

## Implements

- [`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleFinanceExploreTasksReadyResultInfo**(`data?`): `SerpGoogleFinanceExploreTasksReadyResultInfo`

Defined in: main.ts:87695

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md)

#### Returns

`SerpGoogleFinanceExploreTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:87680

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:87688

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:87691

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:87685

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:87673

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:87675

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:87678

type of search engine
example: finance_explore

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:87682

user-defined task identifier

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:87704

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:87728

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleFinanceExploreTasksReadyResultInfo`

Defined in: main.ts:87721

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleFinanceExploreTasksReadyResultInfo`
