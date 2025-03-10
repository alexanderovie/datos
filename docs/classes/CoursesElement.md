[**Documentation**](../README.md)

***

[Documentation](../README.md) / CoursesElement

# Class: CoursesElement

Defined in: main.ts:40222

## Implements

- [`ICoursesElement`](../interfaces/ICoursesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new CoursesElement()

> **new CoursesElement**(`data`?): [`CoursesElement`](CoursesElement.md)

Defined in: main.ts:40247

#### Parameters

##### data?

[`ICoursesElement`](../interfaces/ICoursesElement.md)

#### Returns

[`CoursesElement`](CoursesElement.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:40237

the date when the page source of the element was published

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`date`](../interfaces/ICoursesElement.md#date)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:40235

description

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`description`](../interfaces/ICoursesElement.md#description)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:40230

website domain

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`domain`](../interfaces/ICoursesElement.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:40240

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`image_url`](../interfaces/ICoursesElement.md#image_url)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:40243

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`rating`](../interfaces/ICoursesElement.md#rating)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:40233

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`source`](../interfaces/ICoursesElement.md#source)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:40226

title of a given link element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`title`](../interfaces/ICoursesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:40224

type of element

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`type`](../interfaces/ICoursesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:40228

URL

#### Implementation of

[`ICoursesElement`](../interfaces/ICoursesElement.md).[`url`](../interfaces/ICoursesElement.md#url)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:40256

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:40281

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`CoursesElement`](CoursesElement.md)

Defined in: main.ts:40274

#### Parameters

##### data

`any`

#### Returns

[`CoursesElement`](CoursesElement.md)
