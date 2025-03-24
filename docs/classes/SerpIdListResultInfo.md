[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpIdListResultInfo

# Class: SerpIdListResultInfo

Defined in: main.ts:27351

## Implements

- [`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpIdListResultInfo**(`data`?): `SerpIdListResultInfo`

Defined in: main.ts:27377

#### Parameters

##### data?

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md)

#### Returns

`SerpIdListResultInfo`

## Properties

### cost?

> `optional` **cost**: `number`

Defined in: main.ts:27371

cost of the task, USD

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`cost`](../interfaces/ISerpIdListResultInfo.md#cost)

***

### datetime\_done?

> `optional` **datetime\_done**: `string`

Defined in: main.ts:27366

date and time when the task was completed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`datetime_done`](../interfaces/ISerpIdListResultInfo.md#datetime_done)

***

### datetime\_posted?

> `optional` **datetime\_posted**: `string`

Defined in: main.ts:27361

date and time when the task was made
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`datetime_posted`](../interfaces/ISerpIdListResultInfo.md#datetime_posted)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:27353

id of the task

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`id`](../interfaces/ISerpIdListResultInfo.md#id)

***

### metadata?

> `optional` **metadata**: `object`

Defined in: main.ts:27373

contains parameters you specified in the POST request

#### Index Signature

\[`key`: `string`\]: `any`

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`metadata`](../interfaces/ISerpIdListResultInfo.md#metadata)

***

### status?

> `optional` **status**: `string`

Defined in: main.ts:27369

informational message of the task
you can find the full list of general informational messages here

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`status`](../interfaces/ISerpIdListResultInfo.md#status)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:27356

URL of the task
URL you used for making an API call

#### Implementation of

[`ISerpIdListResultInfo`](../interfaces/ISerpIdListResultInfo.md).[`url`](../interfaces/ISerpIdListResultInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27386

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:27415

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpIdListResultInfo`

Defined in: main.ts:27408

#### Parameters

##### data

`any`

#### Returns

`SerpIdListResultInfo`
