[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleLocalFinderTasksFixedResultInfo

# Class: SerpGoogleLocalFinderTasksFixedResultInfo

Defined in: main.ts:46425

## Implements

- [`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleLocalFinderTasksFixedResultInfo**(`data?`): `SerpGoogleLocalFinderTasksFixedResultInfo`

Defined in: main.ts:46450

#### Parameters

##### data?

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md)

#### Returns

`SerpGoogleLocalFinderTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:46435

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:46443

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:46446

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:46440

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:46428

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:46430

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:46433

type of search engine
can take the following values: local_finder

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:46437

user-defined task identifier

#### Implementation of

[`ISerpGoogleLocalFinderTasksFixedResultInfo`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleLocalFinderTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:46459

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:46483

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleLocalFinderTasksFixedResultInfo`

Defined in: main.ts:46476

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleLocalFinderTasksFixedResultInfo`
