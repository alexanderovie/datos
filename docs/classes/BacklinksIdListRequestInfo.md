[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksIdListRequestInfo

# Class: BacklinksIdListRequestInfo

Defined in: main.ts:160674

## Implements

- [`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new BacklinksIdListRequestInfo**(`data`?): `BacklinksIdListRequestInfo`

Defined in: main.ts:160712

#### Parameters

##### data?

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md)

#### Returns

`BacklinksIdListRequestInfo`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:160682

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`datetime_from`](../interfaces/IBacklinksIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:160689

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`datetime_to`](../interfaces/IBacklinksIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:160708

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`include_metadata`](../interfaces/IBacklinksIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:160694

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`limit`](../interfaces/IBacklinksIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:160699

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`offset`](../interfaces/IBacklinksIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:160704

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IBacklinksIdListRequestInfo`](../interfaces/IBacklinksIdListRequestInfo.md).[`sort`](../interfaces/IBacklinksIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160721

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160743

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `BacklinksIdListRequestInfo`

Defined in: main.ts:160736

#### Parameters

##### data

`any`

#### Returns

`BacklinksIdListRequestInfo`
