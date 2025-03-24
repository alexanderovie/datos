[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleOrganicTasksFixedResultInfo

# Class: SerpGoogleOrganicTasksFixedResultInfo

Defined in: main.ts:30181

## Implements

- [`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleOrganicTasksFixedResultInfo**(`data`?): `SerpGoogleOrganicTasksFixedResultInfo`

Defined in: main.ts:30206

#### Parameters

##### data?

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md)

#### Returns

`SerpGoogleOrganicTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:30191

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:30199

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:30202

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:30196

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:30184

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:30186

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:30189

type of search engine
can take the following values: organic

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:30193

user-defined task identifier

#### Implementation of

[`ISerpGoogleOrganicTasksFixedResultInfo`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleOrganicTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30215

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:30239

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleOrganicTasksFixedResultInfo`

Defined in: main.ts:30232

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleOrganicTasksFixedResultInfo`
