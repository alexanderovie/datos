[**Documentation**](../README.md)

***

[Documentation](../README.md) / ScreenshotItem

# Class: ScreenshotItem

Defined in: main.ts:27590

## Implements

- [`IScreenshotItem`](../interfaces/IScreenshotItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ScreenshotItem()

> **new ScreenshotItem**(`data`?): [`ScreenshotItem`](ScreenshotItem.md)

Defined in: main.ts:27598

#### Parameters

##### data?

[`IScreenshotItem`](../interfaces/IScreenshotItem.md)

#### Returns

[`ScreenshotItem`](ScreenshotItem.md)

## Properties

### image?

> `optional` **image**: `string`

Defined in: main.ts:27594

screenshot of the requested page
URL of the page screenshot on the DataForSEO storage
note: the page screenshot saved on the DataForSEO storage only remains accessible for one day after making the request

#### Implementation of

[`IScreenshotItem`](../interfaces/IScreenshotItem.md).[`image`](../interfaces/IScreenshotItem.md#image)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:27607

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:27624

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ScreenshotItem`](ScreenshotItem.md)

Defined in: main.ts:27617

#### Parameters

##### data

`any`

#### Returns

[`ScreenshotItem`](ScreenshotItem.md)
