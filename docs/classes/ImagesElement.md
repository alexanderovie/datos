[**Documentation**](../README.md)

***

[Documentation](../README.md) / ImagesElement

# Class: ImagesElement

Defined in: main.ts:31987

## Implements

- [`IImagesElement`](../interfaces/IImagesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new ImagesElement**(`data?`): `ImagesElement`

Defined in: main.ts:32000

#### Parameters

##### data?

[`IImagesElement`](../interfaces/IImagesElement.md)

#### Returns

`ImagesElement`

## Properties

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:31991

alt tag of the image

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`alt`](../interfaces/IImagesElement.md#alt)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:31996

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`image_url`](../interfaces/IImagesElement.md#image_url)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:31989

type of element

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`type`](../interfaces/IImagesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:31993

URL link

#### Implementation of

[`IImagesElement`](../interfaces/IImagesElement.md).[`url`](../interfaces/IImagesElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:32009

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:32029

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `ImagesElement`

Defined in: main.ts:32022

#### Parameters

##### data

`any`

#### Returns

`ImagesElement`
