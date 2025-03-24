[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsErrorsRequestInfo

# Class: DataforseoLabsErrorsRequestInfo

Defined in: main.ts:101734

## Implements

- [`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new DataforseoLabsErrorsRequestInfo**(`data`?): `DataforseoLabsErrorsRequestInfo`

Defined in: main.ts:101768

#### Parameters

##### data?

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md)

#### Returns

`DataforseoLabsErrorsRequestInfo`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:101757

start time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`datetime_from`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:101764

finish time for filtering results
optional field
allows filtering results by the datetime parameter within the range of the last 7 days;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2021-11-15 13:57:46 +00:00

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`datetime_to`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#datetime_to)

***

### filtered\_function?

> `optional` **filtered\_function**: `string`

Defined in: main.ts:101750

return tasks with a certain function
use this field to obtain a list of tasks that returned an error filtered by a certain function
you can filter the results by the values you receive in the function fields of the API response
i.e., once you receive unfiltered results, you can call this API again to filter them by function
example: dataforseo_labs/related_keywords/live

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`filtered_function`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#filtered_function)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:101739

the maximum number of returned tasks that responded with an error
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`limit`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:101744

offset in the results array of returned tasks
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted and the data will be provided for the successive tasks

#### Implementation of

[`IDataforseoLabsErrorsRequestInfo`](../interfaces/IDataforseoLabsErrorsRequestInfo.md).[`offset`](../interfaces/IDataforseoLabsErrorsRequestInfo.md#offset)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101777

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101798

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `DataforseoLabsErrorsRequestInfo`

Defined in: main.ts:101791

#### Parameters

##### data

`any`

#### Returns

`DataforseoLabsErrorsRequestInfo`
