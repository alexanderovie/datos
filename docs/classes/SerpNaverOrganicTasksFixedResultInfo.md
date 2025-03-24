[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpNaverOrganicTasksFixedResultInfo

# Class: SerpNaverOrganicTasksFixedResultInfo

Defined in: main.ts:84076

## Implements

- [`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpNaverOrganicTasksFixedResultInfo**(`data`?): `SerpNaverOrganicTasksFixedResultInfo`

Defined in: main.ts:84101

#### Parameters

##### data?

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md)

#### Returns

`SerpNaverOrganicTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:84086

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:84094

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:84097

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:84091

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:84079

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:84081

search engine specified when setting the task

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:84084

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:84088

user-defined task identifier

#### Implementation of

[`ISerpNaverOrganicTasksFixedResultInfo`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpNaverOrganicTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:84110

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:84134

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpNaverOrganicTasksFixedResultInfo`

Defined in: main.ts:84127

#### Parameters

##### data

`any`

#### Returns

`SerpNaverOrganicTasksFixedResultInfo`
