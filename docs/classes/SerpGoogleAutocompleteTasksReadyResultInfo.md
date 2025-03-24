[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpGoogleAutocompleteTasksReadyResultInfo

# Class: SerpGoogleAutocompleteTasksReadyResultInfo

Defined in: main.ts:58378

## Implements

- [`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpGoogleAutocompleteTasksReadyResultInfo**(`data`?): `SerpGoogleAutocompleteTasksReadyResultInfo`

Defined in: main.ts:58403

#### Parameters

##### data?

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md)

#### Returns

`SerpGoogleAutocompleteTasksReadyResultInfo`

## Properties

### date\_posted?

> `optional` **date\_posted**: `string`

Defined in: main.ts:58388

date when the task was posted (in the UTC format)

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`date_posted`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#date_posted)

***

### endpoint\_advanced?

> `optional` **endpoint\_advanced**: `string`

Defined in: main.ts:58396

URL for collecting the results of the SERP Advanced task
if SERP Advanced is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_advanced`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_advanced)

***

### endpoint\_html?

> `optional` **endpoint\_html**: `string`

Defined in: main.ts:58399

URL for collecting the results of the SERP HTML task
if SERP HTML is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_html`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_html)

***

### endpoint\_regular?

> `optional` **endpoint\_regular**: `string`

Defined in: main.ts:58393

URL for collecting the results of the SERP Regular task
if SERP Regular is not supported in the specified endpoint, the value will be null

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`endpoint_regular`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#endpoint_regular)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:58381

task identifier of the completed task
unique task identifier in our system in the UUID format

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`id`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#id)

***

### se?

> `optional` **se**: `string`

Defined in: main.ts:58383

search engine specified when setting the task

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`se`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:58386

type of search engine
example: autocomplete

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`se_type`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#se_type)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:58390

user-defined task identifier

#### Implementation of

[`ISerpGoogleAutocompleteTasksReadyResultInfo`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md).[`tag`](../interfaces/ISerpGoogleAutocompleteTasksReadyResultInfo.md#tag)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:58412

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:58436

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpGoogleAutocompleteTasksReadyResultInfo`

Defined in: main.ts:58429

#### Parameters

##### data

`any`

#### Returns

`SerpGoogleAutocompleteTasksReadyResultInfo`
