[**Documentation**](../README.md)

***

[Documentation](../README.md) / CarouselElement

# Class: CarouselElement

Defined in: main.ts:34792

## Implements

- [`ICarouselElement`](../interfaces/ICarouselElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CarouselElement()

> **new CarouselElement**(`data`?): [`CarouselElement`](CarouselElement.md)

Defined in: main.ts:34805

#### Parameters

##### data?

[`ICarouselElement`](../interfaces/ICarouselElement.md)

#### Returns

[`CarouselElement`](CarouselElement.md)

## Properties

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:34801

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`image_url`](../interfaces/ICarouselElement.md#image_url)

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:34798

subtitle of the element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`subtitle`](../interfaces/ICarouselElement.md#subtitle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:34796

title of a given link element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`title`](../interfaces/ICarouselElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:34794

type of element

#### Implementation of

[`ICarouselElement`](../interfaces/ICarouselElement.md).[`type`](../interfaces/ICarouselElement.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:34814

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:34834

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CarouselElement`](CarouselElement.md)

Defined in: main.ts:34827

#### Parameters

##### data

`any`

#### Returns

[`CarouselElement`](CarouselElement.md)
