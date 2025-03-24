[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleMapsTasksFixedResultInfo

# Class: SerpGoogleMapsTasksFixedResultInfo

Defined in: main.ts:44021

## Implements

- [`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleMapsTasksFixedResultInfo**(`data`?): `SerpGoogleMapsTasksFixedResultInfo`

Defined in: main.ts:44046

#### Parameters

##### data?

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md)

#### Returns

`SerpGoogleMapsTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:44031

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:44039

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:44042

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:44036

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:44024

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:44026

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:44029

type of search engine
can take the following values: maps

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:44033

user-defined task identifier

#### Implementation of

[`ISerpGoogleMapsTasksFixedResultInfo`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleMapsTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:44055

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:44079

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleMapsTasksFixedResultInfo`

Defined in: main.ts:44072

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleMapsTasksFixedResultInfo`
