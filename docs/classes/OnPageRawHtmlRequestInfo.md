[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageRawHtmlRequestInfo

# Class: OnPageRawHtmlRequestInfo

Defined in: main.ts:184050

## Implements

- [`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageRawHtmlRequestInfo**(`data`?): `OnPageRawHtmlRequestInfo`

Defined in: main.ts:184065

#### Parameters

##### data?

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md)

#### Returns

`OnPageRawHtmlRequestInfo`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:184056

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`id`](../interfaces/IOnPageRawHtmlRequestInfo.md#id)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:184061

page url
required field
the absolute URL of a page to request HTML
Note: this field is optional if the task was set using the Instant Pages endpoint

#### Implementation of

[`IOnPageRawHtmlRequestInfo`](../interfaces/IOnPageRawHtmlRequestInfo.md).[`url`](../interfaces/IOnPageRawHtmlRequestInfo.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184074

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:184092

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageRawHtmlRequestInfo`

Defined in: main.ts:184085

#### Parameters

##### data

`any`

#### Returns

`OnPageRawHtmlRequestInfo`
