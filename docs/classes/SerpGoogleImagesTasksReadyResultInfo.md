[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleImagesTasksReadyResultInfo

# Class: SerpGoogleImagesTasksReadyResultInfo

Defined in: main.ts:53265

## Implements

- [`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleImagesTasksReadyResultInfo**(`data?`): `SerpGoogleImagesTasksReadyResultInfo`

Defined in: main.ts:53290

#### Parameters

##### data?

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md)

#### Returns

`SerpGoogleImagesTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:53275

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:53283

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:53286

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:53280

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:53268

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:53270

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:53273

type of search engine
example: images

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:53277

user-defined task identifier

#### Implementation of

[`ISerpGoogleImagesTasksReadyResultInfo`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleImagesTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:53299

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:53323

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleImagesTasksReadyResultInfo`

Defined in: main.ts:53316

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleImagesTasksReadyResultInfo`
