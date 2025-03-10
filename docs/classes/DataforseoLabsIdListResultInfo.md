[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsIdListResultInfo

# Class: DataforseoLabsIdListResultInfo

Defined in: main.ts:99379

## Implements

- [`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsIdListResultInfo()

> **new DataforseoLabsIdListResultInfo**(`data`?): [`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

Defined in: main.ts:99405

#### Parameters

##### data?

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md)

#### Returns

[`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:99399

cost of the task, USD

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`cost`](../interfaces/IDataforseoLabsIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:99394

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`datetime_done`](../interfaces/IDataforseoLabsIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:99389

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`datetime_posted`](../interfaces/IDataforseoLabsIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:99381

id of the task

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`id`](../interfaces/IDataforseoLabsIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:99401

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`metadata`](../interfaces/IDataforseoLabsIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:99397

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`status`](../interfaces/IDataforseoLabsIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:99384

URL of the task
URL you used for making an API call

#### Implementation of

[`IDataforseoLabsIdListResultInfo`](../interfaces/IDataforseoLabsIdListResultInfo.md).[`url`](../interfaces/IDataforseoLabsIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:99414

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:99443

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)

Defined in: main.ts:99436

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsIdListResultInfo`](DataforseoLabsIdListResultInfo.md)
