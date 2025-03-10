[**Documentation**](../README.md)

***

[Documentation](../README.md) / PaidSerpElementItem

# Class: PaidSerpElementItem

Defined in: main.ts:29966

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PaidSerpElementItem()

> **new PaidSerpElementItem**(`data`?): [`PaidSerpElementItem`](PaidSerpElementItem.md)

Defined in: main.ts:30015

#### Parameters

##### data?

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md)

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21783

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### breadcrumb?

> `optional` **breadcrumb**: `string`

Defined in: main.ts:29980

breadcrumb in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`breadcrumb`](../interfaces/IPaidSerpElementItem.md#breadcrumb)

***

### description?

> `optional` **description**: `string`

Defined in: main.ts:29994

description of the results element in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`description`](../interfaces/IPaidSerpElementItem.md#description)

***

### description\_rows?

> `optional` **description\_rows**: `string`[]

Defined in: main.ts:29997

extended description
if there is none, equals null

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`description_rows`](../interfaces/IPaidSerpElementItem.md#description_rows)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:29976

domain name of the reference

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`domain`](../interfaces/IPaidSerpElementItem.md#domain)

***

### extra?

> `optional` **extra**: `object`

Defined in: main.ts:29992

additional information about the result

#### Index Signature

\[`key`: `string`\]: `string`

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`extra`](../interfaces/IPaidSerpElementItem.md#extra)

***

### highlighted?

> `optional` **highlighted**: `string`[]

Defined in: main.ts:29990

words highlighted in bold within the results description

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`highlighted`](../interfaces/IPaidSerpElementItem.md#highlighted)

***

### images?

> `optional` **images**: [`ImagesElement`](ImagesElement.md)[]

Defined in: main.ts:29986

images of the element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`images`](../interfaces/IPaidSerpElementItem.md#images)

***

### is\_image?

> `optional` **is\_image**: `boolean`

Defined in: main.ts:29982

indicates whether the element contains an image

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`is_image`](../interfaces/IPaidSerpElementItem.md#is_image)

***

### is\_video?

> `optional` **is\_video**: `boolean`

Defined in: main.ts:29984

indicates whether the element contains a video

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`is_video`](../interfaces/IPaidSerpElementItem.md#is_video)

***

### links?

> `optional` **links**: [`AdLinkElement`](AdLinkElement.md)[]

Defined in: main.ts:30001

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`links`](../interfaces/IPaidSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:29970

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`position`](../interfaces/IPaidSerpElementItem.md#position)

***

### price?

> `optional` **price**: [`PriceInfo`](PriceInfo.md)

Defined in: main.ts:30004

pricing details
contains the pricing details of the product or service featured in the result

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`price`](../interfaces/IPaidSerpElementItem.md#price)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21781

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rank_absolute`](../interfaces/IPaidSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21778

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rank_group`](../interfaces/IPaidSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rating?

> `optional` **rating**: [`RatingInfo`](RatingInfo.md)

Defined in: main.ts:30007

the item’s rating 
the popularity rate based on reviews and displayed in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rating`](../interfaces/IPaidSerpElementItem.md#rating)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:30011

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`rectangle`](../interfaces/IPaidSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:29974

title of the result in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`title`](../interfaces/IPaidSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21774

type of element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`type`](../interfaces/IPaidSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:29988

relevant URL in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`url`](../interfaces/IPaidSerpElementItem.md#url)

***

### website\_name?

> `optional` **website\_name**: `string`

Defined in: main.ts:29978

name of the website in SERP

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`website_name`](../interfaces/IPaidSerpElementItem.md#website_name)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:29972

the XPath of the element

#### Implementation of

[`IPaidSerpElementItem`](../interfaces/IPaidSerpElementItem.md).[`xpath`](../interfaces/IPaidSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:30020

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:30077

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`PaidSerpElementItem`](PaidSerpElementItem.md)

Defined in: main.ts:30070

#### Parameters

##### data

`any`

#### Returns

[`PaidSerpElementItem`](PaidSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
