[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPagePageScreenshotResultInfo

# Class: OnPagePageScreenshotResultInfo

Defined in: main.ts:184574

## Implements

- [`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new OnPagePageScreenshotResultInfo**(`data`?): `OnPagePageScreenshotResultInfo`

Defined in: main.ts:184589

#### Parameters

##### data?

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md)

#### Returns

`OnPagePageScreenshotResultInfo`

## Properties

### crawl\_progress?

> `optional` **crawl\_progress**: `string`

Defined in: main.ts:184577

status of the crawling session
possible values: in_progress, finished

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`crawl_progress`](../interfaces/IOnPagePageScreenshotResultInfo.md#crawl_progress)

***

### error\_message?

> `optional` **error\_message**: `string`

Defined in: main.ts:184581

error message
if the url you indicated returns a 404 status code or is not a valid URL, you will obtain "error_message":"Screenshot is empty"
if no error is encountered, the value will be null

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`error_message`](../interfaces/IOnPagePageScreenshotResultInfo.md#error_message)

***

### items?

> `optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

Defined in: main.ts:184585

items array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items`](../interfaces/IOnPagePageScreenshotResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:184583

number of items in the results array

#### Implementation of

[`IOnPagePageScreenshotResultInfo`](../interfaces/IOnPagePageScreenshotResultInfo.md).[`items_count`](../interfaces/IOnPagePageScreenshotResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:184598

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:184622

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `OnPagePageScreenshotResultInfo`

Defined in: main.ts:184615

#### Parameters

##### data

`any`

#### Returns

`OnPagePageScreenshotResultInfo`
