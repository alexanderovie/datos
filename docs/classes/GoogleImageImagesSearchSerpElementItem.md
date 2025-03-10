[**Documentation**](../README.md)

***

[Documentation](../README.md) / GoogleImageImagesSearchSerpElementItem

# Class: GoogleImageImagesSearchSerpElementItem

Defined in: main.ts:53311

## Extends

- [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Implements

- [`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new GoogleImageImagesSearchSerpElementItem()

> **new GoogleImageImagesSearchSerpElementItem**(`data`?): [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

Defined in: main.ts:53327

#### Parameters

##### data?

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md)

#### Returns

[`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`constructor`](BaseGoogleImagesSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:53161

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`_discriminator`](BaseGoogleImagesSerpElementItem.md#_discriminator)

***

### alt?

> `optional` **alt**: `string`

Defined in: main.ts:53317

the alt tag of the image

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`alt`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#alt)

***

### encoded\_url?

> `optional` **encoded\_url**: `string`

Defined in: main.ts:53323

the URL of the cached version of the image stored on Google’s servers

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`encoded_url`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#encoded_url)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:53157

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`rank_absolute`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_absolute`](BaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:53154

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`rank_group`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#rank_group)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`rank_group`](BaseGoogleImagesSerpElementItem.md#rank_group)

***

### source\_url?

> `optional` **source\_url**: `string`

Defined in: main.ts:53321

the URL of the source image

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`source_url`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#source_url)

***

### subtitle?

> `optional` **subtitle**: `string`

Defined in: main.ts:53315

subtitle of the result in SERP

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`subtitle`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#subtitle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:53313

title of the result in SERP

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`title`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:53150

type of element

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`type`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#type)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`type`](BaseGoogleImagesSerpElementItem.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:53319

search URL with refinement parameters

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`url`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#url)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:53159

the XPath of the element

#### Implementation of

[`IGoogleImageImagesSearchSerpElementItem`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md).[`xpath`](../interfaces/IGoogleImageImagesSearchSerpElementItem.md#xpath)

#### Inherited from

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`xpath`](BaseGoogleImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:53332

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`init`](BaseGoogleImagesSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:53355

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`toJSON`](BaseGoogleImagesSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

Defined in: main.ts:53348

#### Parameters

##### data

`any`

#### Returns

[`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)

#### Overrides

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md).[`fromJS`](BaseGoogleImagesSerpElementItem.md#fromjs)
