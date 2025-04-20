[**Documentation**](../README.md)

***

[Documentation](../README.md) / MerchantIdListRequestInfo

# Class: MerchantIdListRequestInfo

Defined in: main.ts:196148

## Implements

- [`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new MerchantIdListRequestInfo**(`data?`): `MerchantIdListRequestInfo`

Defined in: main.ts:196186

#### Parameters

##### data?

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md)

#### Returns

`MerchantIdListRequestInfo`

## Properties

### datetime\_from?

> `optional` **datetime\_from**: `string`

Defined in: main.ts:196156

start time for filtering results
required field
if include_metadata is set to true, maximum value: a month from current datetime;
if include_metadata is set to false, maximum value: six months from current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-15 12:57:46 +00:00

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`datetime_from`](../interfaces/IMerchantIdListRequestInfo.md#datetime_from)

***

### datetime\_to?

> `optional` **datetime\_to**: `string`

Defined in: main.ts:196163

finish time for filtering results
required field
maximum value: current datetime;
must be specified in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2023-01-31 13:57:46 +00:00

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`datetime_to`](../interfaces/IMerchantIdListRequestInfo.md#datetime_to)

***

### include\_metadata?

> `optional` **include\_metadata**: `boolean`

Defined in: main.ts:196182

include task metadata in the respond
optional field
default value: false

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`include_metadata`](../interfaces/IMerchantIdListRequestInfo.md#include_metadata)

***

### limit?

> `optional` **limit**: `number`

Defined in: main.ts:196168

the maximum number of returned task IDs
optional field
default value: 1000
maximum value: 1000

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`limit`](../interfaces/IMerchantIdListRequestInfo.md#limit)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:196173

offset in the results array of returned task IDs
optional field
default value: 0
if you specify the 10 value, the first ten tasks in the results array will be omitted

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`offset`](../interfaces/IMerchantIdListRequestInfo.md#offset)

***

### sort?

> `optional` **sort**: `string`

Defined in: main.ts:196178

sorting by task execution time
optional field
possible values: "asc", "desc"
default value: "asc"

#### Implementation of

[`IMerchantIdListRequestInfo`](../interfaces/IMerchantIdListRequestInfo.md).[`sort`](../interfaces/IMerchantIdListRequestInfo.md#sort)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:196195

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:196217

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `MerchantIdListRequestInfo`

Defined in: main.ts:196210

#### Parameters

##### data

`any`

#### Returns

`MerchantIdListRequestInfo`
