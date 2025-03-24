[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleDatasetInfoTasksFixedResultInfo

# Class: SerpGoogleDatasetInfoTasksFixedResultInfo

Defined in: main.ts:62184

## Implements

- [`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleDatasetInfoTasksFixedResultInfo**(`data`?): `SerpGoogleDatasetInfoTasksFixedResultInfo`

Defined in: main.ts:62209

#### Parameters

##### data?

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md)

#### Returns

`SerpGoogleDatasetInfoTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:62194

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:62202

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:62205

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:62199

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:62187

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:62189

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:62192

type of search engine
can take the following values: dataset_info

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:62196

user-defined task identifier

#### Implementation of

[`ISerpGoogleDatasetInfoTasksFixedResultInfo`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleDatasetInfoTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:62218

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:62242

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleDatasetInfoTasksFixedResultInfo`

Defined in: main.ts:62235

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleDatasetInfoTasksFixedResultInfo`
