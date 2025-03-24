[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleSearchByImageTasksFixedResultInfo

# Class: SerpGoogleSearchByImageTasksFixedResultInfo

Defined in: main.ts:56024

## Implements

- [`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleSearchByImageTasksFixedResultInfo**(`data`?): `SerpGoogleSearchByImageTasksFixedResultInfo`

Defined in: main.ts:56049

#### Parameters

##### data?

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md)

#### Returns

`SerpGoogleSearchByImageTasksFixedResultInfo`

## Properties

### date\_fixed?

> `optional` **date\_fixed**: `string`

Defined in: main.ts:56034

date when the task was fixed (in the UTC format)

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`date_fixed`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#date_fixed)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:56042

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:56045

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:56039

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:56027

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`id`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:56029

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:56032

type of search engine
can take the following values: search_by_image

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`se_type`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:56036

user-defined task identifier

#### Implementation of

[`ISerpGoogleSearchByImageTasksFixedResultInfo`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md).[`tag`](../interfaces/ISerpGoogleSearchByImageTasksFixedResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:56058

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:56082

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleSearchByImageTasksFixedResultInfo`

Defined in: main.ts:56075

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleSearchByImageTasksFixedResultInfo`
