[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleFinanceExploreTasksReadyResultInfo

# Class: SerpGoogleFinanceExploreTasksReadyResultInfo

Defined in: main.ts:87131

## Implements

- [`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SerpGoogleFinanceExploreTasksReadyResultInfo()

> **new SerpGoogleFinanceExploreTasksReadyResultInfo**(`data`?): [`SerpGoogleFinanceExploreTasksReadyResultInfo`](SerpGoogleFinanceExploreTasksReadyResultInfo.md)

Defined in: main.ts:87156

#### Parameters

##### data?

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md)

#### Returns

[`SerpGoogleFinanceExploreTasksReadyResultInfo`](SerpGoogleFinanceExploreTasksReadyResultInfo.md)

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:87141

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:87149

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:87152

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:87146

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:87134

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:87136

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:87139

type of search engine
example: finance_explore

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:87143

user-defined task identifier

#### Implementation of

[`ISerpGoogleFinanceExploreTasksReadyResultInfo`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleFinanceExploreTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:87165

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:87189

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SerpGoogleFinanceExploreTasksReadyResultInfo`](SerpGoogleFinanceExploreTasksReadyResultInfo.md)

Defined in: main.ts:87182

#### Parameters

##### data

`any`

#### Returns

[`SerpGoogleFinanceExploreTasksReadyResultInfo`](SerpGoogleFinanceExploreTasksReadyResultInfo.md)
