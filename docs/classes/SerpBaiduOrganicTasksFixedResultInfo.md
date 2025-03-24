[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBaiduOrganicTasksFixedResultInfo

# Class: SerpBaiduOrganicTasksFixedResultInfo

Defined in: main.ts:82402

## Implements

- [`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBaiduOrganicTasksFixedResultInfo**(`data`?): `SerpBaiduOrganicTasksFixedResultInfo`

Defined in: main.ts:82427

#### Parameters

##### data?

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md)

#### Returns

`SerpBaiduOrganicTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:82412

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:82420

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:82423

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:82417

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:82405

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:82407

search engine specified when setting the task

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:82410

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:82414

user-defined task identifier

#### Implementation of

[`ISerpBaiduOrganicTasksFixedResultInfo`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpBaiduOrganicTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:82436

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:82460

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBaiduOrganicTasksFixedResultInfo`

Defined in: main.ts:82453

#### Parameters

##### data

`any`

#### Returns

`SerpBaiduOrganicTasksFixedResultInfo`
