[**Documentation**](../README.md)

***

[Documentation](../README.md) / ImagesElement

# Class: ImagesElement

Defined in: main.ts:31979

## Implements

- [`IImagesElement`](../interfaces/IImagesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ImagesElement**(`data`?): `ImagesElement`

Defined in: main.ts:31992

#### Parameters

##### data?

[`IImagesElement`](../interfaces/IImagesElement.md)

#### Returns

`ImagesElement`

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:31983

alt tag of the image

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`alt`](../interfaces/IImagesElement.md#alt)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:31988

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`image_url`](../interfaces/IImagesElement.md#image_url)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31981

type of element

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`type`](../interfaces/IImagesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:31985

URL link

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`url`](../interfaces/IImagesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:32001

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:32021

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ImagesElement`

Defined in: main.ts:32014

#### Parameters

##### data

`any`

#### Returns

`ImagesElement`
