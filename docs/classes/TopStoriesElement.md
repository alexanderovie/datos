[**Documentation**](../README.md)

***

[Documentation](../README.md) / TopStoriesElement

# Class: TopStoriesElement

Defined in: main.ts:33637

## Implements

- [`ITopStoriesElement`](../interfaces/ITopStoriesElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### Constructor

> **new TopStoriesElement**(`data?`): `TopStoriesElement`

Defined in: main.ts:33667

#### Parameters

##### data?

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md)

#### Returns

`TopStoriesElement`

## Properties

### amp\_version?

> `optional` **amp\_version**: `boolean`

Defined in: main.ts:33651

Accelerated Mobile Pages
indicates whether an item has the Accelerated Mobile Page (AMP) version

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`amp_version`](../interfaces/ITopStoriesElement.md#amp_version)

***

### badges?

> `optional` **badges**: `string`[]

Defined in: main.ts:33663

badges relevant to the element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`badges`](../interfaces/ITopStoriesElement.md#badges)

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:33648

the date when the page source of the element was published

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`date`](../interfaces/ITopStoriesElement.md#date)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:33644

website domain

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`domain`](../interfaces/ITopStoriesElement.md#domain)

***

### image\_url?

> `optional` **image\_url**: `string`

Defined in: main.ts:33661

URL of the image
the URL leading to the image on the original resource or DataForSEO storage (in case the original source is not available)

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`image_url`](../interfaces/ITopStoriesElement.md#image_url)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:33642

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`source`](../interfaces/ITopStoriesElement.md#source)

***

### timestamp?

> `optional` **timestamp**: `string`

Defined in: main.ts:33656

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`timestamp`](../interfaces/ITopStoriesElement.md#timestamp)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:33646

title of a given link element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`title`](../interfaces/ITopStoriesElement.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:33639

type of element

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`type`](../interfaces/ITopStoriesElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:33658

URL

#### Implementation of

[`ITopStoriesElement`](../interfaces/ITopStoriesElement.md).[`url`](../interfaces/ITopStoriesElement.md#url)

## Methods

### init()

> **init**(`_data?`): `void`

Defined in: main.ts:33676

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data?`): `any`

Defined in: main.ts:33706

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): `TopStoriesElement`

Defined in: main.ts:33699

#### Parameters

##### data

`any`

#### Returns

`TopStoriesElement`
