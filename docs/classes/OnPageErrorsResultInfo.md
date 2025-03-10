[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageErrorsResultInfo

# Class: OnPageErrorsResultInfo

Defined in: main.ts:172965

## Implements

- [`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageErrorsResultInfo()

> **new OnPageErrorsResultInfo**(`data`?): [`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

Defined in: main.ts:172996

#### Parameters

##### data?

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md)

#### Returns

[`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

## Properties

### datetime?

> `optional` **datetime**: `string`

Defined in: main.ts:172972

date and time when an error occurred
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`datetime`](../interfaces/IOnPageErrorsResultInfo.md#datetime)

***

### error\_code?

> `optional` **error\_code**: `number`

Defined in: main.ts:172976

error code

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`error_code`](../interfaces/IOnPageErrorsResultInfo.md#error_code)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:172979

error message or error URL
error message (see full list) or URL that caused an error

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`error_message`](../interfaces/IOnPageErrorsResultInfo.md#error_message)

***

### function?

> `optional` **function**: `string`

Defined in: main.ts:172974

corresponding API function

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`function`](../interfaces/IOnPageErrorsResultInfo.md#function)

***

### http\_code?

> `optional` **http\_code**: `number`

Defined in: main.ts:172986

HTTP status code

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_code`](../interfaces/IOnPageErrorsResultInfo.md#http_code)

***

### http\_method?

> `optional` **http\_method**: `string`

Defined in: main.ts:172984

HTTP method

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_method`](../interfaces/IOnPageErrorsResultInfo.md#http_method)

***

### http\_response?

> `optional` **http\_response**: `string`

Defined in: main.ts:172992

HTTP response
server response

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_response`](../interfaces/IOnPageErrorsResultInfo.md#http_response)

***

### http\_time?

> `optional` **http\_time**: `number`

Defined in: main.ts:172989

time taken by HTTP request
for tasks set with a pingback/postback, this field will show the time it took your server to respond

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_time`](../interfaces/IOnPageErrorsResultInfo.md#http_time)

***

### http\_url?

> `optional` **http\_url**: `string`

Defined in: main.ts:172982

URL that caused an error
URL you used for making an API call or pingback/postback URL

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`http_url`](../interfaces/IOnPageErrorsResultInfo.md#http_url)

***

### id?

> `optional` **id**: `string`

Defined in: main.ts:172967

id of the task

#### Implementation of

[`IOnPageErrorsResultInfo`](../interfaces/IOnPageErrorsResultInfo.md).[`id`](../interfaces/IOnPageErrorsResultInfo.md#id)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173005

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173031

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)

Defined in: main.ts:173024

#### Parameters

##### data

`any`

#### Returns

[`OnPageErrorsResultInfo`](OnPageErrorsResultInfo.md)
