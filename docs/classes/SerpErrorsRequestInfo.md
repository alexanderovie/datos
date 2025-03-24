[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpErrorsRequestInfo

# Class: SerpErrorsRequestInfo

Defined in: main.ts:27575

## Implements

- [`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpErrorsRequestInfo**(`data`?): `SerpErrorsRequestInfo`

Defined in: main.ts:27609

#### Parameters

##### data?

[`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md)

#### Returns

`SerpErrorsRequestInfo`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:27598

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md).[`datetime_from`](../interfaces/ISerpErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:27605

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md).[`datetime_to`](../interfaces/ISerpErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:27591

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: serp/task_get/advanced, postback_url, pingback_url

#### Implementation of

[`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md).[`filtered_function`](../interfaces/ISerpErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:27580

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md).[`limit`](../interfaces/ISerpErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:27585

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`ISerpErrorsRequestInfo`](../interfaces/ISerpErrorsRequestInfo.md).[`offset`](../interfaces/ISerpErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27618

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:27639

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpErrorsRequestInfo`

Defined in: main.ts:27632

#### Parameters

##### data

`any`

#### Returns

`SerpErrorsRequestInfo`
