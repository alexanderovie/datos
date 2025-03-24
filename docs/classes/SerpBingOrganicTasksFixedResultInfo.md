[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpBingOrganicTasksFixedResultInfo

# Class: SerpBingOrganicTasksFixedResultInfo

Defined in: main.ts:66933

## Implements

- [`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpBingOrganicTasksFixedResultInfo**(`data`?): `SerpBingOrganicTasksFixedResultInfo`

Defined in: main.ts:66958

#### Parameters

##### data?

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md)

#### Returns

`SerpBingOrganicTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:66943

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:66951

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:66954

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:66948

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:66936

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:66938

search engine specified when setting the task

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:66941

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:66945

user-defined task identifier

#### Implementation of

[`ISerpBingOrganicTasksFixedResultInfo`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpBingOrganicTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:66967

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:66991

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpBingOrganicTasksFixedResultInfo`

Defined in: main.ts:66984

#### Parameters

##### data

`any`

#### Returns

`SerpBingOrganicTasksFixedResultInfo`
