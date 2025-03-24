[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleNewsTasksFixedResultInfo

# Class: SerpGoogleNewsTasksFixedResultInfo

Defined in: main.ts:48741

## Implements

- [`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleNewsTasksFixedResultInfo**(`data`?): `SerpGoogleNewsTasksFixedResultInfo`

Defined in: main.ts:48766

#### Parameters

##### data?

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md)

#### Returns

`SerpGoogleNewsTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:48751

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:48759

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:48762

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:48756

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:48744

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:48746

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:48749

type of search engine
can take the following values: news

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:48753

user-defined task identifier

#### Implementation of

[`ISerpGoogleNewsTasksFixedResultInfo`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleNewsTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:48775

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:48799

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleNewsTasksFixedResultInfo`

Defined in: main.ts:48792

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleNewsTasksFixedResultInfo`
