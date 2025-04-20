[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageWaterfallRequestInfo

# Class: OnPageWaterfallRequestInfo

Defined in: main.ts:183016

## Implements

- [`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPageWaterfallRequestInfo**(`data?`): `OnPageWaterfallRequestInfo`

Defined in: main.ts:183036

#### Parameters

##### data?

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md)

#### Returns

`OnPageWaterfallRequestInfo`

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:183022

ID of the task
required field
you can get this ID in the response of the Task POST endpoint
example:
“07131248-1535-0216-1000-17384017ad04”

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`id`](../interfaces/IOnPageWaterfallRequestInfo.md#id)

***

### tag?

> `optional` **tag**: `string`

Defined in: main.ts:183032

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`tag`](../interfaces/IOnPageWaterfallRequestInfo.md#tag)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:183026

page URL
required field
specify the pages you want to receive timing for

#### Implementation of

[`IOnPageWaterfallRequestInfo`](../interfaces/IOnPageWaterfallRequestInfo.md).[`url`](../interfaces/IOnPageWaterfallRequestInfo.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:183045

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:183064

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPageWaterfallRequestInfo`

Defined in: main.ts:183057

#### Parameters

##### data

`any`

#### Returns

`OnPageWaterfallRequestInfo`
