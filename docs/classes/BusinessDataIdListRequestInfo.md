[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataIdListRequestInfo

# Class: BusinessDataIdListRequestInfo

Defined in: main.ts:221666

## Implements

- [`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BusinessDataIdListRequestInfo**(`data?`): `BusinessDataIdListRequestInfo`

Defined in: main.ts:221704

#### Parameters

##### data?

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md)

#### Returns

`BusinessDataIdListRequestInfo`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:221674

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`datetime_from`](../interfaces/IBusinessDataIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:221681

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`datetime_to`](../interfaces/IBusinessDataIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:221700

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`include_metadata`](../interfaces/IBusinessDataIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:221686

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`limit`](../interfaces/IBusinessDataIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:221691

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`offset`](../interfaces/IBusinessDataIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:221696

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IBusinessDataIdListRequestInfo`](../interfaces/IBusinessDataIdListRequestInfo.md).[`sort`](../interfaces/IBusinessDataIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:221713

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:221735

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BusinessDataIdListRequestInfo`

Defined in: main.ts:221728

#### Parameters

##### data

`any`

#### Returns

`BusinessDataIdListRequestInfo`
