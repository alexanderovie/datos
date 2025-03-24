[**Documentation**](../README.md)

***

[Documentation](../README.md) / ScreenshotItem

# Class: ScreenshotItem

Defined in: main.ts:28017

## Implements

- [`IScreenshotItem`](../interfaces/IScreenshotItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ScreenshotItem**(`data`?): `ScreenshotItem`

Defined in: main.ts:28025

#### Parameters

##### data?

[`IScreenshotItem`](../interfaces/IScreenshotItem.md)

#### Returns

`ScreenshotItem`

## Properties

### image?

> `optional` **image**: `string`

Defined in: main.ts:28021

screenshot of the requested page
URL of the page screenshot on the DataForSEO storage
note: the page screenshot saved on the DataForSEO storage only remains accessible for one day after making the request

#### Implementation of

[`IScreenshotItem`](../interfaces/IScreenshotItem.md).[`image`](../interfaces/IScreenshotItem.md#image)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:28034

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:28051

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ScreenshotItem`

Defined in: main.ts:28044

#### Parameters

##### data

`any`

#### Returns

`ScreenshotItem`
