[**Documentation**](../README.md)

***

[Documentation](../README.md) / SerpScreenshotResultInfo

# Class: SerpScreenshotResultInfo

Defined in: main.ts:28071

## Implements

- [`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new SerpScreenshotResultInfo**(`data`?): `SerpScreenshotResultInfo`

Defined in: main.ts:28079

#### Parameters

##### data?

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md)

#### Returns

`SerpScreenshotResultInfo`

## Properties

### items?

> `optional` **items**: [`ScreenshotItem`](ScreenshotItem.md)[]

Defined in: main.ts:28075

items array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items`](../interfaces/ISerpScreenshotResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:28073

number of items in the results array

#### Implementation of

[`ISerpScreenshotResultInfo`](../interfaces/ISerpScreenshotResultInfo.md).[`items_count`](../interfaces/ISerpScreenshotResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:28088

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:28110

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `SerpScreenshotResultInfo`

Defined in: main.ts:28103

#### Parameters

##### data

`any`

#### Returns

`SerpScreenshotResultInfo`
