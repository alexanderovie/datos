[**Documentation**](../README.md)

***

[Documentation](../README.md) / ResponseDataInfo

# Class: ResponseDataInfo

Defined in: main.ts:215180

## Implements

- [`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ResponseDataInfo**(`data`?): `ResponseDataInfo`

Defined in: main.ts:215196

#### Parameters

##### data?

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md)

#### Returns

`ResponseDataInfo`

## Properties

### author?

> `optional` **author**: `string`

Defined in: main.ts:215182

author of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`author`](../interfaces/IResponseDataInfo.md#author)

***

### text?

> `optional` **text**: `string`

Defined in: main.ts:215187

content of the response

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`text`](../interfaces/IResponseDataInfo.md#text)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:215192

date and time when the response was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”;
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`timestamp`](../interfaces/IResponseDataInfo.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:215185

title of the response
in this case, will equal null

#### Implementation of

[`IResponseDataInfo`](../interfaces/IResponseDataInfo.md).[`title`](../interfaces/IResponseDataInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:215205

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:215225

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ResponseDataInfo`

Defined in: main.ts:215218

#### Parameters

##### data

`any`

#### Returns

`ResponseDataInfo`
