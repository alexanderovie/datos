[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataIdListRequestInfo

# Class: AppDataIdListRequestInfo

Defined in: main.ts:207215

## Implements

- [`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataIdListRequestInfo()

> **new AppDataIdListRequestInfo**(`data`?): [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

Defined in: main.ts:207253

#### Parameters

##### data?

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md)

#### Returns

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:207223

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`datetime_from`](../interfaces/IAppDataIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:207230

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`datetime_to`](../interfaces/IAppDataIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:207249

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`include_metadata`](../interfaces/IAppDataIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:207235

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`limit`](../interfaces/IAppDataIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:207240

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`offset`](../interfaces/IAppDataIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:207245

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IAppDataIdListRequestInfo`](../interfaces/IAppDataIdListRequestInfo.md).[`sort`](../interfaces/IAppDataIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:207262

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:207284

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)

Defined in: main.ts:207277

#### Parameters

##### data

`any`

#### Returns

[`AppDataIdListRequestInfo`](AppDataIdListRequestInfo.md)
