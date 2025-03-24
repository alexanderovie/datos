[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpYahooOrganicTasksFixedResultInfo

# Class: SerpYahooOrganicTasksFixedResultInfo

Defined in: main.ts:78698

## Implements

- [`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpYahooOrganicTasksFixedResultInfo**(`data`?): `SerpYahooOrganicTasksFixedResultInfo`

Defined in: main.ts:78723

#### Parameters

##### data?

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md)

#### Returns

`SerpYahooOrganicTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:78708

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:78716

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:78719

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:78713

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:78701

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:78703

search engine specified when setting the task

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:78706

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:78710

user-defined task identifier

#### Implementation of

[`ISerpYahooOrganicTasksFixedResultInfo`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpYahooOrganicTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:78732

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:78756

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpYahooOrganicTasksFixedResultInfo`

Defined in: main.ts:78749

#### Parameters

##### data

`any`

#### Returns

`SerpYahooOrganicTasksFixedResultInfo`
